/**
 * Google Apps Script om automatisch de complete 25-delige Google Slides masterclass
 * "Vrouwelijke submissie in de praktijk: de kracht van soevereine overgave"
 * aan te maken in jouw Google Drive.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga naar https://script.google.com/
 * 2. Klik op "Nieuw project"
 * 3. Plak deze code in de editor
 * 4. Selecteer de functie "createVrouwelijkeSubmissieMasterclassSlides" en klik op "Uitvoeren" (Run)
 * 5. Geef eenmalig Google-toestemming -> De complete presentatie staat direct in jouw Google Drive!
 */

function createVrouwelijkeSubmissieMasterclassSlides() {
  var title = "Vrouwelijke submissie in de praktijk • De kracht van soevereine overgave (25 slides)";
  var deck = SlidesApp.create(title);
  
  // Slide 1: Titelslide
  var slide1 = deck.getSlides()[0];
  slide1.getBackground().setSolidFill("#13171F");
  
  var tBox = slide1.insertTextBox("VROUWELIJKE SUBMISSIE IN DE PRAKTIJK\nDe kracht van soevereine overgave", 50, 60, 620, 130);
  tBox.getText().getTextStyle().setForegroundColor("#F8FAFC").setFontSize(26).setBold(true);
  
  var subBox = slide1.insertTextBox(
    "Een diepgaande, volwassen en praktische masterclass over de psychologie, fysiologie en kunst van vrouwelijke overgave.\n" +
    "Begeleiding: Hans West | Kink-Aware Coach\n\n" +
    "Inhoud van deze masterclass:\n" +
    "• Deel 1: De mythe & de kracht (herdefiniëring van overgave & slavinnentrots)\n" +
    "• Deel 2: De neurologie & het verlangen (het hoofd uit, neurochemie & 6 hongers)\n" +
    "• Deel 3: De dynamiek met de dominant (de twee O's, invloed & speels verzet)\n" +
    "• Deel 4: Trauma-play, het ambacht & soevereine grenzen (dual awareness & Kink-GPS)\n" +
    "• Deel 5: Emotionele ontlading, landing & aftercare (tranen, subdrop & praise)", 
    50, 195, 620, 180
  );
  subBox.getText().getTextStyle().setForegroundColor("#94A3B8").setFontSize(12);
  
  slide1.getNotesPage().getSpeakerNotesShape().getText().setText(
    "Hans: Goedenavond allemaal, en van harte welkom. Vrouwelijke submissie is geen zwaktebod en geen patriarchaal overblijfsel; het is een van de krachtigste, meest verfijnde erotische ambachten die er bestaan. Vanavond ontmantelen we de schaamte en verkennen we de soevereine kracht van overgave."
  );

  // Helper om een donkere gestileerde slide toe te voegen
  function addDarkSlide(sectionTag, slideTitle, bulletPoints, speakerNote, accentColor) {
    accentColor = accentColor || "#F43F5E"; // Warm rose standaard
    var s = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    s.getBackground().setSolidFill("#13171F");
    
    // Section Tag
    if (sectionTag) {
      var tagBox = s.insertTextBox(sectionTag.toUpperCase(), 50, 18, 620, 25);
      tagBox.getText().getTextStyle().setForegroundColor("#64748B").setFontSize(10).setBold(true);
    }

    // Header
    var hBox = s.insertTextBox(slideTitle, 50, 40, 620, 50);
    hBox.getText().getTextStyle().setForegroundColor(accentColor).setFontSize(18).setBold(true);
    
    // Body
    var bBox = s.insertTextBox(bulletPoints.join("\n\n"), 50, 95, 620, 275);
    bBox.getText().getTextStyle().setForegroundColor("#F1F5F9").setFontSize(12.5);
    
    // Speaker notes
    if (speakerNote) {
      s.getNotesPage().getSpeakerNotesShape().getText().setText(speakerNote);
    }
    return s;
  }

  // --- DEEL 1: DE MYTHE & DE KRACHT ---

  // Slide 2: Maatschappelijke paradox
  addDarkSlide(
    "Deel 1: De mythe & de kracht",
    "De maatschappelijke paradox: waarom sterke vrouwen verlangen naar overgave",
    [
      "• OVERDAG DE KAPITEIN: Je runt een bedrijf, een team of een gezin. Je draagt verantwoordelijkheid, hakt knopen door en lost crises op.",
      "• DE VERMOEIDHEID VAN AUTONOMIE: Wie altijd 'aan' moet staan en continu de controle moet bewaren, raakt emotioneel en somatisch uitgeput.",
      "• DE VERLOSSING IN DE SCHEMERING: Juist sterke, zelfstandige vrouwen verlangen naar een speelveld waar ze het stuurwiel uit handen mogen geven.",
      "----------------------------------------------------------------",
      "KERNINZICHT: Hoe sterker je ego overdag moet zijn, hoe groter de erotische extase van dat ego tijdelijk mogen ontmantelen."
    ],
    "Hans: In mijn praktijk hoor ik vrouwen regelmatig fluisteren: 'Hans, ik ben leidinggevende en niemand kan mij iets vertellen. Maar in bed wil ik dat hij de touwtjes overneemt. Is dat hypocriet?' Nee. Het is de ultieme beloning voor jouw kracht. Jouw denkende brein draait overuren. Erotische submissie is de enige plek waar jij niet hoeft te leiden.",
    "#38BDF8"
  );

  // Slide 3: Capitulatie vs overgave
  addDarkSlide(
    "Deel 1: De mythe & de kracht",
    "Onderdanigheid is geen zwakte: capitulatie versus soevereine overgave",
    [
      "• CAPITULATIE (Slaverschap): Komt voort uit angst, dwang of minderwaardigheid. Grenzen worden weggevaagd; passief ondergaan.",
      "• SOEVEREINE OVERGAVE (Het ambacht): Komt voort uit volheid, verlangen en zelfkennis. Actieve gift en diepe flow.",
      "• TIJDELIJK MANDAAT: Macht binnen volwassen BDSM is geen eigendom van de dominant, maar een toevertrouwd mandaat dat jij schenkt.",
      "----------------------------------------------------------------",
      "HET AXIOMA: Je kunt alleen werkelijk 'ja' zeggen tegen overgave als je de volledige vrijheid en innerlijke autoriteit bezit om 'nee' te zeggen."
    ],
    "Hans: Capitulatie is geen erotiek, dat is onderdrukking. Soevereine overgave is een actieve gift. Jij besluit: 'Ik vertrouw jou mijn lichaam en mijn lust toe, zolang jij die bedding waardig bent.' Wie zich overgeeft vanuit soevereiniteit, behoudt te allen tijde haar koninklijke waardigheid.",
    "#F43F5E"
  );

  // Slide 4: Slavinnentrots
  addDarkSlide(
    "Deel 1: De mythe & de kracht",
    "Slavinnentrots: de waardigheid en moed van de onderdanige",
    [
      "• NIET DEEMOEDIG, MAAR DAPPER: Het vraagt oneindig veel meer moed om je harnas af te leggen dan om een kille muur om je heen te bouwen.",
      "• INCASSERINGSVERMOGEN: Het trotse besef dat jouw lijf intense sensaties kan dragen, grenzen kan oprekken en kan transformeren.",
      "• DE KUNST VAN DE RESPONS: Een goede onderdanige bespeelt de dominant door haar overgave, haar ademhaling en haar toewijding.",
      "----------------------------------------------------------------",
      "EERHERSTEL: Zonder overgave is dominantie slechts betekenisloos zwaaien met een stuk leer. Jouw overgave schept de magie van de speelvloer."
    ],
    "Hans: Slavinnentrots is het trotse innerlijke anker van een vrouw die weet wat ze waard is. Jij durft in de diepte te springen, de pijn te transformeren en je over te geven aan een storm. Wees trots op je vermogen tot overgave; het is een zeldzame en kostbare begaafdheid.",
    "#F59E0B"
  );

  // Slide 5: Driehoek van de onderdanige
  addDarkSlide(
    "Deel 1: De mythe & de kracht",
    "De Driehoek van de Onderdanige: verlangen, autonomie en lichaamsbewustzijn",
    [
      "• VERLANGEN & OVERGAVE (De Motor): De authentieke innerlijke honger naar leiding, grenzen en sensaties. Gevoed door eigen lust.",
      "• AUTONOMIE & ZELFKENNIS (Het Kompas & Rem): De morele plicht om je eigen belastbaarheid te kennen en tijdig stopwoorden te hanteren.",
      "• LICHAAMSBEWUSTZIJN & FEEDBACK (Het Instrument): Weten wanneer pijn gezond is en wanneer het anatomisch gevaarlijk wordt.",
      "----------------------------------------------------------------",
      "BALANS: Pas wanneer deze drie pijlers stevig in elkaar grijpen, ontstaat er meesterschap in overgave."
    ],
    "Hans: Kijk goed naar deze driehoek. Aan de top staat jouw eigen verlangen; linksonder jouw autonomie en het eigenaarschap van je 'nee'; rechtsonder jouw lichaamsbewustzijn als instrument. Als jij niet voelt wat er in je spieren gebeurt, vaart je partner blind.",
    "#A855F7"
  );

  // --- DEEL 2: DE NEUROLOGIE, HET VERLANGEN & HET ZENUWSTELSEL ---

  // Slide 6: Transiënte hypofrontaliteit
  addDarkSlide(
    "Deel 2: Neurologie & Zenuwstelsel",
    "Het overvolle hoofd dat stil mag vallen: transiënte hypofrontaliteit",
    [
      "• HET WERKGEHEUGEN SCHAKELT TERUG: De executieve functies in de prefrontale cortex (plannen, piekeren, oordelen) gaan tijdelijk op stand-by.",
      "• GEEN BESLISSINGEN MEER: De mentale last van honderden keuzes per dag valt in één klap van je schouders.",
      "• VAN HOOFD NAAR LIJF: Zintuigen worden vlijmscherp: de textuur van de vloer, de klank van zijn stem, de warmte van zijn hand.",
      "----------------------------------------------------------------",
      "BIOLOGISCHE RUST: Je hebt nog maar één taak: luisteren, ademen en voelen. Het piekerbrein mag eindelijk slapen."
    ],
    "Hans: In de neurowetenschap noemen we dit transiënte hypofrontaliteit: het tijdelijk dimmen van de frontale hersenkwabben. Het denkende brein is geweldig voor belastingaangifte, maar een ramp voor intimiteit. Overgave is een neurologische sluiproute naar diepe stilte.",
    "#38BDF8"
  );

  // Slide 7: Neurochemie van overgave
  addDarkSlide(
    "Deel 2: Neurologie & Zenuwstelsel",
    "De neurochemie van overgave: endorfinen, oxytocine en dopamine",
    [
      "• DOPAMINE: De anticipatie, spanning en scherpte vóór de scène.",
      "• ADRENALINE: De fysieke alarmfase en verhoogde hartslag.",
      "• ENDORFINEN: Natuurlijke morfine; dempt acute pijn en transformeert prikkels in een warme roes.",
      "• OXYTOCINE: Het hechtingshormoon dat kwetsbaarheid omzet in diepe relationele versmelting en rust.",
      "----------------------------------------------------------------",
      "BIOCHEMISCHE WATERVAL: Subspace is geen illusie, maar een oeroude zoogdierlijke respons op gecontroleerde overgave."
    ],
    "Hans: Subspace is keiharde biochemie. Eerst schiet dopamine omhoog door de anticipatie. Vervolgens dempen endorfinen de scherpte van fysieke prikkels, en giet oxytocine een warme deken van hechting over de ervaring heen. Dit verklaart de diepe ontspanning na afloop.",
    "#EC4899"
  );

  // Slide 8: De zes hongers (Multi-Track Equalizer)
  addDarkSlide(
    "Deel 2: Neurologie & Zenuwstelsel",
    "De zes werkelijke hongers van het vrouwelijke zenuwstelsel",
    [
      "• 1. RUST & ONTLADING: Het hoofd uit; verlossing van het volwassen ego.",
      "• 2. EROTISCHE ONMACHT: Lust, soevereiniteitsoverdracht, kuisheid, orgasmecontrole.",
      "• 3. GEBORGENHEID (OWNED): Hechtingsveiligheid, containment, veilige haven.",
      "• 4. HET HIER-EN-NU: Adrenaline, anticipatie, scherpe zintuiglijke prikkels, trance.",
      "• 5. ONTMASKERING: Schaamte, blozen, taboes delen zonder afgewezen te worden.",
      "• 6. ERKENNING & TROTS: Praise ('good girl / sub'), beloning en getoonde moed.",
      "• FRAME: DE-PERSONIFICATIE: Tijdelijk bestaan als sieraad, sculptuur of pop."
    ],
    "Hans: Vergeet het ouderwetse emotiewiel. Kijk naar deze equalizer. Waar hongert jouw zenuwstelsel vanavond naar? Zoek je stilte in je hoofd, seksuele overgave aan orgasmecontrole, geborgenheid, adrenaline, taboes biechten of praise? Stel je eigen faders in.",
    "#F59E0B"
  );

  // Slide 9: Pleasen vs overgave
  addDarkSlide(
    "Deel 2: Neurologie & Zenuwstelsel",
    "Het verschil tussen authentieke overgave en pleasen (fawning)",
    [
      "• FAWNING (Pleasen uit angst): 'Ja' zeggen om conflict of afwijzing te voorkomen. Mechanisch gehoorzamen; grenzen negeren.",
      "• AUTHENTIEKE OVERGAVE: 'Ja' zeggen vanuit een eigen, brandend innerlijk verlangen. Diepe ademhaling en voelbare aanwezigheid.",
      "• HET GEVOEL NA AFLOOP: Fawning laat je leeg, eenzaam en beschaamd achter; overgave brengt diepe ontlading, vervulling en trots.",
      "----------------------------------------------------------------",
      "WAARSCHUWING: Als onderdanigheid voelt als een auditie waarin je continu moet presteren om goed genoeg te zijn, ben je aan het overleven."
    ],
    "Hans: Veel vrouwen hebben geleerd dat liefde voorwaardelijk is. Ze zetten een fawn-reflex in: pleasen en zichzelf wegcijferen om de vrede te bewaren. Als je daarmee de speelvloer opstapt, wordt BDSM gevaarlijk. Overgave kost geen energie; het geeft energie.",
    "#EF4444"
  );

  // Slide 10: Subspace vs freeze
  addDarkSlide(
    "Deel 2: Neurologie & Zenuwstelsel",
    "Subspace versus freeze: flow versus traumatische shutdown",
    [
      "• SUBSPACE (Ventraal / Flow): Zachte, dromerige blik; warm en ontspannen lichaam; diepe ademhaling; taalvermogen blijft intact.",
      "• FREEZE (Dorsaal / Shutdown): Glazige staar (1000-yard stare); kaken op elkaar geklemd of kille slapte; spraakcentrum blokkeert.",
      "• DE 3-STAPPENTEST OP DE VLOER BIJ TWIJFEL:",
      "   1. Oogcontact & voornaam: Laat haar in je ogen kijken en jouw voornaam noemen.",
      "   2. Somatische knijptest: Laat haar doelgericht in jouw hand knijpen.",
      "   3. Kleur-check: Vraag niet 'gaat het?', maar: 'Welke verkeerslichtkleur ben je nu?'"
    ],
    "Hans: Als een scène te ver gaat, kan subspace omslaan in een traumatische freeze. Een onervaren dominant denkt: 'Kijk eens hoe rustig ze ligt', maar ze is gedissocieerd. Leer de signalen. Haar spraakcentrum blokkeert, dus pas direct de 3-stappentest toe.",
    "#A855F7"
  );

  // --- DEEL 3: DE DYNAMIEK MET DE DOMINANT ---

  // Slide 11: De twee O's
  addDarkSlide(
    "Deel 3: Dynamiek met de Dominant",
    "De twee O's: Overgave ontmoet Ontferming",
    [
      "• DE EERSTE O (OVERGAVE): De moed van de onderdanige om de controle los te laten en zich weerloos op te stellen.",
      "• DE TWEEDE O (ONTFERMING / SPLAGCHNIZOMAI): Zorg vanuit de buik. De dominant voelt de gecreëerde kwetsbaarheid en beschermt die.",
      "• GEEN EXPLOITATIE: Juist doordat de dominant jou weerloos maakt, rust op hem de absolute plicht om zich over jou te ontfermen.",
      "----------------------------------------------------------------",
      "FUNDAMENT: Zonder ontferming is dominantie slechts ego-tripperij en willekeur."
    ],
    "Hans: In de klassieke traditie spreken we van de twee O's: Overgave en Ontferming (splagchnizomai). De kwetsbaarheid die jouw overgave schept, moet worden beantwoord met diepe, fysiek voelbare bescherming vanuit de buik van de dominant. Zodra dat ontbreekt, stap je van de vloer af.",
    "#F43F5E"
  );

  // Slide 12: Paradox van invloed
  addDarkSlide(
    "Deel 3: Dynamiek met de Dominant",
    "De paradox van invloed: zachtheid ontwapent controle",
    [
      "• DE MACHTSSTRIJD WERKT AVEREECHTS: Wie voortdurend concurreert, bekritiseert en controleert, zet de partner in de verdediging.",
      "• HET STAKEN VAN DE STRIJD: Zachtheid en vertrouwen halen een man uit zijn pantser; hij hoeft zich niet meer te verdedigen.",
      "• DE BIOLOGISCHE RESPONS: Vanuit die ontspanning ontwaakt zijn diepste evolutionaire impuls: haar beschermen, koesteren en dienen.",
      "----------------------------------------------------------------",
      "HET GEHEIM: Niemand wordt met plezier genereus onder druk. Jouw overgave ontgrendelt zijn diepste toewijding."
    ],
    "Hans: Veel vrouwen denken dat invloed hetzelfde is als de touwtjes strak houden. Maar dwang opent nooit iemands hart. Zodra jij de machtsstrijd staakt en zacht durft te worden, ontstaat er ruimte in zijn zenuwstelsel. Jouw overgave activeert zijn diepste beschermingsdrang.",
    "#10B981"
  );

  // Slide 13: Groene vs rode vlaggen
  addDarkSlide(
    "Deel 3: Dynamiek met de Dominant",
    "Wat maakt een dominant veilig voor jou? Groene versus rode vlaggen",
    [
      "• GROENE VLAGGEN: Rustige, dragende stem; vertraagt bij twijfel; nieuwsgierig naar jouw grenzen; blijft uren aanwezig voor aftercare.",
      "• RODE VLAGGEN: Blaft, eist en speelt een macho-rol; raakt woedend bij tegenspraak; bagatelliseert jouw safewords; haast zich na afloop weg.",
      "----------------------------------------------------------------",
      "GOUDEN REGEL: Een boze dominant is een bange dominant. Ware autoriteit heeft geen stemverheffing of intimidatie nodig."
    ],
    "Hans: Geef je overgave alleen aan iemand die rustig is. Een veilige dominant herken je niet aan leren laarzen, maar aan zijn vermogen om te vertragen. Let op de rode vlaggen: vermijd mannen die kwaad worden als je twijfelt of die na de scène direct weglopen.",
    "#F59E0B"
  );

  // Slide 14: Speels verzet & bratting
  addDarkSlide(
    "Deel 3: Dynamiek met de Dominant",
    "Het speelse verzet: bratting, worstelen en consensual non-consent (CNC)",
    [
      "• BRATTING (Ondeugend verzet): Uitdagen, een grote mond opzetten en regels tartend overtreden om uitgelokt en begrensd te worden.",
      "• DE KICK VAN DE STRIJD: Het zoogdierenlijf geniet van fysieke krachtmeting, worstelen en overweldigd worden.",
      "• CONSENSUAL NON-CONSENT (CNC): De fantasie van overmeestering beleven, terwijl de soevereine wil en het safeword 100% intact blijven.",
      "----------------------------------------------------------------",
      "VOORWAARDE: Speels verzet is alleen veilig wanneer het hekwerk van consent vooraf aan de keukentafel is verankerd."
    ],
    "Hans: Onderdanigheid is niet passief stilzitten. Veel vrouwen genieten van weerstand: bratty gedrag om te testen of hij stevig staat, of worstelen op het tapijt. Ook CNC is een veelvoorkomende erotische fantasie. Heerlijk en spannend, mits de afspraken vooraf muurvast staan.",
    "#38BDF8"
  );

  // --- DEEL 4: TRAUMA-PLAY, HET AMBACHT & SOEVEREINE GRENZEN ---

  // Slide 15: Trauma-play & helend spelen
  addDarkSlide(
    "Deel 4: Trauma-play & Grenzen",
    "Trauma-play & helend spelen: dual awareness op de speelvloer",
    [
      "• SEKSUELE VERKNOPING: Vroege spanning of grensoverschrijding raakt via adrenaline en dopamine vaak gekoppeld aan seksuele opwinding.",
      "• HET VERSCHIL MET TRAUMA: Trauma = geen keuze, geen controle, isolatie. Kink = bewuste keuze, veilige container, liefdevolle aftercare.",
      "• DUAL AWARENESS (Dubbelbewustzijn): 90% van je lijf beleeft de storm; 10% weet dat je veilig bent in de kamer met jouw partner.",
      "----------------------------------------------------------------",
      "VOLTOOIEN VAN REFLEXEN: Een reactie die vroeger vastliep in bevriezing, kan nu in veiligheid worden doorvoeld en ontladen."
    ],
    "Hans: Buitenstaanders denken dat trauma-play een herhaling is van trauma. Neurologisch is het tegenovergesteld. Dankzij dual awareness beleeft jouw lijf de intensiteit, terwijl je bewustzijn weet dat je veilig bent. Daardoor kan een oude overlevingsreflex alsnog worden voltooid. Geen therapie, wel diep helend.",
    "#A855F7"
  );

  // Slide 16: Het kantelmoment
  addDarkSlide(
    "Deel 4: Trauma-play & Grenzen",
    "Het kantelmoment: wanneer erotische stretch omslaat in overleven",
    [
      "• EROTISCHE STRETCH: Intens, warm, zwaar, verbonden en diep voelbaar.",
      "• KANTELMOMENT NAAR OVERLEVEN: Kille verdoving, apathie, stokkende adem, het gevoel alleen te zijn in een donkere bubbel.",
      "• DE WET VAN DE 10%-WAAKVLAM: Houd altijd 10% aandacht in het hier-en-nu. Dooft de waakvlam? Trek direct aan de noodrem.",
      "----------------------------------------------------------------",
      "MASKER-AF-PROTOCOL: Bij een kantelmoment stopt het spel ter plekke; de dominante rol valt weg en maakt plaats voor menselijke holding."
    ],
    "Hans: Het geheim van veilig spelen op het scherpst van de snede is het herkennen van het kantelmoment. Voelt het warm en zwaar, of koud en dof? Zodra je emotioneel uitcheckt en de 10%-waakvlam dooft: stop direct. Rol laten vallen, masker af en samen aarden.",
    "#EF4444"
  );

  // Slide 17: Dader-slachtoffer valkuil
  addDarkSlide(
    "Deel 4: Trauma-play & Grenzen",
    "De dader-slachtoffer valkuil vermijden: RACK en gedeelde zorg",
    [
      "• DE DROGREDEN ONTMASKERD: 'Het is jouw trauma, dus roep zelf maar rood' is onvolwassen onzin. Bij freeze blokkeert het spraakvermogen.",
      "• RACK (Risk-Aware Consensual Kink): Beiden dragen zorg voor de kwetsbaarheid van het zenuwstelsel van de ander.",
      "• GEVAARLIJKE VERSCHUIVING: Voorkom dat consensuele macht omslaat in feitelijke dwang, wrok en beschadiging.",
      "----------------------------------------------------------------",
      "DE GEZONDE VREES: Een dominante partner die de gezonde vrees kent om dader te worden, bewijst daarmee zijn werkende empathische kompas."
    ],
    "Hans: Binnen volwassen BDSM spelen we volgens RACK. De bewering dat alleen de sub verantwoordelijk is voor haar grenzen klopt fysiologisch niet. Een integere dominant helpt jou je grenzen te bewaken en leest jouw lichaam. Samen voorkom je de dader-slachtoffer valkuil.",
    "#F59E0B"
  );

  // Slide 18: Kink-GPS aan de keukentafel
  addDarkSlide(
    "Deel 4: Trauma-play & Grenzen",
    "Je verlangens schaamteloos bezitten aan de keukentafel (de Kink-GPS)",
    [
      "• KLEREN AAN, LAMPEN AAN: Onderhandel nooit halfnaakt in bed; dan wint de lust het altijd van de fysiologische veiligheid.",
      "• HET VERKEERSLICHT IN VERLANGENS:",
      "   🟢 GROEN: Waar word je opgewonden van en wil je vol verkennen?",
      "   🟡 ORANJE: Waar ben je nieuwsgierig naar, maar met schroom of specifieke voorwaarden?",
      "   🔴 ROOD: Harde grenzen; absoluut verboden terrein zonder discussie.",
      "• SCHAAMTELOOS BEZIT: Schaam je niet voor je verlangens naar vernedering, kuisheid, kooien of pijn. Bezit ze met trots."
    ],
    "Hans: Onderhandelen doe je aan de keukentafel met een kop thee en de kleren aan. Gebruik de Kink-GPS. Bespreek groen, oranje en rood zonder schroom. Als jij verlangt naar kuisheid of overgave, spreek het uit. Pas als jouw partner jouw verlangens kent, kan hij een prachtig speelveld bouwen.",
    "#10B981"
  );

  // Slide 19: Cube of Consent & safewords
  addDarkSlide(
    "Deel 4: Trauma-play & Grenzen",
    "De Cube of Consent voor de onderdanige: Dienen versus Toestaan",
    [
      "• DIENEN (Serving): Jij voert de actie uit voor ZIJN plezier (thee brengen, masseren, gehoorzamen).",
      "• TOESTAAN (Allowing): Hij voert de actie uit op JOUW lichaam voor JOUW plezier (gebonden worden, subspace ontvangen).",
      "• SAFEWORDS ZIJN JOUW EIGENDOM: Een safeword roepen is nooit falen of 'de pret bederven'; het is het bewijs van jouw vakmanschap.",
      "----------------------------------------------------------------",
      "HET PROTOCOL: Groen (doorgaan), Oranje (vertragen/aanpassen), Rood (volledige noodstop). Afspreken van non-verbale signalen."
    ],
    "Hans: Weet altijd of je dient of toestaat. En onthoud: jouw safeword is jouw heiligste bezit. Rood roepen is geen bewijs van zwakte, maar het instrument waarmee jij het speelveld beschermt. Wie tijdig safewords gebruikt, bewaart de integriteit van de dynamiek.",
    "#38BDF8"
  );

  // --- DEEL 5: EMOTIONELE ONTLADING, LANDING & AFTERCARE ---

  // Slide 20: Dynamische boog
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "De dynamische boog van de scène: van drempel naar deceleratie",
    [
      "• 1. DE AFDALING (Inductie): De drempel oversteken, vertragen, kleren uit, oogcontact en containment neerzetten.",
      "• 2. DE PIEK & OVERGAVE: Het oog van de storm; intensiteit, endorfineroes en het stilvallen van het hoofd.",
      "• 3. DE DECELERATIE (De afbouw): Niet abrupt stoppen! Geleidelijk afschalen, vertragen, hand op het hart leggen.",
      "• 4. DE LANDING: Wollen dekens, suikers, warme thee en fysieke aarding.",
      "----------------------------------------------------------------",
      "DE FOUT: Abrupt stoppen na de piek is een fysiologische noodstop voor het zenuwstelsel en veroorzaakt een harde val."
    ],
    "Hans: Een scène is als een muziekstuk met een voorspel, climax en uitloop. Stop nooit abrupt na de piek. De deceleratie is essentieel: als de touwen los zijn, moet de dominant zijn hand op jouw borstkas leggen en de biochemie rustig laten uitdoven.",
    "#F43F5E"
  );

  // Slide 21: Tranen en tremors
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "Tranen en tremors op de speelvloer: fysiologische ontlading niet smoren",
    [
      "• NEUROGENE TREMORS: Het zoogdierenlijf ontlaadt adrenaline en spanning door spontaan te beven, klappertanden of rillen.",
      "• HUILEN IS ONTSPANNING: Tranen na een scène zijn zelden verdriet; het is de biologische ontlading van vastgezette lading.",
      "• GOUDEN REGEL VOOR HOLDING: Niet sussen ('stil maar, huil maar niet'), want dan smoor je het proces. Wel dragen en omhullen.",
      "----------------------------------------------------------------",
      "DE RUSTIGE ROTIS: Woorden zijn overbodig; een lage ademhaling en fysieke warmte doen het helende werk."
    ],
    "Hans: Als je na een scène moet huilen of hevig trilt: schrik niet. Je lichaam ontlaadt spanning zoals een gazelle die ontsnapt is aan gevaar. Tegen de partners zeg ik: ga haar niet sussen. Zeg niet 'stil maar', maar: 'Laat het maar stromen, ik hou je vast.'",
    "#EC4899"
  );

  // Slide 22: Subdrop
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "Subdrop: de biochemische kater na 24 tot 48 uur",
    [
      "• DE BIOCHEMISCHE KATER: Na 24 tot 48 uur zijn de endorfine- en oxytocinevoorraden uitgeput; de spiegel keldert.",
      "• DE EMOTIONELE ECHO: Plotselinge somberheid, huilerigheid, leegte of irrationele zelftwijfel ('vindt hij me nog wel leuk?').",
      "• HERSTELPROTOCOL:",
      "   🍬 Biologisch: Koolhydraten, warme soep, hydratatie en 8 uur slaap.",
      "   💬 Relationeel: Een kort appje van de dominant: 'Ik denk aan je en ben trots op je.'",
      "   🧠 Mentaal: Hak geen relatieknopen door tijdens een drop; herinner jezelf eraan dat het chemie is."
    ],
    "Hans: Pas op voor dag twee. Anderhalve dag na een geweldige scène word je wakker en voelt alles grauw. Welkom bij de subdrop. Geen relatiecrisis, maar een hormonale dip. Een warme deken, chocola en een lief berichtje van je partner lossen dit op.",
    "#F59E0B"
  );

  // Slide 23: Aftercare & praise
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "Jouw aftercare en praise opeisen: biologische zorg en emotionele erkenning",
    [
      "• BIOLOGISCHE ZORG: Lichaamstemperatuur herstellen (dekens), suikerspiegel aanvullen (thee met honing), vochtbalans.",
      "• EMOTIONELE ERKENNING (PRAISE): Het horen van 'good girl / sub', bevestiging van getoonde dapperheid en overgave.",
      "• SCHAAMTE VERDRIJVEN: Praise wast eventuele schaamte weg en bekrachtigt de waardigheid van de onderdanige.",
      "----------------------------------------------------------------",
      "DE WET: Aftercare is geen gunst waar je om hoeft te bedelen; het is de helft van de afspraak. Geen tijd voor aftercare = geen tijd om te spelen."
    ],
    "Hans: Eis jouw aftercare op. Ga niet snel de kamer opruimen. Je hebt net je ziel op de speelvloer gelegd. Je hebt recht op warmte, suikers én praise. Horen dat je mooi en dapper bent geweest, verdrijft de schaamte en verzegelt de ervaring in waardigheid.",
    "#10B981"
  );

  // Slide 24: Debriefing
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "De debriefing vanuit de onderdanige: eerlijke feedback aan de keukentafel",
    [
      "• MINIMAAL 24 UUR WACHTEN: Debrief niet direct na afloop wanneer je nog week bent; doe het de volgende dag nuchter.",
      "• DE 3-VRAGEN STRUCTUUR:",
      "   1. Wat bracht mij het diepst in overgave en lust?",
      "   2. Waar raakte mijn zenuwstelsel in verzet, schrik of freeze?",
      "   3. Wat heb ik de volgende keer anders nodig van jou?",
      "----------------------------------------------------------------",
      "LEIDERSCHAP GROEIT DOOR FEEDBACK: Eerlijkheid breekt de dominantie niet, maar geeft de partner het kompas om jou beter te leiden."
    ],
    "Hans: Een meesterlijke D/s-relatie wordt gebouwd aan de keukentafel tijdens de debriefing. Wees eerlijk over wat werkte en wat triggerde. Echte dominanten willen weten hoe het instrument klinkt. Jouw feedback maakt hem geen mindere dominant, maar een betere leider.",
    "#38BDF8"
  );

  // Slide 25: De eerste oversteek & afsluiting
  addDarkSlide(
    "Deel 5: Ontlading, Landing & Aftercare",
    "De eerste oversteek: een zintuiglijk experiment voor thuis & napraten",
    [
      "• STAP 1 (Zintuiglijke afsluiting): Laat je blinddoeken en ga ontspannen op je rug liggen met je handen open.",
      "• STAP 2 (Het bevel tot niets-doen): De partner legt een hand op je borstbeen en zegt: 'Jij hoeft niets te doen, alleen maar te ademen.'",
      "• STAP 3 (Zachte aanraking): 20 minuten zintuiglijke verkenning met wisselende texturen zonder penetratie of moeten klaarkomen.",
      "----------------------------------------------------------------",
      "AFSLUITING: Overgave begint niet bij kettingen, maar bij ademhalen in veilige aanwezigheid. Dank voor jullie aandacht & napraten aan de bar!"
    ],
    "Hans: We zijn aan het einde. Begin vanavond klein met dit experiment: laat je blinddoeken, laat hem zijn hand op je borstbeen leggen en ervaar dertig minuten lang totale verlossing van moeten. De bar is open, ik blijf hangen voor vragen. Dank jullie wel!",
    "#A855F7"
  );

  Logger.log("Succesvol aangemaakt! URL: " + deck.getUrl());
}
