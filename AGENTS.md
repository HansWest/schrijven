# Instructies voor AI-Agents (AGENTS.md)

> **BELANGRIJK: Deze instructies zijn leidend voor elke AI-agent die in deze workspace leest, schrijft of redigeert.**

---

## 1. ABSOLUUT VERBOD OP HET HALLUCINEREN VAN LITERATUURVERWIJZINGEN EN BRONNEN

> **HET PRINCIPE IS ONWRIKBAAR: "Bullshit is gewoon bullshit als het niet waar is. Wetenschappelijke literatuur DIE BESTAAT! of helemaal NIKS als er niks is."**
> **De auteur tolereert onder GEEN ENKELE VOORWAARDE dat een AI literatuurverwijzingen, podcasts, titels, auteurs, jaartallen, DOI's of web-URL's verzint, extrapoleert of 'plausibel invult'.**

1. **Alleen wetenschappelijke literatuur die daadwerkelijk bestaat (of HELEMAAL NIETS):**
   - Vraag jezelf altijd af: *Bestaat dit onderzoek of boek fysiek in de echte wereld?*
   - Voeg uitsluitend wetenschappelijke literatuur toe die traceerbaar en verifieerbaar is via PubMed, DOI (doi.org), Library of Congress/WorldCat of een erkende academische uitgever.
   - Is er voor een specifiek fenomeen, stelling of inzicht géén bestaande wetenschappelijke literatuur bekend of te verifiëren? **Voeg dan HELEMAAL NIETS toe.** Schrijf geen 'plausibel klinkende' artikeltitels of parallelle bronnen ter opvulling.
2. **BEWIJSPLICHT VIA PAGINATITEL (Zero-Tolerance voor aannames op basis van statuscodes):**
   - Een AI-agent mag een externe URL **NOOIT** als 'geverifieerd' presenteren of in een markdown-bestand opslaan zonder de letterlijke, server-side gerenderde HTML `<title>` te controleren en te kunnen tonen (bijv. `# 266 - SHORTS - "Ontdekken wat echt bij je past..."` of `Mating in Captivity | Esther Perel`).
   - Een `HTTP 200` statuscode alleen is **geen enkel bewijs**: platforms zoals Spotify, YouTube en React/Single Page Apps sturen vaak een HTTP 200 terug terwijl ze een 'Page not found'-scherm tonen.
   - Toont de server-side titel *"Page not found"*, *"Niet gevonden"* of een generieke fout? Dan is de URL **onbestaand en afgekeurd**.
   - Kan de agent niet de exacte, kloppende inhoudelijke paginatitel van de doelpagina bewijzen? Dan mag er **GEEN link** geplaatst worden. Vermeld het werk dan uitsluitend als platte bibliografische tekst (Auteur, Jaartal, Titel) of vraag de auteur expliciet om de link.
3. **Podcasts en community-bronnen:**
   - Plaats voor podcasts (zoals SinQuest) **nooit op eigen initiatief een afleveringslink**.
   - Vermeld afleveringen uitsluitend als platte tekst (bijv. `SinQuest #85: Polariteit tussen man en vrouw`), tenzij de auteur letterlijk zelf de geteste afleverings-URL aanlevert of deze via `scripts/verify_sources.py` met de exacte afleveringstitel is geverifieerd.
   - Verzin nóóit afleveringstitels, ondertitels of gasten die niet letterlijk door de auteur zijn genoemd.
4. **Automatische enforcement via `scripts/verify_sources.py`:**
   - Na elke bewerking of toevoeging van bronnen dient `python3 scripts/verify_sources.py` uitgevoerd te worden. Dit script inspecteert de inhoud en ontmaskert 'zachte 404s'.
   - De git pre-commit hook blokkeert automatisch commits met dode of ongevalideerde links.

---

## 2. Perspectief en taal

1. **Perspectief (Ik-vorm als persoonlijke stem):**
   - De auteur schrijft als individu/persoon in de **ik-vorm** (persoonlijk, direct, vanuit eigen observatie, coachingspraktijk en doorleefde ervaring).
   - Gebruik **nooit** corporatieve, koninklijke of afstandelijke meervoudsvormen zoals "we werken met", "in onze kennisbank", "zien we" of "leren we". Schrijf altijd: *"ik werk liever met"*, *"in mijn werkmodel"*, *"zie ik"* of *"beschrijf ik"*.
   - De wij-vorm is uitsluitend toegestaan wanneer er letterlijk verwezen wordt naar de twee partners samen binnen een scène of dynamiek (bijv. *"wat we gedaan hebben"* of *"wat leren we hiervan in de debriefing"*).
2. **Taal:**
   - Standaard is natuurlijk, direct Nederlands. Vraag bij twijfel vooraf in welke taal geschreven moet worden.

---

## 3. Typografie en stijlafspraken

1. **Geen em-dashes:**
   - Gebruik **nooit** de lange em-dash (`—`).
   - Gebruik voor gedachtestreepjes of terzijdes altijd een gewoon koppelteken met spaties (` - `) of een bare koppelteken (`-`).
2. **Tussenkopjes in *sentence case*:**
   - Eerste woord hoofdletter, de rest kleine letters tenzij eigennaam.
   - Kort en spreektaalnabij (bijv. "in het daten" in plaats van "in het datingproces").
3. **Rake volkstaal en scènetaal:**
   - Wees niet bang voor ongepolijste, directe bewoordingen ("empathieloze eikels" in plaats van afstandelijke metaforen).
   - Gebruik begrippen uit de community ("vanilla", "relatiecontainer", geuzennamen zoals "slut" en "queer") direct en ongegeneerd.
   - **Gebruik 'onderdanige' of 'submissive' (NOOIT 'onderdaan'):** Gebruik in BDSM- en D/s-context altijd "onderdanige", "onderdanigen", "submissive" of kortweg "sub". Gebruik **nooit** het woord "onderdaan" (dat klinkt feodaal/politiek en is geen scènetaal).
   - **Gebruik 'fetish' (NOOIT 'fetisj'):** Schrijf fetish (en meervoud fetishes) altijd met `-sh`, zoals in het Engels en in de internationale BDSM/kink-community gebruikelijk is. Gebruik **nooit** de vernederlandste spelling 'fetisj' of 'fetisjen'.
   - **Gebruik eerder 'in het spel' of 'in het BDSM-spel' (eerder dan 'op de speelvloer'):** Schrijf bij voorkeur *"in het spel"*, *"tijdens het spel"* of *"in het BDSM-spel"* in plaats van het meer theatrale of afstandelijke *"op de speelvloer"*. Dit houdt de taal intiem, natuurlijk en relationeel verankerd in de interactie tussen twee mensen, in plaats van een toneelpodium of evenementenlocatie.
4. **Website van de auteur (KinkindeRelatie.nl):**
   - Gebruik voor verwijzingen naar de website van de auteur altijd de aanduiding en link `KinkindeRelatie.nl` (bijv. `[KinkindeRelatie.nl](https://kinkinderelatie.nl)`), NOOIT `kinkinderelatie.com`.

---

## 4. Schrijfstijl en doorleefde stem van de auteur

1. **Spreektaal vóór jargon (vakterm als terzijde, niet als hoofdtoon):**
   - Zet altijd de herkenbare menselijke ervaring en het gewone woord voorop.
   - Introduceer academische of medische vaktermen relativerend en tussen haakjes (bijv. *"het denkende brein (de executieve neocortex)"*, of *"wel transiënte hypofrontaliteit genoemd"*).
2. **Auditieve klemtoon en gesproken ritme:**
   - Schrijf zinnen die natuurlijk en vloeiend klinken als ze hardop worden uitgesproken.
   - Gebruik cursivering doelgericht om de gesproken klemtoon op sleutelwoorden te sturen (bijv. `Je hoeft *niets* meer te bedenken`, `Wie bang is, *kan* zich niet meer bezighouden met...`).
   - Schuw klankverleners en spreektaalaccenten niet (bijv. `ein-de-lo-ze 'sublijsten'`).
3. **Scènetermen en geuzennamen ongegeneerd gebruiken:**
   - Gebruik de authentieke taal van de speelvloer (bijv. `'kooitje'`, `'slavinnentrots'`, `'inquiry'`, `'pre-scene'`, `'de Golf'`).
4. **Directe tweede persoon bij somatische sensaties:**
   - Spreek in lichamelijke beschrijvingen het lijf van de lezer direct aan (`"waarin je jouw lichaam niet eens meer kán sturen"`, `"een hand die jou inpakt"`) in plaats van afstandelijke, passieve constructies (`"het lichaam"`).
5. **Praktijkrealiteit relativeert dogmatische theorie:**
   - Voeg altijd de rommelige, doorleefde praktijk toe die zwart-witmodellen nuanceert (bijv. eigenaarschap relativeren met *"of wel: maar dan volgens afspraak - 'want juist wat je bezit kun je uitlenen'"*, of de serotonine-dip die zich pas na anderhalve dag meldt).
   - Onderscheid bij aftercare altijd scherp tussen de *biologische* zorg (suikers, warmte, water) en de *emotionele* erkenning (praise voor de getoonde moed en overgave).
6. **Geen academische scharnieren of schoolse overgangszinnetjes:**
   - Vermijd didactische bruggetjes en aankondigingen zoals *"Hieronder volgt de ontleding van..."*, *"Zoals we zagen in..."*, of *"Om dit te begrijpen moeten we kijken naar..."*.
   - Open alinea's en secties direct met de inhoudelijke kern, een prikkelende stelling of een rake uitsmijter. Laat de logica van het betoog het werk doen zonder meta-aankondigingen over de opbouw.
7. **Rauwe observaties en spreekkamer-anekdotes:**
   - Veranker theoretische concepten in concrete, doorleefde observaties uit de praktijk of vanaf de speelvloer (bijv. *"In mijn praktijk zie ik regelmatig..."*, *"Ik heb meegemaakt dat..."*, of een kort, scherp praktijkbeeld).
   - Dit doorbreekt abstracte symmetrie, verhoogt het doorleefde karakter en ontzenuwt elke suggestie van mechanische of door AI gegenereerde tekst.
8. **Volwassen ambacht vóór schoolse beginnerscursus (kink, D/s en leiderschap):**
   - Wanneer een stuk of presentatie gericht is op beginners of stellen die hun eerste stappen zetten in dominantie, D/s of kink: vermijd krampachtige verkleinwoorden of schoolse termen die de lezer infantiliseren (zoals *"starter-kit"*, *"speelkwartier"*, *"huiswerk"*, *"klungelen mag"* of *"les 1"*).
   - Behandel de lezer als een volwassen vakgenoot of leerling in een erotisch ambacht (vergelijkbaar met tangodansen of zwaardvechten): gebruik termen als *het minimalistische instrumentarium*, *de ontspannen speelvloer* of *de eerste oversteek*.
   - **Gravitas en rustige autoriteit:** Schrijf vanuit de rustige zwaartekracht van een ervaren speelvloer-veteraan. De auteur spreekt niet als een jolige schoolmeester met verontschuldigende gezelligheid, maar vanuit een vanzelfsprekende, ontspannen *calm authority*.
   - **Minder afzetten tegen clichés, meer eigen zwaartekracht:** Blijf niet te lang hangen in wat het *niet* is (*"geen kasteelkelders"*, *"geen Fifty Shades"*), maar focus direct op wat het *wel* is: de fysiologische en erotische afstemming tussen twee zenuwstelsels.
   - **Vrijmoedig en ongecompliceerd over seks en geilheid:** Verlangen en geilheid zijn geen schuldige 'taboes' waar je omheen moet draaien of lollig over moet doen; het is de soevereine, legitieme brandstof voor overgave en leiderschap.
9. **Rauwe somatische ontlading tussen haakjes:**
   - Geen klinisch-beheerste theorie: breek door theoretische abstractie heen met de rauwe, ongefilterde fysieke reactie van het zenuwstelsel tussen haakjes (bijv. `(fucking scary!)`, `(FUCKING SCARY!)`, `(als mogelijk!)`). Laat de existentiële spanning voelbaar zijn.
10. **Aardse directheid vóór modieuze of theatrale metaforen:**
    - Schrap overdreven drama-woorden en modieuze AI-metaforen (geen *"de beige slaapkamer"*, maar *"de saaie slaapkamer"*; geen *"je libido vermoordt"*, maar *"je libido verkloot"*; geen *"jarenlang BDSM-contract"*, maar *"jarenlange BDSM-relatie"*; geen *"draperen"*, maar *"kleien (of dat nou de dominante of sub is)"*). Gebruik nuchtere, eerlijke spreektaal.
11. **Milde zelfspot met de eigen naam en ontwapenende zelfrelativering:**
    - Ontwapen de rol van 'alwetende expert' door humoristische zelfspraak waarin de auteur zichzelf bij naam noemt (bijv. `*"Kijk eens aan, daar heb je Hans weer die in paniek een compleet doemscenario in elkaar knutselt. Wat een creatieve onzin."*`), gevolgd door een droge knipoog naar de eigen feilbaarheid (`*(Al moet ik er natuurlijk bij zeggen dat ik die relativering zelf zelden nodig heb... LOL)*`).
12. **Zintuiglijke, tastbare details van het echte lijf:**
    - Breng lichamelijke processen fysiek in beeld met ongecensureerde fysiologie en concrete kleding (bijv. *"de onwillekeurige spierschokken en de heerlijke grimassen van het orgasme"*, *"alleen gekleed in een mannenshirt, of in een spijkerbroek, een oversized colbert van haar man"*).
13. **Hapklare 'mondvoorraad' (letterlijke spreekkamer-scripts):**
    - Sluit relationele theorie altijd af met het letterlijke zinnetje dat de lezer ter plekke hardop kan uitspreken (bijv. `*"Stop. Dit ging helemaal verkeerd. Maar wat ik eigenlijk had willen zeggen is..."*`).
14. **Gesproken vertraging met herhaling en beletseltekens:**
    - Gebruik ritmische herhaling met beletseltekens om geduld, rust of vertraging in een hechtingsproces hoorbaar te maken (bijv. `En het later nog een keer probeert... En nog een keer... En dan...`).
15. **Aardse nuance vóór zwart-wit absolutisme:**
    - Vermijd zwart-wit claims (*"altijd dissociatie"*, *"over tien jaar"*); nuanceer naar de echte praktijk (*"soms zelfs dissociatie"*, *"volgende week"*, *"ook al kan het visuele plaatje belangrijk zijn"*).
16. **Natuurlijke inbedding van eigen tools en webapps:**
    - Noem eigen ontwikkelde werkmodellen (Hot-Maybe-Not, Cube of Consent, De Interne Vergadertafel) laagdrempelig en direct bruikbaar voor de lezer (inclusief links naar de webapp waar relevant).
17. **Kopjes met concrete valkuil of spanning vóór abstracte themalabels:**
    - Formuleer tussenkopjes vanuit de concrete menselijke misser of het reële gevaar (bijv. *"De valkuil van de leek als therapeut"* in plaats van het abstracte of diplomatieke *"Het therapeuten-dilemma: werken vanuit het hart én kennis van zaken"*).
18. **Kernstelling direct als leidend citaat onder het kopje (Axioma vóór argument):**
    - Plaats een centraal inzicht of stelling als citaat (`> ...`) direct *bovenaan* onder het tussenkopje als leidende vuurtoren, in plaats van pas onderaan als samenvatting. De stelling staat als een vlag in de grond; de alinea's eronder bieden de somatische en klinische onderbouwing.
19. **Geen didactische 'cursus-lijstjes' of encyclopedische overkill in essays:**
    - Een essay is geen syllabus of handboek. Vermijd generieke meerpunts-opsommingen over basiskaders (zoals algemene consent-regels die overal al staan) als die afleiden van de specifieke kerngedachte van het stuk. Plaats onder een persoonlijk essay evenmin schoolse bibliografieën of literatuurlijstjes; de tekst moet op eigen benen staan en eindigen met de inhoudelijke uitsmijter.
20. **Stootkracht van de punt (auditieve klemtoon vóór lange bijzinnen):**
    - Breek complexe bijzinnen open vóór de ontmaskering of punchline: leg eerst de hardnekkige aanname neer als een voldongen feit, en deel daarna de klap uit (bijv. *"De populaire aanname dat iedere wens tot pijn automatisch wijst op trauma. Dat is simpelweg onjuist."* in plaats van *"De aanname dat..., is simpelweg onjuist."*). Dit creëert een hoorbare adempauze en maximale gesproken impact.
21. **Aardse spreekkamertaal zonder distantie:**
    - Schrijf altijd *"in mijn praktijk"* (nooit het pretentieuze of commerciële *"in mijn coachingspraktijk"*). Spreek over *"mensen"* in plaats van afstandelijk over *"cliënten"*, en gebruik waar van toepassing het concrete scènewoord (*"eisen stellen aan hun sub"* in plaats van het vage *"eisen stellen aan een ander"*).
22. **Vang de exacte psychologische en somatische beleving:**
    - Duid de werkelijke somatische verlichting van het zenuwstelsel: niet slechts het "denkende brein", maar het *"over*-denkende brein", gevolgd door de opzucht *"en je hoeft even niet alles te overdenken"*. Benoem ook fysiologische resonantie tussen partners, zoals *"misschien zelfs co-reguleert"*.
23. **Keer de psychologiserende reflex om (dwarsdenken over causaliteit):**
    - Ontmasker de reflexmatige aanname van behandelaren dat kink altijd het *gevolg* is van schade met een scherpe existentiële tegenvraag (bijv. *"Wie zegt dat iemand niet al een BDSM-aanleg had voordat er ellende is ontstaan?"*).
24. **Droge relativering van burgerlijke routines met beletseltekens:**
    - Geef burgerlijke huishoudelijke routines, relatiesleur of huwelijksplichten een droge, ontwapenende knipoog die elk moralisme ontzenuwt (bijv. *"Gunstig voor de samenwerking... niet erg spannend."*).
25. **Geen 'rotsvast' in relaties, liefde en BDSM (bewaar voor harde wetenschap):**
    - Er is niet zo veel 'rotsvast' in de levende, kwetsbare dynamiek van BDSM, liefde en relaties. Gebruik de term 'rotsvast' (of 'rotsvaste container / bedding / afspraken') daarom **nooit** voor relationele kaders, containers of verbindingen. Bewaar die term uitsluitend voor zaken die wetenschappelijk of biologisch keihard als waarheid zijn bewezen.
    - Gebruik voor relaties, containers en BDSM aardse, relationele alternatieven zoals: *heldere kaders*, *een betrouwbare container*, *een veilige bedding*, *stevige afspraken* of *solide afstemming*.
26. **Bescheiden autoriteit en rauwe ethische oneliners ('in mijn ogen', 'm.i.', 'voor mij'):**
    - Vermijd alwetende of absolute waarheidsclaims over relaties en het BDSM-spel. Doseer op strategische plekken persoonlijke relativeringen zoals *"in mijn ogen"*, *"m.i."*, of *"voor mij"* (bijv. *"De erotische betekenis ontstaat m.i. uitsluitend..."*, *"Heldere grenzen zijn voor mij een geschenk"*). Dit houdt de autoriteit ontspannen, relationeel en uitnodigend in plaats van schools of dogmatisch.
    - Vang zware ethische dilemma's en dominante verantwoordelijkheid in scherpe, ongepolijste en nuchtere one-liners die direct de essentie raken (bijv. *"Liever iets minder geil dan trauma's creëren"*).
27. **Aardse aanduiding voor eigen werk (geen hoogdravend 'essay'):**
    - Noem eigen teksten, beschouwingen en blogposts **nooit** een *"essay"* (dat klinkt academisch, hoogdravend en schools).
    - Schrijf simpelweg *"mijn artikel"*, *"mijn stuk"*, *"mijn stukje"* of *"mijn gedachten en overwegingen"*.
    - Vermijd ook theatrale abstracties zoals *"ontmoeten in het archetype"* wanneer het gewoon gaat om *"ontmoeten in een rol"*. Houd de taal altijd aards, relationeel en spreektaalnabij.
28. **Is-dit-met-AI-geschreven rating < 20% (geen Amerikaanse motivational speaker-toon):**
    - Houd teksten en artikelaanzetten altijd **realistisch, leuk en nuchter**, zonder overdreven positiviteit, jubelende empowerment of geveinsde euforie.
    - Vermijd de typische 'Amerikaanse motivational speaker'-toon (geen opgeblazen retoriek zoals *"omarm je ware kracht"*, *"in het volle daglicht"*, of *"de magische reis naar zelfontplooiing"*).
    - Doorbreek mechanische AI-symmetrie: varieer in zinslengte, wissel abstractie af met concrete praktijkbeelden, vermijd repetitieve *"niet X, maar juist Y"*-constructies, en open direct met de kern zonder didactische bruggetjes (*"In dit stuk bespreek ik..."*).



---

## 5. Beheer van `_info-dump` en strikt verbod op export naar `SQ*.*`

1. **Geen export van `_info-dump` naar `SQ*.*` bestanden:**
   - Materiaal uit `_info-dump/` mag **NOOIT** worden geëxporteerd naar, toegevoegd aan of verwerkt in bestanden met het patroon `SQ*.*` of `sq*.*` (zoals artikelen in `sinquest-artikelen/sq*.*` of `artikel-aanzetten/sq*.*`).
   - Bestanden met de naam `SQ*.*` of `sq*.*` zijn podcast-gebonden of redactioneel door de auteur beheerd en mogen nooit als doelwit of exportbestemming dienen voor `_info-dump`.
   - Verwerk inhoud uit `_info-dump/` uitsluitend in de inhoudelijke, thematische mappen van de kennisbank (`cube-of-consent/`, `over-bdsm/`, `over-hechting/`, `over-emoties/`, `over-therapie/`, `over-autisme/`, `integrative-relationship-coaching/`, etc.) of als een nieuw zelfstandig artikel in `artikel-aanzetten/` (met een zuiver beschrijvende, inhoudelijke bestandsnaam, NOOIT met een `sq`-prefix).
