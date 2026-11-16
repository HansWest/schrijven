/**
 * Google Apps Script om automatisch de complete 26-delige Google Slides masterclass
 * "Dominantie in de praktijk: rust, richting en de magie van het speelveld"
 * aan te maken in jouw Google Drive.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga naar https://script.google.com/
 * 2. Klik op "Nieuw project"
 * 3. Plak deze code in de editor
 * 4. Selecteer de functie "createDominantieMasterclassSlides" en klik op "Uitvoeren" (Run)
 * 5. Geef eenmalig Google-toestemming -> De complete presentatie staat direct in jouw Google Drive!
 */

function createDominantieMasterclassSlides() {
  var title = "Dominantie in de praktijk • Rust, richting en de magie van het speelveld (26 slides)";
  var deck = SlidesApp.create(title);
  
  // Slide 1: Titelslide
  var slide1 = deck.getSlides()[0];
  slide1.getBackground().setSolidFill("#13171F");
  
  var tBox = slide1.insertTextBox("DOMINANTIE IN DE PRAKTIJK\nRust, richting en de magie van het speelveld", 50, 60, 620, 130);
  tBox.getText().getTextStyle().setForegroundColor("#F8FAFC").setFontSize(26).setBold(true);
  
  var subBox = slide1.insertTextBox(
    "Een diepgaande, volwassen en praktische masterclass over erotische leiding en overgave.\n" +
    "Begeleiding: Hans West | Kink-Aware Coach\n\n" +
    "Inhoud van deze masterclass:\n" +
    "• Deel 1: Fundament & mindset (de ontmaskering van de mythes)\n" +
    "• Deel 2: De binnenwereld van de onderdanige (hongers & subspace)\n" +
    "• Deel 3: Communicatie, consent & de keukentafel (Kink-GPS & Cube of Consent)\n" +
    "• Deel 4: Het ambacht van de speelvloer (minimalistisch instrumentarium & dynamische boog)\n" +
    "• Deel 5: Emotionele navigatie, holding & aftercare voor twee", 
    50, 195, 620, 180
  );
  subBox.getText().getTextStyle().setForegroundColor("#94A3B8").setFontSize(12);
  
  slide1.getNotesPage().getSpeakerNotesShape().getText().setText(
    "Hans: Welkom allemaal. Fijn dat jullie er zijn. Dominantie is geen rol die je moet spelen of een kille karikatuur; het is een relationeel ambacht, een intieme dans en een van de mooiste speelvelden die er tussen twee mensen kunnen bestaan."
  );

  // Helper om een donkere gestileerde slide toe te voegen
  function addDarkSlide(sectionTag, slideTitle, bulletPoints, speakerNote, accentColor) {
    accentColor = accentColor || "#F59E0B"; // Warm amber standaard
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

  // --- DEEL 1: FUNDAMENT & MINDSET ---

  // Slide 2: Reality check
  addDarkSlide(
    "Deel 1: Fundament & Mindset",
    "De mythe van de geboren heerser: dominantie als ambacht",
    [
      "• DE MEDIAMYTHE: Kille miljardairs in lakleer die nooit twijfelen en altijd op de toppen van hun macht staan.",
      "• HET REËLE AMBACHT: Gewone mensen van vlees en bloed die opgewonden raken van machtsverschil.",
      "• EEN LEERTRAJECT: Net als tangodansen of houtbewerken leer je dit door te oefenen en af te stemmen.",
      "----------------------------------------------------------------",
      "KERNINZICHT: Zodra de druk van perfectie eraf is, ontstaat er werkelijke intimiteit en ontspanning."
    ],
    "Hans: Laten we meteen de grootste mythe begraven: de 'geboren dominant' bestaat niet. Dominantie is een relationele dans die je samen leert. Zodra je stopt met theater spelen, ontstaat er echte erotische chemie.",
    "#38BDF8"
  );

  // Slide 3: Dominantie hoeft niets te bewijzen
  addDarkSlide(
    "Deel 1: Fundament & Mindset",
    "Dominantie hoeft niets te bewijzen: rustige autoriteit",
    [
      "• PERFORMATIEVE DOMINANTIE (Macho-theater): Schreeuwt, eist, dramt en heeft publiek nodig om te bestaan. Raakt in paniek bij tegenspraak.",
      "• AUTHENTIEKE DOMINANTIE (Calm Authority): Een innerlijke toestand van rust, vertraging en gegrondheid. Heeft geen publiek nodig en hoeft zich aan niemand te bewijzen.",
      "• DE IMPACT VAN VERTRAGING: Laat je stem zakken naar je borstkas, adem rustig uit en neem de tijd.",
      "----------------------------------------------------------------",
      "GOUDEN REGEL: Een boze dominant is een bange dominant. Ware autoriteit is kalm, betrouwbaar en ontspannen."
    ],
    "Hans: Een onderdanige partner krijgt geen kippenvel van lawaai, maar van vertraging. Als jij een halve stap dichterbij zet en met ontspannen schouders spreekt, signaleert jouw lichaam: 'Ik ben veilig, ik hoef mij aan niemand te bewijzen.'"
  );

  // Slide 4: Gateau-model
  addDarkSlide(
    "Deel 1: Fundament & Mindset",
    "Het Gateau-model: de vier dragende lagen",
    [
      "• LAAG 4 (DE KERS OP DE TAART): Kink & fetish (attributen, touwen, speeltjes en kleding).",
      "• LAAG 3: D/s-dynamiek (het machtsverschil, regels, leiding en overgave).",
      "• LAAG 2: Erotiek & lust (seksuele aantrekkingskracht en polariteit).",
      "• LAAG 1 (HET FUNDAMENT): De relatiebasis (vriendschap, vertrouwen, respect en veilig kunnen ruziën).",
      "----------------------------------------------------------------",
      "DE VALKUIL: Beginnen met Laag 4 terwijl Laag 1 nog wankel is. Zorg dat het fundament staat!"
    ],
    "Hans: Zie jullie relatie als een bruidstaart. De onderste laag is jullie gewone menselijke band: kunnen jullie samen over straat en de afwas doen zonder ruzie? Als die basis staat, kun je bovenin zo diep spelen als je wilt."
  );

  // Slide 5: Driehoek van dominantie
  addDarkSlide(
    "Deel 1: Fundament & Mindset",
    "De Driehoek van Dominantie: de drie dragers",
    [
      "• HOEK 1: LUST (Het soevereine verlangen) - Weten wat jóu opwindt en dat schaamteloos bezitten als motor.",
      "• HOEK 2: ETHIEK (Zorg, consent & bedding) - Zoveel veiligheid bouwen dat de ander zich vol vertrouwen kán overgeven.",
      "• HOEK 3: AMBACHT (Techniek & fysiologie) - Kennis van het menselijk lichaam, zenuwbanen en materialen.",
      "----------------------------------------------------------------",
      "DE BALANS: Lust zonder ethiek is lomp; ethiek zonder lust is saai; ambacht zorgt dat niemand gewond raakt."
    ],
    "Hans: Je hebt alle drie de hoeken nodig. Als je alleen maar braaf en ethisch bent zonder eigen lust, word je een saaie therapeut in bed. Als je lust hebt zonder ambacht, knoop je iemand vast op een zenuwbaan."
  );

  // Slide 6: Eigen lust bezitten
  addDarkSlide(
    "Deel 1: Fundament & Mindset",
    "Hoek 1: Soeverein verlangen (jouw lust als kompas)",
    [
      "• ZONDER JOUW OPWINDING WERKT HET NIET: Een onderdanige partner voelt direct of jij dit 'doet voor haar' of dat jouw eigen onderbuik meedoet.",
      "• BEZIT JE VERLANGEN: Wat zet jouw bloed in beweging? Fysieke controle? Mentale sturing? Visueel genot? Of overspoelen met zintuiglijke prikkels?",
      "• STOP MET VALSE BESCHEIDENHEID: Jouw geilheid is geen last of gevaar; het is de veilige motor waar jouw partner zich aan wil toevertrouwen."
    ],
    "Hans: Veel beginnende dominanten schamen zich voor hun verlangen en vragen continu verlegen om bevestiging. Bezit je eigen verlangen! Een onderdanige zoekt jouw soevereine kracht. Als jij durft te gaan staan voor wat jou geil maakt, kan de ander ontspannen."
  );

  // --- DEEL 2: DE BINNENWERELD VAN DE ONDERDANIGE ---

  // Slide 7: Wat zoekt een sub werkelijk?
  addDarkSlide(
    "Deel 2: De Binnenwereld van de Onderdanige",
    "Wat zoekt een onderdanige partner werkelijk?",
    [
      "• HET VERLANGEN NAAR ONTZORGING: In het dagelijks leven dragen we allemaal enorme verantwoordelijkheden.",
      "• HET PIEKERENDE BREIN DIMMEN: Door duidelijke leiding dimt de prefrontale cortex (transiënte hypofrontaliteit / subspace).",
      "• HET VERLOSSENDE GEVOEL: 'Ik hoef even helemaal niets meer te bedenken; ik hoef alleen maar te voelen en te volgen.'",
      "----------------------------------------------------------------",
      "DOMINANTE HOLDING: Jij bent de stevige container waarin de ander al haar controle veilig mag loslaten."
    ],
    "Hans: Een sub zoekt geen mishandeling; die zoekt ontzorging. Het mooiste cadeau dat jij kunt bieden is keuzestress wegnemen: 'Trek dit aan, ga daar liggen en wees stil.' Dat voelt als een warm bad.",
    "#EC4899"
  );

  // Slide 8: De zes hongers
  addDarkSlide(
    "Deel 2: De Binnenwereld van de Onderdanige",
    "De zes emotionele hongers van de onderdanige",
    [
      "1. HONGER NAAR STRUCTUUR: Heldere kaders, protocollen en weten waar de grenzen liggen.",
      "2. HONGER NAAR GEZIEN WORDEN: Weten dat elke ademhaling, rilling en reactie wordt opgemerkt.",
      "3. HONGER NAAR HOLDING: Een stevige rots in de branding die niet wankelt bij emoties.",
      "4. HONGER NAAR BEGRENZING: Fysieke of verbale tegendruk die de eigen onrust stopt.",
      "5. HONGER NAAR LOUTERING: Via intense fysieke sensaties (impact) oude stress ontladen.",
      "6. HONGER NAAR OVERGAVE: De totale controle neerleggen en blindelings vertrouwen."
    ],
    "Hans: Vraag je voor een speelsessie altijd af: wat voor honger heeft mijn partner vanavond? Chaotische werkweek gehad en honger naar structuur? Of opgekropte spanning en honger naar ontlading via spanking?"
  );

  // Slide 9: Subspace versus Freeze
  addDarkSlide(
    "Deel 2: De Binnenwereld van de Onderdanige",
    "Veiligheidsdiagnostiek: Subspace versus Freeze",
    [
      "• SUBSPACE (Flow & Trance):\n  - Ademhaling: Diep, traag, buikadem.\n  - Lichaam: Warm, ontspannen spieren, zachte blik.\n  - Contact: Blijft aanwezig en ontvankelijk bij aanraking.",
      "• FREEZE (Dorsale traumatische blokkade):\n  - Ademhaling: Stokt of zit oppervlakkig hoog.\n  - Lichaam: Koud/klam, spieren verstijven of worden slap, starende/glazige blik.\n  - Contact: Volledig 'vertrokken' uit het lichaam.",
      "----------------------------------------------------------------",
      "BIJ FREEZE: Onmiddellijk stoppen! Touwen los, warmte bieden, vasthouden en zacht aarden."
    ],
    "Hans: Subspace is een warme flow waarin endorfinen stromen. Freeze is een paniekreactie van het zenuwstelsel. Zie je koude handen, een holle blik en een stokkende adem? Meteen stoppen, dekentje erom en vasthouden."
  );

  // Slide 10: Schijnbare weerstand (Brats & CNC)
  addDarkSlide(
    "Deel 2: De Binnenwereld van de Onderdanige",
    "Het spel met schijnbare weerstand (Brats & CNC)",
    [
      "• HET VERLANGEN NAAR OVERMEESTERD WORDEN: Veel subs kicken op speelse tegenstribbeling (*consensual non-consent / bratting*).",
      "• HET DILEMMA VOOR DE DOMINANT: Ze roept: 'Nee, laat me los!' maar lacht ondeugend. Wat doe je?",
      "• DE GOUDEN AFSPRAAK: Spreek vooraf af dat normale woorden als 'nee' onderdeel zijn van het toneelstuk.",
      "• DE ABSOLUTE BODEM: Alleen het officiële **safeword** (bv. 'Rood') zet de werkelijkheid acuut stil."
    ],
    "Hans: Dit haalt alle kramp weg. Als jullie hebben afgesproken dat alleen het safeword telt, kan zij naar hartenlust de opstandige rol spelen en hoef jij niet bang te zijn dat je over haar grenzen heen denderen."
  );

  // --- DEEL 3: COMMUNICATIE, CONSENT & DE KEUKENTAFEL ---

  // Slide 11: Kink-GPS aan de keukentafel
  addDarkSlide(
    "Deel 3: Communicatie & Consent",
    "Praten over verlangens: de Kink-GPS",
    [
      "• AAN DE KEUKENTAFEL: Bespreek dit overdag met de kleren aan en een kop koffie, niet 's avonds laat in bed.",
      "• HET STOPLICHTMODEL:\n  - 🟢 GROEN: Wat we nu al opwindend vinden (blinddoeken, lichte spanking, vastbinden).\n  - 🟡 GEEL: Waar we nieuwsgierig naar zijn om met beleid te testen (rollenspel, ijs).\n  - 🔴 ROOD: Harde grenzen waar een slot op zit.",
      "• OORDEELVRIJE RUIMTE: Luister nieuwsgierig naar elkaars fantasieën zonder schaamte of afwijzing."
    ],
    "Hans: Pak er een kop koffie bij op zondagochtend en vraag: 'Wat lijkt jou nou spannend om samen eens te verkennen?' Als je elkaars rode grenzen kent, ontstaat er in het groene en gele gebied een zee aan speelruimte.",
    "#10B981"
  );

  // Slide 12: Cube of Consent
  addDarkSlide(
    "Deel 3: Communicatie & Consent",
    "De dynamiek van nemen en dienen: de Cube of Consent",
    [
      "• DE TWEE VRAGEN: Wie doet de handeling, en voor wiens plezier is het bedoeld?",
      "• DE VIER KWADRANTEN:\n  - NEMEN (Taking): Jij pakt wat jou opwindt, binnen haar toestemming.\n  - DIENEN (Serving): Jij verzorgt de ander puur voor haar genot.\n  - TOESTAAN (Allowing): Zij laat jou begaan op haar lichaam.\n  - VRAGEN (Requesting): Zij vraagt jou om specifieke leiding of sensatie.",
      "----------------------------------------------------------------",
      "DURF TE NEMEN: Veel mannen durven in bed alleen te 'dienen'. Een onderdanige partner wil juist dat jij durft te némen!"
    ],
    "Hans: Veel mannen durven in bed alleen maar te pleasen. Maar een onderdanige partner wil juist voelen dat jíj haar opeist voor jóuw genot. Binnen consent natuurlijk. Durf te nemen!"
  );

  // Slide 13: Safewords & verkeerslichten
  addDarkSlide(
    "Deel 3: Communicatie & Consent",
    "Safewords & verkeerslichten: veiligheid schept speelruimte",
    [
      "• HET NOODWOORD SCHEPT RUST: Eén woord (bv. 'Rood' of 'Ananas') dat alles direct stilzet.",
      "• HET VERKEERSLICHT IN BEDRIJF:\n  - 🟢 Groen: Heerlijk, ga door.\n  - 🟡 Oranje: Erg intens, even vertragen of houding aanpassen.\n  - 🔴 Rood: Onmiddellijke stop, alles los, knuffelen en aarden.",
      "• HOUDEN VAN SAFEWORDS: Een dominant houdt zielsveel van safewords omdat ze jou de vrijheid geven om voluit te spelen zonder angst."
    ],
    "Hans: Safewords zijn geen spelbrekers; ze zijn juist je ticket naar ultieme vrijheid. Zonder safeword houd je je altijd een beetje in. Met een safeword kun je vol overgave spelen."
  );

  // Slide 14: Betekenisvolle protocollen
  addDarkSlide(
    "Deel 3: Communicatie & Consent",
    "Betekenisvolle protocollen & regels",
    [
      "• GEEN KILLE BUREAUCRATIE: Kopieer geen contracten van twintig pagina's van internet.",
      "• DE DRIE VOORWAARDEN VOOR EEN GOED PROTOCOL:\n  1. Brengt het rust in het hoofd van de sub (ontzorging)?\n  2. Vergroot het de aandacht en zorg van de dominant?\n  3. Verdiept het de erotische intimiteit tussen jullie beiden?",
      "• EENVOUDIG BEGINNEN: Eén simpele regel laadt de hele avond met elektriciteit."
    ],
    "Hans: Begin met één afspraak. Als een regel geen betekenis heeft, wordt het een kille checklist. Regels zijn er om de erotiek en overgave te voeden, niet om elkaar te pesten."
  );

  // --- DEEL 4: HET AMBACHT VAN DE SPEELVLOER ---

  // Slide 15: Gereedschapskist
  addDarkSlide(
    "Deel 4: Het Ambacht van de Speelvloer",
    "Het minimalistische instrumentarium: sturen met eenvoud",
    [
      "• JOUW STEM & HANDEN: Veruit je belangrijkste gereedschap. Traag spreken, stilte laten vallen, dragende aanraking.",
      "• DE BLINNDOEK: Schakelt 80% van de visuele controle uit; elke aanraking komt vier keer intenser binnen.",
      "• BEWEGINGSBEPERKING: Zachte sjaals of eenvoudige polsbandjes om overgave tastbaar te maken.",
      "• DE GOUDEN VEILIGHEIDSTIP: Een stompe verbandschaar van €5 van de drogist. Als een knoop in nood vastzit, knip je het touw binnen één seconde door!"
    ],
    "Hans: Je hebt geen kasteel vol spullen nodig. Twee zachte sjaals en een blinddoek zijn al genoeg voor een wereld aan spanning. Het zit in de opbouw, niet in de attributen.",
    "#F97316"
  );

  // Slide 16: Zintuiglijk spelen
  addDarkSlide(
    "Deel 4: Het Ambacht van de Speelvloer",
    "Zintuiglijk spelen (*sensation play*): contrast en anticipatie",
    [
      "• HET BESPELEN VAN CONTRASTEN: Warm versus koud, vederlicht versus stevig, wachten versus prikkelen.",
      "• DE KRACHT VAN DE PAUZE: Laat haar het ijsblokje horen rammelen in een glas terwijl ze geblinddoekt is. Wacht... laat de spanning stijgen.",
      "• TOEGANKELIJKE MATERIALEN:\n  - Een ijsblokje (koud)\n  - Jouw warme adem of mond (warm)\n  - Een zachte zijden sjaal of veertje\n  - Lichte nagels over de rug"
    ],
    "Hans: Je bespeelt het zenuwstelsel als een instrument. Als iemand geblinddoekt is en je tikt zachtjes met een ijsblokje tegen haar dij, schiet de alertheid omhoog. Als je er direct daarna warm overheen blaast, ontspant het hele lijf."
  );

  // Slide 17: Fysieke begrenzing
  addDarkSlide(
    "Deel 4: Het Ambacht van de Speelvloer",
    "De basis van fysieke begrenzing: anatomie en veiligheid",
    [
      "• DE ANATOMIE VAN DE POLS: In de binnenkant van de pols lopen kwetsbare zenuwbanen (radiale zenuw).",
      "• VIER FYSIOLOGISCHE REGELS:\n  1. Brede materialen: Touw van minstens 6mm of brede zachte manchetten.\n  2. Niet afknellen: Het doel is beweging beperken, niet de bloedsomloop stoppen.\n  3. De tweevinder-regel: Er moeten altijd twee vingers tussen touw en huid passen.\n  4. Circulatie bewaken: Voelen vingers koud aan of tintelen ze? Meteen losmaken!"
    ],
    "Hans: Vastbinden is geweldig, maar vereist respect voor de zenuwen. Gebruik geen dunne touwtjes die insnijden. Twee polsen vastmaken zodat de ander voelt: 'Ik kan niet weg' - dat psychologische besef doet het werk."
  );

  // Slide 18: Impact play
  addDarkSlide(
    "Deel 4: Het Ambacht van de Speelvloer",
    "De anatomie van impact: fysiologie en veilige zones",
    [
      "• VEILIGE ZONES (GROEN): De vlezige billen en de achterkant van de bovenbenen (voldoende spier- en vetweefsel).",
      "• VERBODEN ZONES (ROOD): De onderrug (de nieren hebben geen ribbenkast!), de wervelkolom, de stuit en gewrichten.",
      "• DE OPBOUW:\n  1. Opwarmen: Begin met de vlakke hand op de billen tot de huid warm en roze kleurt.\n  2. Doseren: Sla ritmisch en geaard vanuit je bekken, niet wild vanuit je schouder.\n  3. Luister naar de adem: Na elke klap moet een diepe uitademing volgen."
    ],
    "Hans: Sla nóóit op de onderrug! Daar zitten de nieren en die zijn kwetsbaar. Blijf op het vlezige deel van de billen. En warm altijd eerst op met je hand. Luister naar haar ademhaling: ontspant ze na de klap, dan zit je goed."
  );

  // Slide 19: De dynamische boog van een scène
  addDarkSlide(
    "Deel 4: Het Ambacht van de Speelvloer",
    "De dynamische boog van een scène",
    [
      "• EEN VOLWASSEN SCÈNE BOUW JE OP IN VIJF FASEN:\n  1. DE DREMPEL: Overgang van gewone wereld naar speelveld (telefoons uit, kleren uit).\n  2. DE KALIBRATIE: Aftasten waar haar lichaam vandaag staat.\n  3. DE CLIMAX: Het hoogtepunt van intensiteit en overgave.\n  4. DE DECELERATIE: Vertragen, zacht afbouwen, touwen rustig losmaken.\n  5. DE AFTERCARE: Zachte landing in de realiteit.",
      "----------------------------------------------------------------",
      "GOUDEN REGEL: Trek na de piek niet meteen je spijkerbroek aan om weg te lopen. Vertraag!"
    ],
    "Hans: Die opbouw maakt het verschil. Neem de tijd voor de drempel en de vertraging. Als je na de climax meteen wegloopt, voelt de ander zich gebruikt. Maak de cirkel helemaal rond."
  );

  // --- DEEL 5: EMOTIONELE NAVIGATIE, HOLDING & AFTERCARE ---

  // Slide 20: Klungelen mag
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "De ontspannen speelvloer: humor als regulator",
    [
      "• HET PLAY-SYSTEEM VAN PANKSEPP: BDSM is geen heilige mis; het is volwassen stoeien en ontladen.",
      "• ONVERWACHTE MOMENTEN: Een knoop schiet los, iemand stoot zijn teen, of een stoere zin klinkt knullig.",
      "• DE REACTIE VAN DE LEIDER: Schaterlachen! Even knuffelen, spanning afschudden en weer oppakken.",
      "----------------------------------------------------------------",
      "KERNINZICHT: Humor breekt de kramp en verdiept de intimiteit tien keer meer dan krampachtig stoer doen."
    ],
    "Hans: Neem jezelf niet zo bloedserieus! Zodra seks en BDSM een examen worden waarin je geen fouten mag maken, sterft de geilheid. Lachen ontlaadt de spanning en maakt het spel menselijk en warm.",
    "#A855F7"
  );

  // Slide 21: Dominante holding
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "Dominante holding: wat als de onderdanige huilt?",
    [
      "• TRANEN ZIJN ONTLADING: Tijdens diepe overgave kan er ineens oud verdriet of opgekropte spanning loskomen.",
      "• DE PANIEKREFLEX VAN BEGINNERS: 'O help, ik heb haar getraumatiseerd!' (In 99% van de gevallen niet waar).",
      "• DE HOUDING VAN HOLDING:\n  - Schrik niet; wees de rots in de branding.\n  - Ga niet analyseren ('Waarom huil je, denk je aan je verleden?').\n  - Houd de ander stevig vast, leg een dragende hand op de rug en zeg: 'Het is goed. Ik ben hier. Laat maar stromen.'"
    ],
    "Hans: Als een onderdanige plotseling huilt, ga dan geen therapeutje spelen. Vraag niet waarom. Houd haar gewoon stevig vast. Laat haar zenuwstelsel voelen dat jij groot en sterk genoeg bent om haar storm te dragen."
  );

  // Slide 22: Aftercare voor twee
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "De landing: aftercare voor twee",
    [
      "• DE BIOCHEMISCHE CRASH: Na de piek van adrenaline, endorfine en dopamine volgt fysiologisch een daling.",
      "• BIOLOGISCHE ZORG: Warme deken (lichaam koelt snel af), water, thee en suikers (chocola herstelt de bloedsuikerspiegel).",
      "• ROYALE PRAISE: Vertel hoe mooi, moedig en intens de ander was. Haal alle mogelijke schaamte direct weg.",
      "• FYSIEKE NABIJHEID: Blijf fysiek dichtbij tot de ademhaling en het bewustzijn weer volledig geland zijn."
    ],
    "Hans: Een scène stopt niet bij het orgasme. Zorg dat je van tevoren een deken, water en chocola klaar hebt liggen. En prijs haar! Een sub voelt zich na afloop kwetsbaar; jouw praise bevestigt dat de overgave goed en welkom was."
  );

  // Slide 23: Domdrop
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "Domdrop: de biochemische kater van de leider",
    [
      "• URENLANG 'AAN' STAAN: Scherpe focus, waken over veiligheid, grenzen peilen en energie sturen kost bakken met energie.",
      "• DE CRASH NA 24-48 UUR: Plotselinge leegte, zelftwijfel ('Was ik niet te streng?'), somberheid of uitputting.",
      "• DE OPLOSSING: Deel dit met je partner! Laat haar/hem na afloop ook voor jóu zorgen (een knuffel, een kop thee, even over je bol aaien).",
      "----------------------------------------------------------------",
      "LEIDERSCHAP IS GEEN EENRICHTINGSVERKEER: Ook de dominante partner mag na afloop zacht zijn."
    ],
    "Hans: Bijna niemand praat over 'domdrop'. En toch krijgt bijna elke dominante ermee te maken. Als de scène klaar is, loop jij leeg. Vraag je partner gerust om een knuffel: 'Ik ben even helemaal op, wil je me vasthouden?'"
  );

  // Slide 24: De debriefing
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "De debriefing (48 uur later): de verdieping van het spel",
    [
      "• KOFFIE DRINKEN ALS DE CHEMISCHE STOFFEN ZIJN GELAND: Direct na afloop is iedereen nog bedwelmd door knuffelstoffen.",
      "• DRIE GOUDEN VRAGEN VOOR DE EVALUATIE:\n  1. Wat vond je het allerlekkerst of meest opwindend?\n  2. Was er een moment dat spannend of net iets te veel voelde?\n  3. Wat willen we de volgende keer anders, meer of minder doen?",
      "• EEN LEERPROCES: Zo slijpen jullie samen een speelstijl in die op maat gemaakt is voor jullie tweeën."
    ],
    "Hans: Spreek altijd af dat jullie een of twee dagen later even kort napraten. Niet zwaar of moeilijk, maar nieuwsgierig met een cappuccino. Pas dan weet je hoe het écht geland is. Daar groei je van."
  );

  // Slide 25: De eerste oversteek
  addDarkSlide(
    "Deel 5: Emotionele Navigatie & Landing",
    "De eerste oversteek: een zintuiglijk experiment voor vanavond",
    [
      "• STAP 1: HET KADER (5 min) - 'Lief, vanavond neem ik 15 minuten de leiding in bed. Ons safeword is Rood.'",
      "• STAP 2: HET SPEL (15 min) - Blinddoek om, vertraagd tempo, zachte aanraking, geen seksueel einddoel vereist.",
      "• STAP 3: DE LANDING (10 min) - Kop thee, dekentje eromheen, even knuffelen en samen napraten: hoe voelde dat?",
      "----------------------------------------------------------------",
      "DE ULTIEME UITSMATER: Dominantie is niet de ander verkleinen, maar de ander zóveel veiligheid en richting geven dat jullie samen groter worden dan ooit tevoren."
    ],
    "Hans: Houd het klein vanavond. Een kwartiertje blinddoek, rustig ademen en voelen wat er gebeurt. Geniet van je eigen verlangen en heel veel plezier op het speelveld!",
    "#10B981"
  );

  // Slide 26: Afsluiting & Vragen
  addDarkSlide(
    "Afsluiting & Vragen",
    "De bar is open: napraten & veelgestelde vragen",
    [
      "• 'WAT ALS MIJN PARTNER NIET ONDER DE INDRUK IS?' ──► Blijf ontspannen in je zwaartekracht; stem nieuwsgierig af op haar verlangen.",
      "• 'WAT ALS IK PER ONGELUK TE VER GA?' ──► Safewords en een langzame opbouw beschermen jullie te allen tijde.",
      "• 'MAG EEN VROUW OOK DOMINANT ZIJN?' ──► Vanzelfsprekend! Dominantie kent geen gender; het kent alleen energie, aanwezigheid en verlangen.",
      "----------------------------------------------------------------",
      "CONTACT & VERDIEPING: Kennisbank, werkvormen en 1-op-1 coaching via Hans West."
    ],
    "Hans: Dank jullie wel voor jullie openheid en aandacht vanavond. De vloer is open voor alle vragen, twijfels of situaties die je wilt voorleggen. Geen vraag is te gek of te intiem. Laten we lekker napraten met een drankje!"
  );

  Logger.log("Presentatie succesvol aangemaakt: " + deck.getUrl());
}
