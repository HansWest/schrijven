# Schrijffilosofie: Waarom Hier Géén 'Single Source of Truth' Geldt

> **Meta-Documentatie voor de Repository `schrijven`**  
> *Over de organische aard van schrijven, hergebruik van ideeën en de autonomie van afzonderlijke projecten en boeken.*

---

## 1. Het Principe: Schrijven is Geen Softwarecode

In software-architectuur is het principe van een *Single Source of Truth* (SSOT) en *Don't Repeat Yourself* (DRY) vaak heilig: één stukje data of logica mag maar op exact één plek bestaan om inconsistentie te voorkomen.

**Voor deze schrijf-repository geldt uitdrukkelijk het tegenovergestelde:**
Binnen `schrijven` hanteren we **bewust géén starre Single Source of Truth**.

### Waarom?
1. **Context Bepaalt de Vorm:**  
   Een theorie of metafoor (zoals *"kikkers hebben geen veren"*, de reactiepatronen van de hersenstam, of het 4-lagenmodel) krijgt in een podcastaflevering over eenzame feestdagen een heel andere lading, toon en diepgang dan in een coachingsprotocol voor therapeuten, een intiem essay, of een later boek.
2. **De Lezer Leest Niet de Hele Repository:**  
   Een lezer van een toekomstig boek over relaties of een luisteraar van een podcast gaat niet grasduinen in andere projectmappen om een theorie te begrijpen. Elk project, boek of artikel moet als een op zichzelf staand, coherent werk kunnen functioneren.
3. **Ideeën Evolueren door Herhaling en Variatie:**  
   Door een kerngedachte in meerdere projecten op net iets andere manieren te formuleren, ontdek je nieuwe nuances, scherpere metaforen en andere praktische toepassingen. Herhaling is hier geen "vervuiling", maar een organisch rijpingsproces van gedachten.

---

## 2. De Verhouding Tussen Mappen en Projecten

Binnen de workspace `schrijven` bestaan twee soorten ruimtes naast elkaar:

```
schrijven/
├── docs/                                  # Overkoepelende schrijffilosofie & werkwijze (deze map)
│
├── [Thematische Kennisbanken & Notities]  # Inspiratiebronnen, theoriehubs & denkruimtes
│   ├── over-hechting/
│   ├── over-bdsm/
│   ├── over-emoties/
│   ├── over-trauma/
│   └── over-polyamorie/
│
└── [Zelfstandige Projecten & Boeken]      # Concrete afgeronde werken met eigen context & publiek
    ├── kinky-kerst-eenzaamheid/           (heeft een eigen project-specifieke docs/ map)
    ├── integrative-relationship-coaching/
    └── [toekomstige boeken / bundels / columns]
```

### 1. De Thematische Kennisbanken (`over-.../`)
- Dienen als **denkruimtes, referentiepunten en composthopen**.
- Hier worden concepten verkend, aforismen genoteerd en theorieën geboetseerd.
- Ze zijn informatief en ondersteunend, maar leggen geen dwingende dogma's op aan concrete projecten.

### 2. De Zelfstandige Projecten (`kinky-kerst-eenzaamheid/`, etc.)
- Zijn **autonome creaties** gericht op een specifiek doel, doelgroep of medium (bijv. een kerstcampagne, een podcastserie, een boekmanuscript).
- Mogen vrijelijk putten uit de thematische kennisbanken, ideeën overnemen, aanpassen, inkorten of juist verder uitdiepen.
- Beschikken waar nodig over een **eigen interne projectdocumentatie** (zoals `kinky-kerst-eenzaamheid/docs/`). Wat binnen dat specifieke project als 'waarheid' of leidraad geldt voor dat doel, hoeft niet te gelden voor een ander project.

---

## 3. Richtlijnen voor Schrijven en Redigeren

Wanneer je werkt binnen deze repository:
- **Wees niet bang voor overlap:** Voel je volkomen vrij om een theorie over hechting, een quote over het zwarte gat of een analyse van amatonormativiteit opnieuw op te schrijven en aan te passen aan de stem van het specifieke stuk.
- **Geen geforceerde verwijzingen:** Als een idee in een projecttekst thuishoort, werk het dáár uit. Verwijs niet nodeloos door naar een andere map als dat de leeservaring van het specifieke project ondermijnt.
- **Laat variaties bestaan:** Het is volkomen gezond dat in Project A een metafoor iets scherper of praktischer is neergezet, terwijl in Project B dezelfde gedachte poëtischer of persoonlijker wordt verwoord.
