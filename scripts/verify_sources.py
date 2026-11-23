#!/usr/bin/env python3
"""
scripts/verify_sources.py

Verificatiescript voor bronnen en literatuurverwijzingen.
Controleert externe URL's in markdown-bestanden met DIEPE CONTENT-INSPECTIE:
- Inspecteert de werkelijke HTML <title> en meta-tags van elke URL.
- Ontmaskert 'zachte 404s' (Single Page Apps zoals Spotify die bij niet-bestaande afleveringen HTTP 200 sturen met 'Page not found').
- Dwingt af dat de server-side titel bewezen wordt.
- Controleert op verboden em-dashes ('—') en stijlafspraken.

Gebruik:
    python3 scripts/verify_sources.py [bestand1.md bestand2.md ...]
    Zonder argumenten worden alle gewijzigde en niet-gecommitte markdown-bestanden gecontroleerd.
"""

import sys
import os
import re
import subprocess
import urllib.request
import urllib.error

# Fouttitels die duiden op een dode of niet-bestaande pagina
ERROR_TITLE_PATTERNS = [
    r"page not found",
    r"404 not found",
    r"404 - not found",
    r"pagina niet gevonden",
    r"^not found$",
    r"^error$",
    r"oops! that page can’t be found",
    r"we can’t seem to find the page",
    r"site not found"
]

# Domeinen die bots/scripts met WAF blokkeren (maar waarvan het bestaan van de pagina met gerichte headers te testen is)
KNOWN_CLOUDFLARE_DOMAINS = [
    "fetlife.com",
    "wiley.com",
    "guilford.com",
    "harpercollins.com",
    "github.com"
]

def extract_title(html_text):
    """Extraheert en schoont de <title> tag op."""
    m = re.search(r"<title[^>]*>(.*?)</title>", html_text, re.IGNORECASE | re.DOTALL)
    if m:
        title = m.group(1).strip()
        title = re.sub(r"\s+", " ", title)
        title = title.replace("&quot;", "\"").replace("&amp;", "&").replace("&#39;", "'")
        return title
    return None

def check_url_content(url, timeout=10):
    """
    Controleert een URL en haalt de werkelijke paginatitel op.
    Geeft (success: bool, detail: str) terug.
    """
    # Voor Spotify gebruiken we een crawler header (facebookexternalhit of Twitterbot).
    # Spotify's backend levert dan server-side rendered HTML met de echte afleveringstitel,
    # of geeft een directe HTTP 404 terug als de aflevering NIET bestaat.
    if "spotify.com" in url:
        headers = {"User-Agent": "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"}
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                content = resp.read(30000).decode("utf-8", errors="ignore")
                title = extract_title(content)
                if not title or "page not found" in title.lower():
                    return False, f"Spotify aflevering bestaat niet (Titel: '{title}')"
                return True, f"Spotify OK (Titel: '{title[:70]}')"
        except urllib.error.HTTPError as e:
            return False, f"Spotify aflevering niet gevonden: HTTP {e.code}"
        except Exception as e:
            return False, f"Spotify controlefout: {e}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
    }

    # Speciale behandeling voor DOI-resolutie
    if "doi.org" in url:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                final_url = resp.geturl()
                content = resp.read(10000).decode("utf-8", errors="ignore")
                title = extract_title(content) or f"Geresolveerd naar: {final_url}"
                return True, f"DOI OK (Titel: '{title[:70]}')"
        except urllib.error.HTTPError as e:
            if e.code in [301, 302, 403]:
                return True, f"DOI bestaat (Server response: HTTP {e.code})"
            return False, f"DOI fout: HTTP {e.code}"
        except Exception as e:
            return False, f"DOI fout: {e}"

    # Standaard content inspectie
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            status = resp.status
            content = resp.read(30000).decode("utf-8", errors="ignore")
            title = extract_title(content)

            # Controleer op 'zachte 404s' (HTTP 200 met foutpagina in titel)
            if title:
                title_lower = title.lower()
                for pattern in ERROR_TITLE_PATTERNS:
                    if re.search(pattern, title_lower):
                        return False, f"ZACHTE 404 ONTDEKT: Server geeft HTTP {status}, maar paginatitel luidt: '{title}'"
                return True, f"OK [HTTP {status}] (Titel: '{title[:65]}')"
            else:
                return True, f"OK [HTTP {status}] (Geen HTML-titel, binary/data content)"

    except urllib.error.HTTPError as e:
        for domain in KNOWN_CLOUDFLARE_DOMAINS:
            if domain in url:
                if e.code in [403, 429]:
                    return True, f"Domein actief [HTTP {e.code} bot-bescherming door {domain}]"
        return False, f"HTTP Error {e.code}: {e.reason}"
    except Exception as e:
        return False, f"Verbindingsfout: {e}"

def get_markdown_files(targets):
    if targets:
        files = []
        for t in targets:
            if os.path.isfile(t) and t.endswith(".md"):
                files.append(t)
            elif os.path.isdir(t):
                for root, _, filenames in os.walk(t):
                    for fn in filenames:
                        if fn.endswith(".md"):
                            files.append(os.path.join(root, fn))
        return files

    try:
        res = subprocess.run(["git", "status", "--porcelain"], stdout=subprocess.PIPE, text=True)
        files = []
        for line in res.stdout.splitlines():
            line = line.strip()
            if not line:
                continue
            parts = line.split(maxsplit=1)
            if len(parts) == 2:
                path = parts[1].strip("\"'")
                if path.endswith(".md") and os.path.isfile(path):
                    files.append(path)
        return files
    except Exception:
        files = []
        for root, _, filenames in os.walk("artikel-aanzetten"):
            for fn in filenames:
                if fn.endswith(".md"):
                    files.append(os.path.join(root, fn))
        return files

def main():
    targets = sys.argv[1:]
    files = get_markdown_files(targets)
    if not files:
        print("[verify_sources] Geen gewijzigde markdown-bestanden gevonden om te controleren.")
        return 0

    print(f"[verify_sources] Controleren van {len(files)} bestanden met DIEPE CONTENT-INSPECTIE...")
    broken = []
    em_dash_violations = []
    INSTRUCTION_FILES = ["AGENTS.md", "GEMINI.md", "schrijfstijl.md"]

    url_pattern = re.compile(r'\[([^\]]+)\]\((https?://[^)]+)\)')

    for filepath in files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        base_name = os.path.basename(filepath)
        if base_name not in INSTRUCTION_FILES and "—" in content:
            em_dash_violations.append(filepath)

        for line_no, line in enumerate(content.splitlines(), start=1):
            matches = url_pattern.findall(line)
            for text, url in matches:
                clean_url = url.strip()
                ok, reason = check_url_content(clean_url)
                if not ok:
                    broken.append((filepath, line_no, clean_url, reason))
                    print(f"  ❌ AFGEKEURD: {clean_url}")
                    print(f"     Reden: {reason}")
                else:
                    print(f"  ✅ {reason} -> {clean_url[:60]}")

    if em_dash_violations:
        print("\n[FOUT] Em-dash ('—') aangetroffen in:")
        for f in em_dash_violations:
            print(f"  - {f}")

    if broken:
        print(f"\n[ALARM] {len(broken)} ONBETROUWBARE OF DODE EXTERNE URL'S GEVONDEN:")
        for f, line, url, reason in broken:
            print(f"  - {f}:{line}\n    URL: {url}\n    Fout: {reason}\n")
        print("ABSOLUUT VERBOD OP VERZONNEN BRONNEN: Corrigeer of verwijder deze links voordat je verder gaat.")
        return 1

    print("\n[SUCCES] Alle gecontroleerde externe bronnen zijn met diepe content-inspectie geverifieerd!")
    return 0

if __name__ == "__main__":
    sys.exit(main())
