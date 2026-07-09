---
title: Menuer til hotel- og restaurationsbranchen
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality-menuer

Funktionen **Hospitality-menuer** gør det muligt for Theme Builder at generere og indlejre strukturerede mad- og drikkemenu-sider direkte på dit WordPress-site.

## Oversigt

Theme Builder kan nu oprette professionelle, strukturerede menu-sider til hospitality-virksomheder, herunder restauranter, caféer, barer og catering-tjenester. Disse menuer er fuldt integreret i dit sites design og kan nemt opdateres og administreres.

## Understøttede hospitality-typer

- **Restauranter** — menuer til spisesteder med fuld service
- **Caféer** — kaffe- og lette måltidsmenuer
- **Barer og lounger** — drikkevare- og forretmenuer
- **Bagerier** — kage- og brødmenuer
- **Catering-tjenester** — menumuligheder til events
- **Foodtrucks** — menuer til mobil madservice
- **Bryggerier og vingårde** — drikkevaremenuer med beskrivelser

## Menustruktur

### Menukategorier

Menuer er organiseret i kategorier:

- **Forretter** — starters og små retter
- **Hovedretter** — hovedmåltider
- **Tilbehør** — tilbehør og grøntsager
- **Desserter** — søde lækkerier
- **Drikkevarer** — drikke (alkoholiske og ikke-alkoholiske)
- **Tilbud** — daglige eller sæsonbestemte specialiteter

### Format for menupunkt

Hvert menupunkt indeholder:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Felter for punkt

| Felt | Type | Beskrivelse |
|-------|------|-------------|
| `name` | string | Ret- eller drikkevarenavn |
| `description` | string | Detaljeret beskrivelse af punktet |
| `price` | string | Pris (formateret med valuta) |
| `dietary_info` | array | Kostattributter (vegansk, glutenfri osv.) |
| `allergens` | array | Almindelige allergener (nødder, skaldyr osv.) |
| `availability` | string | Hvornår tilgængelig (dagligt, sæsonbestemt osv.) |

## Oprettelse af hospitality-menuer

### Trin 1: Angiv menuoplysninger

Fortæl Theme Builder om din menu:

```
Opret en restaurantmenu til min italienske restaurant med forretter,
pastaretter, hovedretter og desserter. Medtag priser og beskrivelser.
```

### Trin 2: Theme Builder genererer menuen

Theme Builder:

1. Opretter en struktureret menu-side
2. Designer den, så den matcher dit sites theme
3. Organiserer punkter i kategorier
4. Formaterer priser og beskrivelser
5. Tilføjer kost- og allergenoplysninger

### Trin 3: Gennemgå og tilpas

Du kan:

1. Redigere menupunkter og priser
2. Tilføje eller fjerne kategorier
3. Ændre rækkefølgen af punkter inden for kategorier
4. Opdatere beskrivelser og kostoplysninger
5. Justere styling og layout

## Visningsmuligheder for menu

### Fuld menu-side

En dedikeret side, der viser hele din menu:

- Organiseret efter kategori
- Søgbar og filtrerbar
- Udskriftsvenligt layout
- Mobilresponsivt design

### Menu-widget

Indlejr menuafsnit på andre sider:

- Fremhævede punkter på forsiden
- Dagens specialiteter i sidebar
- Drikkevaremenu på barsiden
- Dessertudstilling i footer

### Menu-PDF

Generer en downloadbar PDF-menu:

- Professionel formatering
- Udskriftsklar kvalitet
- Indeholder billeder og beskrivelser
- Nem at dele og sende via e-mail

## Kost- og allergenoplysninger

### Kostattributter

Marker punkter med kostoplysninger:

- **Vegansk** — ingen animalske produkter
- **Vegetarisk** — intet kød
- **Glutenfri** — sikker ved cøliaki
- **Mælkefri** — ingen mælkeprodukter
- **Nøddefri** — ingen trænødder eller jordnødder
- **Lavt kulhydratindhold** — reduceret kulhydratindhold
- **Højt proteinindhold** — proteinrig

### Allergenadvarsler

Medtag almindelige allergener:

- **Nødder** — trænødder og jordnødder
- **Skaldyr** — krebsdyr og bløddyr
- **Fisk** — alle fiskearter
- **Mejeri** — mælk og mælkeprodukter
- **Æg** — hønseæg
- **Soja** — sojaprodukter
- **Gluten** — hvede og glutenholdige kornsorter
- **Sesam** — sesamfrø og olie

## Menustyring

### Opdatering af priser

Opdater nemt menupriser:

1. Gå til menu-siden
2. Klik på "Rediger menu"
3. Opdater priser for punkter
4. Gem ændringer
5. Ændringer vises straks på dit site

### Tilføjelse af sæsonbestemte punkter

Opret sæsonbestemte menuvariationer:

1. Opret en ny menu-version
2. Tilføj sæsonbestemte punkter
3. Marker punkter som "Sæsonbestemt"
4. Planlæg tilgængelighedsdatoer
5. Vis automatisk i sæsonen

### Administration af specialiteter

Vis daglige eller ugentlige specialiteter:

1. Opret en kategori med "Specialiteter"
2. Tilføj punkter med tilgængelighedsdatoer
3. Fremhæv specialiteter på forsiden
4. Opdater dagligt eller ugentligt
5. Arkivér gamle specialiteter

## Integration med Theme Builder

Når du bruger Theme Builder til hospitality-sites:

1. **Automatisk menugenkenkendelse** — identificerer, om du er en mad-/drikkevarevirksomhed
2. **Oprettelse af menu-side** — genererer professionelle menu-sider
3. **Designmatchning** — menuer matcher dit sites theme
4. **Mobiloptimering** — menuer vises smukt på telefoner
5. **SEO-optimering** — menuer er søgemaskinevenlige

## Bedste praksis

### Menudesign

- **Klar organisering** — logisk kategoristruktur
- **Læsbare beskrivelser** — appetitvækkende og informative
- **Konsekvent prissætning** — tydelig valuta og formatering
- **Professionelle fotos** — madbilleder af høj kvalitet
- **Luft** — overfyld ikke siden

### Indhold

- **Præcise beskrivelser** — beskriv punkter præcist
- **Fremhæv specialiteter** — få specialiteter til at skille sig ud
- **Medtag allergener** — angiv altid allergener
- **Opdater regelmæssigt** — hold priser og punkter aktuelle
- **Brug appetitvækkende sprog** — få punkter til at lyde lækre

### Tilgængelighed

- **Læsbare skrifttyper** — brug klare, letlæselige skrifttyper
- **Tilstrækkelig kontrast** — sørg for, at teksten er læsbar
- **Kostetiketter** — marker tydeligt kostmuligheder
- **Allergenadvarsler** — vis allergener tydeligt
- **Mobilvenlig** — test på alle enheder

## Eksempler

### Restaurantmenustruktur

```
Forretter
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese-salat

Pastaretter
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Hovedretter
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserter
├── Tiramisu
├── Panna Cotta
└── Udvalg af gelato
```

### Cafemenu-struktur

```
Kaffe
├── Espresso
├── Cappuccino
└── Latte

Bagværk
├── Croissanter
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Røget kalkun-club
└── Vegetarisk wrap
```

## Relaterede funktioner

- [Opret menu](../abilities/create-menu.md) — opret navigationsmenuer
- [Designretning](./design-direction.md) — tilpas dit websteds design
- [Opdagelsesinterview](./discovery-interview.md) — planlæg dit websteds struktur
