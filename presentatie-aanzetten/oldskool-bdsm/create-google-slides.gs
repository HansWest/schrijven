/**
 * Google Apps Script om automatisch de complete 18-delige Google Slides presentatie
 * "Oldskool BDSM: wat willen we bewaren - en wat laten we achter?"
 * aan te maken in jouw Google Drive.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga naar https://script.google.com/
 * 2. Klik op "Nieuw project"
 * 3. Plak deze code in de editor
 * 4. Selecteer de functie "createOldskoolBDSMSlides" en klik op "Uitvoeren" (Run)
 * 5. Geef eenmalig Google-toestemming -> De complete presentatie staat direct in jouw Google Drive!
 */

function createOldskoolBDSMSlides() {
  var title = "Oldskool BDSM • Wat willen we bewaren - en wat laten we achter? (18 slides)";
  var deck = SlidesApp.create(title);
  
  // Slide 1: Titelslide
  var slide1 = deck.getSlides()[0];
  slide1.getBackground().setSolidFill("#13171F");
  
  var tBox = slide1.insertTextBox("OLDSKOOL BDSM\nWat willen we bewaren - en wat laten we achter?", 50, 60, 620, 130);
  tBox.getText().getTextStyle().setForegroundColor("#F8FAFC").setFontSize(26).setBold(true);
  
  var subBox = slide1.insertTextBox(
    "Een nuchtere, diepgaande en ontwapenende masterclass over traditie, rituelen en ethiek.\n" +
    "Begeleiding: Hans West | Kink-Aware Coach\n\n" +
    "Onderwerpen:\n" +
    "• De mythe van de 'Old Guard': nostalgie versus historische realiteit\n" +
    "• De hanky code: van vintage cruise-signaal naar moderne gespreksstarter\n" +
    "• Eer en respect: waarom de Twee O's (Overgave & Ontferming) het kasteeltheater verslaan\n" +
    "• Protocollen, contracten en ceremonieën: bedding versus schijnveiligheid\n" +
    "• Het driekolommenmodel: behouden, aanpassen of definitief dumpen?", 
    50, 195, 620, 180
  );
  subBox.getText().getTextStyle().setForegroundColor("#94A3B8").setFontSize(12);
  
  slide1.getNotesPage().getSpeakerNotesShape().getText().setText(
    "Hans: Welkom allemaal. Fijn dat jullie er zijn. Als je wat langer rondloopt in de kinky wereld, hoor je het mensen regelmatig verzuchten: 'Vroeger... toen ging BDSM nog ergens over.' Vanavond gaan we die romantiek eens stevig ontrafelen. Laten we de mythes afpellen en kijken wat er aan puur goud overblijft."
  );

  // Helper function to add slides
  function addContentSlide(titleText, contentText, notesText) {
    var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    slide.getBackground().setSolidFill("#0F172A");
    
    var hBox = slide.insertTextBox(titleText, 50, 40, 620, 50);
    hBox.getText().getTextStyle().setForegroundColor("#38BDF8").setFontSize(20).setBold(true);
    
    var bBox = slide.insertTextBox(contentText, 50, 100, 620, 260);
    bBox.getText().getTextStyle().setForegroundColor("#F1F5F9").setFontSize(13);
    
    slide.getNotesPage().getSpeakerNotesShape().getText().setText(notesText);
    return slide;
  }

  // Slide 2: Erfgoed of cosplay?
  addContentSlide(
    "Erfgoed of cosplay? De aantrekkingskracht van traditie",
    "HET VERLANGEN VAN ONS ZENUWSTELSEL:\n" +
    "• Behoefte aan houvast, gewicht en duidelijke kaders in een vrijblijvende wereld.\n" +
    "• Verlangen naar vakmanschap, toewijding en rustige autoriteit.\n" +
    "• Rituelen die het overvolle hoofd ontzorgen en de drempel markeren.\n\n" +
    "DE VALKUIL VAN HISTORISCHE NOSTALGIE:\n" +
    "• Romantiseren van een verleden dat historisch nooit zo heilig was.\n" +
    "• 'Traditie' misbruiken als schild om consent te omzeilen of kritiek te smoren.\n" +
    "• Autoritair machovertoon verwarren met volwassen meesterschap.",
    "Hans: Waarom trekt 'oldskool' ons zo aan? Omdat vrijheid zonder kaders soms verrekte leeg voelt. Maar traditie op zichzelf is geen enkel bewijs van emotionele veiligheid of respect."
  );

  // Slide 3: De mythe van de Old Guard
  addContentSlide(
    "De geschiedenis ontrafeld: de mythe van de 'Old Guard'",
    "WAT ZEGT HET HISTORISCH ONDERZOEK?\n\n" +
    "1. Lokale wortels in naoorlogse gay leather clubs:\n" +
    "   Ontstaan in de motor- en leerscene van San Francisco, Chicago en New York (jaren 50 en 60).\n\n" +
    "2. Geen tijdloos universeel handboek:\n" +
    "   Veel 'eeuwenoude regels' werden pas decennia later opgeschreven om een verdwijnende subcultuur vast te leggen.\n\n" +
    "3. Selectieve archieven:\n" +
    "   Vrouwen, hetero kinksters, trans personen en mensen van kleur waren er wel, maar kregen minder archiefruimte.",
    "Hans: Als historici van het Leather Archives & Museum de archieven induiken, ontdekken ze dat 'Old Guard' pas een populair begrip werd nádat die vroege periode al voorbij was. Laten we respect hebben voor die geschiedenis, zonder haar te verheffen tot een starre religie."
  );

  // Slide 4: Evolutie van veiligheidsmodellen
  addContentSlide(
    "De evolutie van veiligheid: van SSC naar RACK en relationeel consent",
    "1. SSC (Safe, Sane, Consensual) - Jaren 80:\n" +
    "   Het politieke schild om kink te verdedigen tegen wetgevers en invallen.\n\n" +
    "2. RACK (Risk Aware Consensual Kink) - Jaren 90:\n" +
    "   De volwassen erkenning: 100% veilig bestaat biologisch niet. Erken het reële risico en neem samen verantwoordelijkheid.\n\n" +
    "3. Relationeel Consent (Modern Kink-Aware Kader):\n" +
    "   Consent is geen afvinklijstje vooraf, maar een continue afstemming tussen twee zenuwstelsels in het hier-en-nu.",
    "Hans: In de jaren tachtig riep iedereen SSC om niet gearresteerd te worden. In de jaren negentig zeiden mensen met RACK: wees volwassen over het risico. Vandaag weten we: consent is een continu levend gesprek."
  );

  // Slide 5: De hanky code
  addContentSlide(
    "De hanky code: het vintage navigatiesysteem",
    "DE TWEE BASISREGELS VAN DE ZAKDOEKJESCULTUUR:\n\n" +
    "• LINKS GEDRAGEN = Top / Actief / Nemen / Leiden\n" +
    "• RECHTS GEDRAGEN = Bottom / Ontvangend / Dienen / Ondergaan\n\n" +
    "Klassieke voorbeelden:\n" +
    "• Zwart: Zware SM en leer\n" +
    "• Donkerblauw: Anale seks\n" +
    "• Rood: Fisting\n" +
    "• Geel: Urolagnie (plasseks)\n" +
    "• Wit: Orale seks / pijpen",
    "Hans: In de jaren zeventig zag je in één oogopslag wat iemand zocht. Rood rechts? Wil gefist worden. Zwart links? Dominante leermeester. Geniaal in een tijd zonder internet of datingapps."
  );

  // Slide 6: Signaal vs Consent
  addContentSlide(
    "Het gouden principe: een signaal is NOOIT consent",
    "HET FUNDAMENTELE VERSCHIL:\n\n" +
    "• EEN SIGNAAL (Hanky / Outfit / Halsband):\n" +
    "  \"Dit is mijn belevingswereld en interesse; laten we praten.\"\n\n" +
    "• CONSENT (Toestemming):\n" +
    "  \"Ik geef jou hier en nu toestemming om deze specifieke actie uit te voeren.\"\n\n" +
    "Kernregel:\n" +
    "Een kinky outfit op een feest geeft niemand het recht om andermans lichaam aan te raken. Navragen en afstemmen blijft altijd verplicht.",
    "Hans: Dit is de belangrijkste regel van vanavond: een zakdoek of een leren pak is een gespreksstarter, nooit een vrijbrief om iemand vast te pakken."
  );

  // Slide 7: Eer en respect
  addContentSlide(
    "Eer en respect: van kasteeltheater naar meetbaar gedrag",
    "THEATRAAL RESPECT (Cosplay):\n" +
    "• Titels eisen ('Spreek mij aan met Meester') en neerbuigendheid.\n" +
    "• Kritiek smoren onder het mom van 'onderdanigheid'.\n" +
    "• Schermen met de status van de 'ervaren rot'.\n\n" +
    "DAADWERKELIJK RESPECT (Karakter & Ambacht):\n" +
    "• Afspraken nakomen, ook als de roes voorbij is.\n" +
    "• Fouten direct en volwassen erkennen in plaats van defensief worden.\n" +
    "• Iemands 'nee' of safeword zonder morren respecteren.\n" +
    "• Discretie: elkaars privacy en kwetsbaarheid heilig verklaren.",
    "Hans: Eer en respect zijn heel nuchtere dingen. Kom jij je afspraken na? Ben je nuchter tijdens het spel? Durf je toe te geven dat een slag verkeerd viel? Dát is meesterschap."
  );

  // Slide 8: De Twee O's
  addContentSlide(
    "De Twee O's: het ethische hart van BDSM",
    "OVERGAVE (De Onderdanige):\n" +
    "• Geen zwakte of willoze capitulatie, maar soevereine moed.\n" +
    "• De bewuste keuze om het controlecentrum in het hoofd stil te zetten.\n" +
    "• Slavinnentrots: de trotse kracht om jezelf toe te vertrouwen.\n\n" +
    "ONTFERMING (De Dominant):\n" +
    "• 'Splagchnizomai': een diepe bewogenheid in je ingewanden.\n" +
    "• Actieve bescherming en zorg voor de kwetsbaarheid van de ander.\n" +
    "• Wie deze ontferming niet kan opbrengen, hoort niet op de vloer.",
    "Hans: Aan de ene kant de overgave van de sub: de moed om los te laten. Aan de andere kant de ontferming van de Dom: de diepe plicht om te zorgen voor die kwetsbaarheid. Waar die twee elkaar ontmoeten, ontstaat magie."
  );

  // Slide 9: Rituelen en protocollen
  addContentSlide(
    "Protocollen en rituelen: ontzorging van het zenuwstelsel",
    "WAAROM WERKEN RITUELEN ZO KRACHTIG?\n\n" +
    "1. De Drempelmarkering (State Switch):\n" +
    "   Markeert de overgang tussen de kantoorstress en de intieme spelwereld.\n\n" +
    "2. Ontzorging van de Neocortex:\n" +
    "   Vaste handelingen nemen de keuzestress weg. De onderdanige hoeft niets te managen.\n\n" +
    "3. Veilige Kaders:\n" +
    "   Vaste routines geven het brein het signaal: we zijn begonnen, en straks landen we weer veilig.",
    "Hans: Rituelen helpen het brein omschakelen: het denkende hoofd mag uit, het voelende lijf mag aan. Maar let op: een ritueel werkt alleen als jullie beiden de betekenis ervan doorleven."
  );

  // Slide 10: BDSM-contracten
  addContentSlide(
    "BDSM-contracten: praatinstrument versus wurgcontract",
    "WAAR EEN CONTRACT WÉL VOOR DIENT:\n" +
    "• Vertraging aan de keukentafel met de kleren aan.\n" +
    "• Expliciet maken van verlangens, grenzen en evaluatiemomenten.\n" +
    "• Een duidelijke, respectvolle exit-route vastleggen.\n\n" +
    "WAAR EEN CONTRACT NOOIT VOOR DIENT:\n" +
    "• Geen juridische vrijbrief: wettelijk kun je geen afstand doen van je zelfbeschikking.\n" +
    "• Geen opheffing van het safeword of consent: een 'nee' overschrijft altijd alles.",
    "Hans: Een contract is een schitterend communicatie-instrument aan de keukentafel. Maar zodra iemand ermee zwaait om te zeggen 'je hebt getekend dus je moet', ben je niet bezig met BDSM maar met misbruik."
  );

  // Slide 11: Collaring en de-collaring
  addContentSlide(
    "Collaring en de-collaring: de overgang en het afscheid",
    "DE COLLARING (De Verbinding):\n" +
    "• Het omhangen van de halsband als intiem symbool van toewijding.\n" +
    "• Alleen waardevol bij 100% vrijwilligheid en gedeelde symboliek.\n\n" +
    "DE DE-COLLARING (Het Waardige Afscheid):\n" +
    "• Net zoals er een ritueel is om te verbinden, moet er een ritueel zijn om afscheid te nemen.\n" +
    "• Voorkomt onerkende rouw ('disenfranchised grief').\n" +
    "• Het respectvol teruggeven van de soevereiniteit zonder vernedering.",
    "Hans: Een collaring is prachtig. Maar een relatie verdient ook een waardige de-collaring als het stopt. Ga samen zitten, haal die band eraf en bedank elkaar. Dát is meesterschap."
  );

  // Slide 12: Driekolommenmodel overzicht
  addContentSlide(
    "Het driekolommenmodel: het kaf van het koren scheiden",
    "🟢 BEHOUDEN (Het Goud):\n" +
    "• Vakmanschap & materiaalkennis | De Twee O's | Nazorg & debriefing | Discretie\n\n" +
    "🟡 AANPASSEN (Het Ambacht):\n" +
    "• Rituelen op maat | Contracten als levend praatinstrument | Transparant mentorschap\n\n" +
    "🔴 LOSLATEN (Het Giftige Afval):\n" +
    "• Elitarisme & poortwachters | Traditie als excuus voor grensoverschrijding | Doofpotten",
    "Hans: Wat houden we vast? Het vakmanschap en de toewijding. Wat passen we aan? Rituelen flexibel maken voor nú. Wat dumpen we? Elitarisme en traditie als dekmantel voor wangedrag."
  );

  // Slide 13: Kolom 1 Het Goud
  addContentSlide(
    "Kolom 1: wat we vurig bewaren (het goud)",
    "• 🛠️ AMBACHT & VAKMANSCHAP:\n" +
    "  Touwknopen, zenuwbanen ontzien, impactdosering. Geen roekeloos geklungel.\n\n" +
    "• 🛡️ DE TWEE O'S:\n" +
    "  Overgave ontmoet ontferming; holding die dieper reikt dan de handeling.\n\n" +
    "• 🔒 BETROUWBAARHEID & DISCRETIE:\n" +
    "  Een woord is een woord. Elkaars privacy en beelden heilig beschermen.\n\n" +
    "• ☕ NAZORG & DEBRIEFING:\n" +
    "  Tijd nemen voor de landing en 24 uur later open evalueren.",
    "Hans: Aftercare is geen optioneel toetje; het is de biologische noodzaak om het zenuwstelsel weer veilig terug te brengen op aarde."
  );

  // Slide 14: Kolom 2 Het Ambacht
  addContentSlide(
    "Kolom 2: wat we aanpassen aan vandaag (het ambacht)",
    "• 🔄 RITUELEN OP MAAT:\n" +
    "  Niet blind kopiëren, maar ontwerpen wat voor júllie zenuwstelsels werkt.\n\n" +
    "• 📋 CONTRACTEN ALS KINK-GPS:\n" +
    "  Geen wurgcontracten, maar een levend navigatie-instrument dat periodiek herijkt wordt.\n\n" +
    "• 🧭 TRANSPARANT MENTORSCHAP:\n" +
    "  Kennis doorgeven zonder dat een mentor emotionele zeggenschap over je leven claimt.",
    "Hans: Maak rituelen eigentijds. Bedenk jullie eigen overgangen, en gebruik contracten om elkaar te blijven bevragen."
  );

  // Slide 15: Kolom 3 Het Afval
  addContentSlide(
    "Kolom 3: wat we definitief dumpen (het giftige afval)",
    "• ❌ TRADITIE ALS EXCUS VOOR GRENSSCHENDING:\n" +
    "  'Een echte sub mag niet twijfelen.' Onzin! Dat is gewoon manipulatie.\n\n" +
    "• ❌ DE ONAANTASTBARE VETERAAN:\n" +
    "  Jarenlange ervaring of titels mogen nooit een vrijbrief zijn om kritiek te smoren.\n\n" +
    "• ❌ DE DOOFPOTCULTUUR:\n" +
    "  Geen geheimhouding over misstanden; ethiek en veiligheid staan altijd boven reputatie.",
    "Hans: Bullshit is gewoon bullshit, hoe oud de traditie ook is. Misbruik is misbruik. Echte kracht heeft geen doofpotten nodig."
  );

  // Slide 16: Zaalvragen
  addContentSlide(
    "Prikkelende stellingen voor de zaal",
    "1. \"Kan een BDSM-relatie bloeien zónder rituelen of protocollen?\"\n\n" +
    "2. \"Is een BDSM-contract een bewijs van vertrouwen, of juist een symptoom van wantrouwen?\"\n\n" +
    "3. \"Moet de hanky code terugkeren op feesten, of zijn we daar te digitaal voor geworden?\"\n\n" +
    "4. \"Waar ligt voor jou de grens tussen waardevol mentorschap en ongepaste beïnvloeding?\"",
    "Hans: Nu ben ik heel benieuwd naar jullie ervaringen. Wie gebruikt er rituelen in het spel? Helpt het je, of voelt het soms als een toneelstukje?"
  );

  // Slide 17: Het Kompas
  addContentSlide(
    "Samenvatting: het minimalistische kompas",
    "HET VIER-PUNTEN KOMPAS VOOR MODERN MEESTERSCHAP:\n\n" +
    "🧭 NOORD: Autonomie & Consent (geen traditie zonder doorlopende keuzevrijheid)\n\n" +
    "🧭 OOST: Vakmanschap & Kennis (ken je materialen, technieken en fysiologie)\n\n" +
    "🧭 ZUID: De Twee O's (Overgave ontmoet Ontferming)\n\n" +
    "🧭 WEST: Eerlijkheid & Nazorg (fouten herstellen en het afscheid eren)",
    "Hans: Als je één ding meeneemt: je hebt geen kasteel of honderd regels nodig. Je hebt respect, vakmanschap en de moed nodig om elkaar echt in de ogen te kijken."
  );

  // Slide 18: Afronding
  addContentSlide(
    "Blijf nieuwsgierig. Speel met aandacht.",
    "Hans West | Kink-Aware Coach\n" +
    "Website: KinkindeRelatie.nl\n" +
    "Podcast: SinQuest (wekelijks op Spotify)\n" +
    "Vragen & Coaching: KinkindeRelatie@gmail.com\n\n" +
    "Verdiepende bronnen in de Kennisbank:\n" +
    "• [19: Oldskool BDSM-waarden, rituelen en gebruiken]\n" +
    "• [08: BDSM als co-creatie: de twee driehoeken en de twee O's]\n" +
    "• [09: Het verbreken van D/s: de-collaring en herstructurering]",
    "Hans: Dank jullie wel voor jullie openheid en aandacht vanavond. Blijf onderzoeken, blijf spelen, en wees zuinig op elkaars zenuwstelsel."
  );

  Logger.log("Presentatie succesvol aangemaakt: " + deck.getUrl());
}
