/**
 * Google Apps Script om automatisch het Google Formulier "Kinky Kerst Coach" aan te maken.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga naar https://script.google.com/
 * 2. Klik op "Nieuw project"
 * 3. Plak onderstaande code in de editor
 * 4. Klik op "Uitvoeren" (Run) -> geef eenmalig toestemming
 * 5. Het formulier staat direct klaar in je Google Drive!
 */

function createKinkyKerstForm() {
  var formTitle = "Sinquest Kinky Kerst Coach: Brievenbus voor de Donkere Dagen (Anoniem)";
  var form = FormApp.create(formTitle);

  form.setDescription(
    "De feestdagen kunnen prachtig zijn, maar ook confronterend, leeg of eenzaam — zeker als je een kinky, BDSM- of alternatief liefdesleven hebt waar je omgeving niets van weet.\n\n" +
    "In de podcastserie 'Kinky Kerst Coach' rond Kerstmis 2026 behandelen we anonieme vragen, ervaringen en verhalen van luisteraars. Wil je iets kwijt dat je aan niemand anders kunt vertellen? Worstel je met schaamte, familieverwachtingen, verlatingsangst of het vinden van je plek in de scene? Deel het met ons.\n\n" +
    "Alles wordt 100% anoniem behandeld. We noemen nooit echte namen, woonplaatsen of herleidbare details. Je inzending verplicht je tot niets."
  );

  form.setConfirmationMessage(
    "Dank je wel voor je openhartigheid en vertrouwen. We behandelen je bericht met het grootste respect en uiterste discretie. Vergeet niet: je bent niet alleen.\n\n" +
    "Heb je nu direct behoefte aan een luisterend oor? De Luisterlijn is dag en nacht bereikbaar via 088-0767 000.\n" +
    "Bij acute crisis kun je 24/7 terecht bij 113 Zelfmoordpreventie via 0800-0113 of www.113.nl."
  );

  // Vraag 1: Schuilnaam
  var item1 = form.addTextItem();
  item1.setTitle("1. Hoe mogen we naar je verwijzen in de podcast?");
  item1.setHelpText("Bedenk een schuilnaam, pseudoniem of scene-naam (bijv. 'Kinkster uit het noorden' of 'Alex, sub, 26'). Vul NOOIT je echte volledige naam in.");
  item1.setRequired(true);

  // Vraag 2: Leeftijdscategorie
  var item2 = form.addMultipleChoiceItem();
  item2.setTitle("2. Wat is je leeftijdscategorie?");
  item2.setChoiceValues([
    "18 – 25 jaar",
    "26 – 35 jaar",
    "36 – 50 jaar",
    "50+ jaar",
    "Zeg ik liever niet"
  ]);
  item2.setRequired(false);

  // Vraag 3: Situatie
  var item3 = form.addCheckboxItem();
  item3.setTitle("3. Wat is jouw situatie rond de komende feestdagen?");
  item3.setHelpText("Selecteer alles wat voor jou van toepassing is.");
  item3.setChoiceValues([
    "Ik breng kerst alleen door en zie daar tegenop",
    "Ik moet kerst vieren met familie/vrienden waar ik een masker moet opzetten",
    "Ik ben single en mis een partner of D/s connectie",
    "Ik ben net begonnen met het ontdekken van kink en voel me onzeker / eenzaam",
    "Ik ervaar spanning of drop na eerdere ontmoetingen of relaties"
  ]);
  item3.showOtherOption(true);
  item3.setRequired(true);

  // Vraag 4: De Brief of Vraag
  var item4 = form.addParagraphTextItem();
  item4.setTitle("4. Jouw Brief of Vraag aan de Kinky Kerst Coach");
  item4.setHelpText("Vertel in je eigen woorden wat er speelt. Wat vind je lastig? Welke vraag heb je aan ons? Wat zou je graag willen horen op eenzame kerstavond?");
  item4.setRequired(true);

  // Vraag 5: Behoefte aan steun
  var item5 = form.addMultipleChoiceItem();
  item5.setTitle("5. Welke vorm van steun zou jou rond kerst het meest helpen?");
  item5.setChoiceValues([
    "Gewoon herkenning via de podcast (weten dat ik niet de enige ben)",
    "Een online laagdrempelige meetup op Derde Kerstdag (zonder camera/druk)",
    "Een praktische workshop over grenzen, veiligheid en ontmoeten in 2027",
    "Een buddy/maatje om samen een eerste keer naar een bijeenkomst of munch te gaan"
  ]);
  item5.setRequired(false);

  // Vraag 6: Toestemming
  var item6 = form.addCheckboxItem();
  item6.setTitle("6. Toestemming voor anoniem gebruik");
  item6.setChoiceValues([
    "Ik geef toestemming dat mijn ingestuurde vraag of verhaal geanonimiseerd en zonder herleidbare gegevens wordt voorgelezen en besproken in de Kinky Kerst Coach podcast."
  ]);
  item6.setRequired(true);

  Logger.log("Formulier succesvol aangemaakt!");
  Logger.log("Bewerkingslink: " + form.getEditUrl());
  Logger.log("Deellink voor publiek: " + form.getPublishedUrl());
}
