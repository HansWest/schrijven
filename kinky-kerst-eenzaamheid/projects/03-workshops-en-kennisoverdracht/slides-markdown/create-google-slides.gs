/**
 * Google Apps Script om automatisch Google Slides presentaties aan te maken
 * voor De West-Sessies (Modules 1 t/m 4) in jouw Google Drive.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga naar https://script.google.com/
 * 2. Klik op "Nieuw project"
 * 3. Plak deze code in de editor
 * 4. Kies de gewenste functie (bijv. createModule1Slides) en klik op "Uitvoeren" (Run)
 * 5. Geef eenmalig toestemming -> De Google Slides presentatie staat direct in je Google Drive!
 */

function createModule1Slides() {
  var title = "De West-Sessies • Module 1: Het Rustige Hoofd & Zelf-Aftercare";
  var deck = SlidesApp.create(title);
  
  // Slide 1: Titel
  var slide1 = deck.getSlides()[0];
  slide1.getBackground().setSolidFill("#16191D");
  var tBox = slide1.insertTextBox("DE WEST-SESSIES • MODULE 1\nHet Rustige Hoofd & Zelf-Aftercare", 50, 80, 620, 150);
  tBox.getText().getTextStyle().setForegroundColor("#F1F5F9").setFontSize(26).setBold(true);
  
  var subBox = slide1.insertTextBox("Wat doe je als de stilte toeslaat? Over biochemie, zenuwstelsel en bedding.\nHost: Hans West | Kink-Aware Coach\n\nHuisregels: Camera optioneel • Microfoon gedempt • Pseudoniem toegestaan", 50, 240, 620, 120);
  subBox.getText().getTextStyle().setForegroundColor("#94A3B8").setFontSize(13);

  // Helper om een donkere slide toe te voegen
  function addDarkSlide(slideTitle, bulletPoints, speakerNote) {
    var s = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    s.getBackground().setSolidFill("#16191D");
    
    // Header
    var hBox = s.insertTextBox(slideTitle, 50, 30, 620, 60);
    hBox.getText().getTextStyle().setForegroundColor("#F59E0B").setFontSize(20).setBold(true);
    
    // Body
    var bBox = s.insertTextBox(bulletPoints.join("\n\n"), 50, 100, 620, 260);
    bBox.getText().getTextStyle().setForegroundColor("#F1F5F9").setFontSize(13);
    
    // Speaker notes
    if (speakerNote) {
      s.getNotesPage().getSpeakerNotesShape().getText().setText(speakerNote);
    }
    return s;
  }

  // Slide 2: WEL & NIET
  addDarkSlide(
    "Wat we Vandaag WEL en NIET gaan doen",
    [
      "• WEL: De biochemische crash (drop) begrijpen vanuit neurowetenschap",
      "• WEL: Een persoonlijk somatisch Noodprotocol bouwen voor sombere avonden",
      "• WEL: Het zenuwstelsel reguleren met concrete aardingsoefeningen",
      "----------------------------------------------------------------",
      "• NIET: Zweverig gedoe of verplichte emotionele ontboezemingen",
      "• NIET: Verplichte camera-interactie (joggingbroek & thee is 100% prima)",
      "• NIET: Valse hoop verkopen met willekeurige online flirts"
    ],
    "Hans: Welkom allemaal. We gaan nuchter naar ons brein en lijf kijken. Geen kleffe praatjes."
  );

  // Slide 3: De Crash na de Prikkel
  addDarkSlide(
    "De Crash na de Prikkel: Wat is 'Drop'?",
    [
      "1. Subdrop (Na Overgave): Biochemische uitputting. Endorfine & dopamine zijn opgebruikt (leegte, huilerigheid).",
      "2. Domdrop (Na Sturen): Verantwoordelijkheids-dip. Uitputting door urenlange scherpe focus, zorg en leiding.",
      "3. Eenzaamheids-Drop: Hersenstam interpreteert stilte en isolement als levensgevaar.",
      "\nKERNINZICHT: Drop is geen bewijs dat je labiel bent; het is puur fysiologie die bedding nodig heeft."
    ],
    "Hans: Drop vecht je niet weg; je geeft het een zachte landing tot de storm voorbijtrekt."
  );

  // Slide 4: De Mythe van de 'Redder'
  addDarkSlide(
    "De Mythe van de 'Redder' & Zelfredzaamheid",
    [
      "• Amatonormatieve Druk: De mythe dat 'alleen een relatie' jou heel kan maken.",
      "• De Valkuil van Honger: 'Wie honger heeft door eenzaamheid, eet soms bedorven voedsel.'",
      "• Zelfredzaamheid als Vrijheid: Jezelf kunnen opvangen is het fundament onder elke veilige relatie."
    ],
    "Hans: Pas als je alleen kunt zijn zonder jezelf te verlaten, kun je veilig verbinden met een ander."
  );

  // Slide 5: Het Noodprotocol
  addDarkSlide(
    "Het Noodprotocol voor Sombere Avonden (4 Pijlers)",
    [
      "1. Fysieke Bedding: Verzwaringsdeken, warme douche/kruik, voeten op de vloer.",
      "2. Biochemie: Eiwitrijk warm eten, hydratatie, geen alcohol-/suikerpieken.",
      "3. Prikkelfilter: Vaste veilige comfort-serie; datingapps sluiten na 22:00 uur.",
      "4. Sociaal Vangnet: 2 vrienden die je een vooraf afgesproken codebericht mag sturen."
    ],
    "Hans: Dit protocol spreek je met jezelf af vóórdat de storm begint."
  );

  // Slide 6: Werkvorm
  addDarkSlide(
    "Werkvorm: Jouw Persoonlijke Kwadranten (15 min)",
    [
      "Neem even rustig pen en papier voor jezelf:",
      "1. Wat zijn jouw 2 grootste fysieke zintuig-ankers? (Geur, trui, thee, muziek)",
      "2. Wie zijn jouw 2 schaamteloze noodcontacten?",
      "3. Wat is jouw digitale avondklok? Welke apps gaan onverbiddelijk op slot?"
    ],
    "Hans: Schrijf dit rustig op voor jezelf. Dit is voor jouw eigen gereedschapskist."
  );

  // Slide 7: Somatische Landing
  addDarkSlide(
    "Somatische Landing: Zenuwstelsel Aarden (3 Minuten)",
    [
      "1. Voetcontact: Zet beide voetzolen plat op de vloer. Voel de zwaartekracht.",
      "2. Kaak & Schouders: Laat je ondertanden los van je boventanden. Schouders omlaag.",
      "3. Verlengde Uitademing: 4 tellen rustig in... en 6 tot 7 tellen zachtjes uit.",
      "4. Oriëntatie: Noem in jezelf 3 voorwerpen in de kamer met een neutrale kleur.",
      "\n'Je bent veilig in je eigen lijf. Er is op dit moment nergens gevaar.'"
    ],
    "Hans: We gaan nu samen ademen. Ogen dicht of staar naar een vast punt. Adem in..."
  );

  // Slide 8: Afsluiting
  addDarkSlide(
    "Afsluiting & De West-Sessies",
    [
      "• Volgende sessie: Module 2: Onderhandelen & Grenzen Zonder Schaamte (over 2 weken)",
      "• Codewoord voor luisteraars: WESTSESSIES (slechts € 4,50 no-show borg)",
      "• Noodhulplijnen (24/7): De Luisterlijn (088-0767000) | 113 Zelfmoordpreventie (0800-0113)",
      "\n'Blijf trouw aan je eigen grenzen, zorg goed voor jezelf, en tot de volgende West-Sessie!'"
    ],
    "Hans: Dank voor je openheid en aanwezigheid. Tot bij De West-Sessies!"
  );

  Logger.log("Google Slides presentatie succesvol aangemaakt: " + deck.getUrl());
}
