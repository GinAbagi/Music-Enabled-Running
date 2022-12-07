# **The Industry Project**

# Inhoudsopgave

- Introductie
- Installatie
- Uitleg
- Download links en instructie
- Technologies
- Functionaliteiten
- verdere instructies
- Feedback

---

## **Introductie**

Het industry project hebben wij uitgevoerd met een groepje van 6 personen. De leden van dit groepje zijn Raf Schapendonk, Stan Wilmsen, Demi Laming, Midas Maas, Syze Hendriks en Gin Abagi. Voor het industry project zijn wij aan de slag gegaan met het project "Music Enabled Running". Music Enabled Running is een bestaand project dat zich richt op het verminderen van blussures bij beginnende hardlopers doormiddel van muziek. De muziek wordt bepaald op basis van data die wordt verzameld tijdens het lopen.

De applicatie was vooral gericht op het verzamelen van data van de hardlopers en de muziek suggesties die hier aan zijn gekoppeld. Wij hebben ons daarom gefocust op het creëren van een goede UI en UX en de app meer te richten op de gebruikers.

---

## **Installatie**

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
---

## **Uitleg**

Aan het begin van het industry project hebben we een debriefing gekregen over Music Enabled Running. In de debriefing werd er voor ons duidelijk wat er nog moest gebeuren voor de app en hoe het momenteel was opgebouwd. De applicatie was opgebouwd uit een IOS shell die werd gebruikt binnen een webapp, ook was de User Interface was nog niet gebruiksvriendelijk. Hier lagen voor ons kansen voor verbetering.

Op basis van de opracht hebben wij in grote lijnen gekeken wat ons te doen stond. De belangrijkste taken waren het verbeteren van de UI en UX en het verbeteren van de front-end code. De groep hebben we verdeeld over twee groepen, een design groep en een development groep.

Om beginnende hardlopers te helpen met het voorkomen van blessures hebben wij Pearrun bedacht. Wij hebben het concept van Music Enabled Running in een nieuw jasje gestoken door een gebruiksvriendelijke app te maken met een frisse look and feel.

In de applicatie kunnen de hardlopers inloggen met hun profiel en starten aan hun hardloopsessie. De applicatie geeft de hardloper de mogelijkheid om te rennen op muziek via een spotify koppeling. Op basis van opgehaalde data tijdens de run zal er een lijst met persoonlijke muziek suggesties gemaakt worden. Deze muziek is gebaseerd op muziek waar je het beste op hebt gelopen, en dus het minste risico voor een blessure bij hebt.

Tijdens de run zal de hardloper worden ondersteund door realtime feedback. Deze feedback is gebaseerd op de looptechniek van de renner en zal met een positieve insteek verbeterpunten aangeven of complimenten. De contact time, strike type en symetrie worden gemeten voor de feedback.

Naast de realtime feedback is er een puntensysteem tijdens de run. De punten worden ook berekend op basis van de contact time, strike type en symetrie. Deze hebben allen een ingestelde ideale waarde. Hoe dichter de renner bij deze ideale waarde zit hoe meer punten er worden gegeven. Tijdens de run worden alle punten bij elkaar opgeteld.

Na de run zijn standaard statistieken te zien van de run zoals de tijd, afstand en stappen. Wat uniek is bij Pearrun is dat het aantal behaalde punten terug te zien zijn als pearpoints. De liedjes die zijn geluisterd tijdens de run worden in een ranglijst onderverdeeld op basis van de aantal behaalde pear points. Hoe meer punten hoe beter je hebt gelopen op het liedje. Deze zal dan hoger staan in de ranglijst met punten.

---

## **Download links en instructies**

In [Trello](https://trello.com/b/LK4Kd7Ym/music-enabled-running) hebben we onze planning bij gehouden.

> **Gitlab Clone link**

De repository is te clonen op onze [GIT](https://git.fhict.nl/I447972/music-enabled-running.git)

---

## Technologies

Project is created with:

- VUE.js
- VUE Libraries
- HTML
- CSS (Tailwind)
- JavaScript

---

## **Functionaliteiten**

In de PWA hebben we gebruik gemaakt van een aantal functies en methodes om data op te halen of juist data weg te sturen naar een database.

- Vue: We hebben een aantal componenten gemaakt die we vaker aanroepen om code duplicatie te voorkomen. Ook hebben we libraries gebruikt voor de grafieken, carrousel en firestore.

- Login: Op de login pagina hebben we Firebase gebruikt om een gebruiker in te loggen. De gebruiker is vooralsnog niet gekoppeld aan de data van de lopen.
- History: Op de history pagina hebben we Fetch calls gemaakt naar de database. De data wordt weergegeven in de aantal runs die gemaakt zijn, het aantal peren dat verdient is, het beste liedje per run en de locatie van de loop. 
- Dashboard: Op de dasboard pagina hebben we gebruik gemaakt van de Spotify API om liedjes af te spelen in de PWA. Ook wordt er gebruik gemaakt van life-feedback tijdens de run en het nummer. Ook wordt er een timer bijgehouden van de loop. 
De sensoren van het project zouden nu data kunnen zenden naar de app. Voor nu hebben we mock-data gebruikt. 

---

## **Verdere uitwerking van het concept**

In de verdere uitwerking van ons project zouden wij graag werken aan de uitwerking van de app voor een smartwatch. Om een beeld te kunnen schetsen hoe wij dit voor ons zien hebben we de designs uitgewerkt voor de smartwatch. Deze designs zijn terug te zien in [XD](https://xd.adobe.com/view/4ba69358-f91c-44c2-9273-06aefd146bb0-1ef5/?fullscreen&hints=off).

---

## **Feedback**

Wij ontvangen graag feedback op het gemaakte werk. Feedback kan gegeven worden via de issues tab op [GIT](https://git.fhict.nl/I447972/music-enabled-running/-/issues), op Canvas of via Microsoft Teams.

Raf Schapendonk, Stan Wilmsen, Demi Laming, Midas Maas, Syze Hendriks en Gin Abagi :v:
