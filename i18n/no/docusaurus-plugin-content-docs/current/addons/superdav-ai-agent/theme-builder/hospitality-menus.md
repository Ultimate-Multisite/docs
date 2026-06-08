---
title: Restaurantmenyer
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Restaurantmenyer

Funksjonen **Restaurantmenyer** lar Theme Builder generere og innebygge strukturerte menyer for mat og drikke direkte på WordPress-nettstedet ditt.

## Oversikt

Theme Builder kan nå lage profesjonelle, strukturerte menysider for bedrifter innen hotell- og restaurantbransjen, inkludert restauranter, kafeer, barer og cateringfirmaer. Disse menyene er fullstendig integrert i nettstedets design og er enkle å oppdatere og administrere.

## Støttede bransjetyper

- **Restauranter** — menyer for fullservice-måltider
- **Kafeer** — kaffe- og lettmatmenyer
- **Barer og lounger** — drikkevare- og forretningsmenyer
- **Bakerier** — kake- og brødmenyer
- **Cateringfirmaer** — menyalternativer for arrangementer
- **Food Trucks** — mobile matservice-menyer
- **Bryggerier og vinhandlerier** — drikkevaremenyer med beskrivelser

## Menystruktur

### Menykategorier

Menyer er organisert i kategorier:

- **Forretter** — småretter og starters
- **Hovedretter** — hovedmåltider
- **Tilbehør** — sideretter og grønnsaker
- **Dessert** — søte delikatesser
- **Drikkevarer** — drikke (alkoholiske og ikke-alkoholiske)
- **Spesialiteter** — daglige eller sesongbaserte spesialiteter

### Format for menyvare

Hver menyvare inkluderer:

```json
{
  "name": "Grillet laks",
  "description": "Fersk atlanterhavslaks med sitron-smørsaus",
  "price": "$24.95",
  "dietary_info": ["Glutenfri", "Høyt proteininnhold"],
  "allergens": ["Fisk"],
  "availability": "Daglig"
}
```

#### Felt for varer

| Felt | Type | Beskrivelse |
|-------|------|-------------|
| `name` | string | Rettens eller drikkevarens navn |
| `description` | string | Detaljert beskrivelse av varen |
| `price` | string | Pris (formatert med valuta) |
| `dietary_info` | array | Kostholdsegenskaper (Vegan, Glutenfri, etc.) |
| `allergens` | array | Vanlige allergener (Nøtter, Skalldyr, etc.) |
| `availability` | string | Når varen er tilgjengelig (Daglig, Sesongbasert, etc.) |

## Oppretting av restaurantmenyer

### Trinn 1: Oppgi menyinformasjon

Fortell Theme Builder om menyen din:

```
Lag en restaurantmeny for min italienske restaurant med forretter,
pastaretter, hovedretter og desserter. Inkluder priser og beskrivelser.
```

### Trinn 2: Theme Builder genererer menyen

Theme Builder:

1. Oppretter en strukturert menyside
2. Designer den for å matche nettstedets tema
3. Organiserer varene i kategorier
4. Formaterer priser og beskrivelser
5. Legger til informasjon om kosthold og allergener

### Trinn 3: Gjennomgang og tilpasning

Du kan:

1. Redigere menyvarer og priser
2. Legge til eller fjerne kategorier
3. Omorganisere varer innenfor kategorier
4. Oppdatere beskrivelser og kostholdsinformasjon
5. Justere styling og layout

## Menyvisningsalternativer

### Full meny-side

En dedikert side som viser hele menyen din:

- Organisert etter kategori
- Søkbar og filtrerbar
- Utformet for utskrift
- Mobilvennlig design

### Meny-widget

Innebyg menyseksjoner på andre sider:

- Utvalgte varer på forsiden
- Dagens spesialiteter i sidefeltet
- Drikkevaremeny på bar-siden
- Dessertutstilling i bunnteksten

### Meny-PDF

Generer en nedlastbar PDF-meny:

- Profesjonell utforming
- Kvalitet klar for utskrift
- Inkluderer bilder og beskrivelser
- Enkelt å dele og sende via e-post

## Kosthold og allergener

### Kostholdsegenskaper

Marker varer med kostholdsinformasjon:

- **Vegan** — ingen animalske produkter
- **Vegetarisk** — ingen kjøtt
- **Glutenfri** — trygt for cøliaki
- **Meierifri** — ingen melkeprodukter
- **Nøttefri** — ingen tre- eller jordnøtter
- **Lavkarbo** — redusert karbohydrater
- **Høyt proteininnhold** — proteinrikt

### Allergenadvarsler

Inkluder vanlige allergener:

- **Nøtter** — tre- og jordnøtter
- **Skalldyr** — krepsdyr og bløtdyr
- **Fisk** — alle fiskearter
- **Meieriprodukter** — melk og melkeprodukter
- **Egg** — kyllingegg
- **Soyabønner** — soyaprodukter
- **Gluten** — hvete og glutenholdige korn
- **Sesam** — sesamfrø og olje

## Menyadministrasjon

### Oppdatering av priser

Oppdater menypriser enkelt:

1. Naviger til meny-siden
2. Klikk på "Rediger meny"
3. Oppdater priser for varene
4. Lagre endringene
5. Endringene vises umiddelbart på nettstedet ditt

### Legge til sesongvarer

Opprett sesongvariasjoner av menyen:

1. Opprett en ny menyversjon
2. Legg til sesongvarer
3. Marker varer som "Sesongbasert"
4. Sett tidsplan for tilgjengelighet
5. Vises automatisk i sesongen

### Administrere spesialiteter

Vis daglige eller ukentlige spesialiteter:

1. Opprett en "Spesialiteter"-kategori
2. Legg til varer med tilgjengelighetsdatoer
3. Fremhev spesialiteter på forsiden
4. Oppdater daglig eller ukentlig
5. Arkiver gamle spesialiteter

## Integrasjon med Theme Builder

Når du bruker Theme Builder for hotell- og restaurantnettsteder:

1. **Automatisk gjenkjenning av menyer** — identifiserer om du driver med mat/drikke
2. **Opprettelse av menysider** — genererer profesjonelle menysider
3. **Designmatch** — menyene matcher nettstedets tema
4. **Mobiloptimalisering** — menyene vises vakkert på telefoner
5. **SEO-optimalisering** — menyene er vennlige for søkemotorer

## Beste praksiser

### Menyutforming

- **Klar organisering** — logisk kategoristruktur
- **Lesbare beskrivelser** — appetittvekkende og informative
- **Konsistent prising** — tydelig valuta og formatering
- **Profesjonelle bilder** — høykvalitets matbilder
- **Hvitt rom** — ikke overfyll siden

### Innhold

- **Nøyaktige beskrivelser** — beskriv varene nøyaktig
- **Fremhev spesialiteter** — få spesialitetene til å skinne
- **Inkluder allergener** — list alltid opp allergener
- **Oppdater regelmessig** — hold priser og varer oppdatert
- **Bruk appetittvekkende språk** — få varene til å høres deilige ut

### Tilgjengelighet

- **Lesbare fonter** — bruk klare, lettleste skrifttyper
- **Tilstrekkelig kontrast** — sørg for at teksten er lesbar
- **Kostholdsmærker** — merk kostholdsalternativer tydelig
- **Allergenadvarsler** — vis allergener fremtredende
- **Mobilvennlig** — test på alle enheter

## Eksempler

### Restaurantmenystruktur

```
Forretter
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pastaretter
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Hovedretter
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Dessert
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafe-menystruktur

```
Kaffe
├── Espresso
├── Cappuccino
└── Latte

Kaker
├── Croissants
├── Muffins
└── Scones

Smørbrød
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarisk wrap
```

## Relaterte funksjoner

- [Create Menu](../abilities/create-menu.md) — opprett navigasjonsmenyer
- [Design Direction](./design-direction.md) — tilpass nettstedets design
- [Discovery Interview](./discovery-interview.md) — planlegg nettstedstrukturen din
