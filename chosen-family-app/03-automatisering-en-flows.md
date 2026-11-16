# Automatisering en digitale flows: rust door voorspelbaarheid

> *"Technologie moet niet proberen om menselijke vriendschap te vervangen, maar moet de logistieke en sociale spanning wegnemen zodat mensen ontspannen kunnen aankomen."*

---

## 1. Wat automatiseert de app (en wat juist niet)?

De app automatiseert **uitsluitend de randvoorwaarden**: de logistiek, de agendaplanning, de informatieve voorbereiding en de nazorg-check-ins.  
De app automatiseert **nooit** de emotionele beoordeling, het oplossen van conflicten of sancties.

---

## 2. De vier kernstromen van automatisering

### A. Geautomatiseerde planning en capaciteitsbewaking
- **Beschikbaarheids-matching:** Deelnemers voeren hun wekelijkse beschikbare dagdelen in. De app stelt automatisch tijdslots voor wanneer minimaal 3 en maximaal 5 kringleden kunnen.
- **Micro-groepsgrootte:** Als een kring vol zit (max. 5 personen), sluit de aanmelding automatisch. Dit voorkomt dat een rustige bijeenkomst onverwacht uitgroeit tot een overprikkelende menigte.
- **Kringbevestiging:** Zodra de drempel van 3 deelnemers + host is bereikt, wordt de bijeenkomst automatisch vastgelegd.

### B. Herinneringen en voorbereidingsinformatie (voorspelbaarheid eerst)
Voor veel mensen (en in het bijzonder mensen met autisme, ADHD of sociale angst) veroorzaakt onzekerheid over de fysieke locatie of het verloop acute stress. De app stuurt geautomatiseerd:

1. **T-48 Uur: Het Voorbereidingsdossier**
   - Exact adres en looproute vanaf OV of parkeerplek.
   - Foto van de voordeur en ingang (zodat men weet hoe het eruitziet).
   - Naam en foto van de host.
   - Deelnemerslijst (alleen voornaam en interesses).
   - Praktische info: *"Moet ik iets meenemen? Is er koffie/thee? Wat zijn de stiltezones?"*
2. **T-2 Uur: De Prikkelarme Check**
   - Korte herinnering.
   - **De 'Geen-Schuldgevoel Afmeldknop':** *"Lukt het vandaag toch niet wegens overprikkeling of ziekte? Geen probleem, meld je met één klik af zodat de groep weet dat ze niet op je hoeven te wachten."* Dit ontneemt de schaamte rondom last-minute afzeggingen.

### C. Basisinformatie en huisregel-micro-interacties
- Bij elke inschrijving toont de app een vriendelijke, visuele herinnering van de 3 kernwaarden: *Vrijheid om nee te zeggen, geen ongevraagde aanraking, geen reddersrol.*
- Geen juridische lappen tekst van 40 pagina's, maar begrijpelijke micro-animaties of illustraties.

---

## 3. De privé check-in flow (nazorg na afloop)

Na afloop van een ontmoeting stuurt de app automatisch een **privé check-in**.

### Timing: respecteer de decompressiezone
- De check-in wordt **niet direct bij afloop** gestuurd (wanneer mensen nog reizen of overprikkeld zijn), maar **3 tot 4 uur later** of de **volgende ochtend om 10:00 uur**.

### De vragenlijst (kort, veilig en binnen 60 seconden ingevuld):
1. **Veiligheid & Respect:**  
   *"Voelde je je veilig, gerespecteerd en op je gemak tijdens de ontmoeting?"*  
   `[Ja, helemaal] - [Redelijk] - [Nee, niet echt] - [Er gebeurde iets naars]`
2. **Grenzen & Afspraken:**  
   *"Werden jouw grenzen en de huisregels gerespecteerd?"*  
   `[Ja] - [Twijfelachtig] - [Nee]`
3. **Vervolgwens:**  
   *"Zou je opnieuw willen deelnemen aan een activiteit met deze groep?"*  
   `[Ja, graag] - [Misschien later] - [Liever een andere groep]`
4. **Signaleringsoptie (Escalatielink):**  
   *"Wil je vertrouwelijk iets doorgeven aan een menselijke moderator?"*  
   `[Nee, alles oké] - [Ja, neem contact met mij op]`

---

## 4. Wat gebeurt er met de data?

- De antwoorden zijn **strikt vertrouwelijk**: individuele antwoorden worden nooit getoond aan andere deelnemers of aan de host.
- Als een deelnemer kiest voor *"Er gebeurde iets naars"* of *"Ja, neem contact met mij op"*, wordt er **direct een ticket gegenereerd voor een menselijke moderator**.
- **Buiten Kantooruren:** Als dit signaal 's avonds of in het weekend wordt verzonden, toont de app direct het **acute crisisbanner met rechtstreekse 0800-nummers** (zoals *113 Zelfmoordpreventie 0800-0113*, *De Luisterlijn 0800-0767*, *Veilig Thuis 0800-2000* of *112* bij acuut gevaar), zodat niemand met een acute noodkreet blijft wachten tot de volgende ochtend.
- De geaggregeerde data wordt gebruikt voor de [Kwalitatieve Evaluatie](file:///Users/mbp13/Programmeren/schrijven/chosen-family-app/05-evaluatie-en-succesindicatoren.md).
