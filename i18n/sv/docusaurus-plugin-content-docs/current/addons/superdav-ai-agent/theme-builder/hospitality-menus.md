---
title: Restaurangmenyer
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastronomiska menyer

Funktionen **Gastronomiska menyer** låter Theme Builder generera och bädda in strukturerade menyer för mat och dryck direkt på din WordPress-sajt.

## Översikt {#overview}

Theme Builder kan nu skapa professionella, strukturerade menysidor för gastronyverksamheter, inklusive restauranger, kaféer, barer och cateringföretag. Dessa menyer är fullständigt integrerade i din sajt design och kan enkelt uppdateras och hanteras.

## Stödde gastronytyper {#supported-hospitality-types}

- **Restauranger** — menyer för fullservice-måltider
- **Caféer** — kaffe- och lättare frukostmenyer
- **Barer och lounge** — dryckes- och förrättmenyer
- **Bagerier** — konditori- och brödmenyer
- **Cateringföretag** — menyalternativ för evenemang
- **Food Trucks** — menyer för mobila matservice
- **Bryggerier och vingårdar** — dryckesmenyer med beskrivningar

## Menystruktur {#menu-structure}

### Menykategorier {#menu-categories}

Menyer organiseras i kategorier:

- **Förrätter** — starters och små rätter
- **Huvudrätter** — huvudmåltider
- **Tillbehör** — ackompanjemang och grönsaker
- **Dessert** — sötsaker
- **Drycker** — drycker (alkoholhaltiga och alkoholfria)
- **Specialiteter** — dagliga eller säsongsspecifika erbjudanden

### Menyobjektformat {#menu-item-format}

Varje menyobjekt inkluderar:

```json
{
  "name": "Grillad lax",
  "description": "Färsk atlantlax med citron-smörsås",
  "price": "$24.95",
  "dietary_info": ["Glutenfri", "Högt proteininnehåll"],
  "allergens": ["Fisk"],
  "availability": "Dagligt"
}
```

#### Fält för objekt {#item-fields}

| Fält | Typ | Beskrivning |
|-------|------|-------------|
| `name` | string | Rätt eller dryckesnamn |
| `description` | string | Detaljerad beskrivning av objektet |
| `price` | string | Pris (formaterat med valuta) |
| `dietary_info` | array | Kostråd (Vegan, Glutenfri, etc.) |
| `allergens` | array | Vanliga allergener (Nötter, Skaldjur, etc.) |
| `availability` | string | När det är tillgängligt (Dagligt, Säsongsvis, etc.) |

## Skapa gastronomiska menyer {#creating-hospitality-menus}

### Steg 1: Tillhandahåll menyinformation {#step-1-provide-menu-information}

Berätta för Theme Builder om din meny:

```
Skapa en restaurangmeny för mitt italienska restaurang med förrätter,
pastarätter, huvudrätter och desserter. Inkludera priser och beskrivningar.
```

### Steg 2: Theme Builder genererar menyn {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Skapar en strukturerad menysida
2. Designar den för att matcha din sajt tema
3. Organiserar objekten i kategorier
4. Formaterar priser och beskrivningar
5. Lägger till information om kost och allergener

### Steg 3: Granska och anpassa {#step-3-review-and-customize}

Du kan:

1. Redigera menyobjekt och priser
2. Lägga till eller ta bort kategorier
3. Omordna objekt inom kategorier
4. Uppdatera beskrivningar och kostinformation
5. Justera styling och layout

## Menyvisningsalternativ {#menu-display-options}

### Hela menysidan {#full-menu-page}

En dedikerad sida som visar hela din meny:

- Organiserad efter kategori
- Sökbar och filtrerbar
- Lätt att skriva ut
- Mobilanpassad design

### Menywidget {#menu-widget}

Bädda in menydelar på andra sidor:

- Utvalda objekt på startsidan
- Dagliga specialiteter i sidomenyn
- Dryckesmeny på bar-sidan
- Dessertutställning i sidfoten

### Meny-PDF {#menu-pdf}

Generera en nedladdningsbar PDF-meny:

- Professionell formatering
- Kvalitet redo för utskrift
- Inkluderar bilder och beskrivningar
- Lätt att dela och skicka via e-post

## Kost- och allergener {#dietary-and-allergen-information}

### Kostråd {#dietary-attributes}

Markera objekt med kostinformation:

- **Vegan** — inga animaliska produkter
- **Vegetariskt** — inget kött
- **Glutenfri** — säkert vid celiaki
- **Mjölkfri** — inga mejeriprodukter
- **Nötallergifri** — inga nötter eller jordnötter
- **Lågt kolhydratinnehåll** — reducerade kolhydrater
- **Högt proteininnehåll** — proteinrikt

### Allergenvarningar {#allergen-warnings}

Inkludera vanliga allergener:

- **Nötter** — nötter och jordnötter
- **Skaldjur** — kräftdjur och blötdjur
- **Fisk** — alla fiskarter
- **Mejeri** — mjölk och mejeriprodukter
- **Ägg** — kycklingägg
- **Soja** — sojaprodukter
- **Gluten** — vete och glutenhaltiga spannmål
- **Sesam** — sesamfrön och olja

## Hantering av menyer {#menu-management}

### Uppdatera priser {#updating-prices}

Uppdatera menypriserna enkelt:

1. Navigera till menysidan
2. Klicka på "Redigera meny"
3. Uppdatera priserna för objekten
4. Spara ändringar
5. Ändringarna visas omedelbart på din sajt

### Lägga till säsongsobjekt {#adding-seasonal-items}

Skapa säsongsvariationer av menyn:

1. Skapa en ny menyversion
2. Lägg till säsongsobjekt
3. Markera objekten som "Säsongsvis"
4. Schemalägg tillgänglighetsdatum
5. Visas automatiskt under säsongen

### Hantera specialiteter {#managing-specials}

Visa dagliga eller veckovisa specialiteter:

1. Skapa en kategori "Specialiteter"
2. Lägg till objekt med tillgänglighetsdatum
3. Markera specialiteter på startsidan
4. Uppdatera dagligen eller veckovis
5. Arkivera gamla specialiteter

## Integration med Theme Builder {#integration-with-theme-builder}

När du använder Theme Builder för gastronyverksamheter:

1. **Automatisk detektering av menyer** — identifierar om du är en mat-/dryckesverksamhet
2. **Skapande av menysida** — genererar professionella menysidor
3. **Designmatchning** — menyer matchar din sajt tema
4. **Mobiloptimering** — menyer visas vackert på telefoner
5. **SEO-optimering** — menyer är vänliga mot sökmotorer

## Bästa praxis {#best-practices}

### Menydesign {#menu-design}

- **Tydlig organisation** — logisk kategoristruktur
- **Läsbara beskrivningar** — aptitretande och informativa
- **Konsekvent prissättning** — tydlig valuta och formatering
- **Professionella foton** — högupplösta matbilder
- **Tomt utrymme** — överbelasta inte sidan

### Innehåll {#content}

- **Korrekta beskrivningar** — beskriv objekten exakt
- **Markera specialiteter** — låt specialiteterna sticka ut
- **Inkludera allergener** — lista alltid allergener
- **Uppdatera regelbundet** — håll priser och objekt aktuella
- **Använd aptitretande språk** — låt objekten låta goda

### Tillgänglighet {#accessibility}

- **Läsbara typsnitt** — använd tydliga, läsbara typsnitt
- **Tillräckligt kontrast** — se till att texten är läsbar
- **Kostetiketter** — markera kostalternativ tydligt
- **Allergenvarningar** — visa allergener framträdande
- **Mobilvänligt** — testa på alla enheter

## Exempel {#examples}

### Restaurangmenystruktur {#restaurant-menu-structure}

```
Förrätter
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pastarätter
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Huvudrätter
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Dessert
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafémenystruktur {#cafe-menu-structure}

```
Kaffe
├── Espresso
├── Cappuccino
└── Latte

Konditori
├── Croissants
├── Muffins
└── Scones

Smörgåsar
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetariskt wrap
```

## Relaterade funktioner {#related-features}

- [Skapa meny](../abilities/create-menu.md) — skapa navigeringsmenyer
- [Designriktning](./design-direction.md) — anpassa din sajt design
- [Upptäcktsintervju](./discovery-interview.md) — planera din sajtstruktur
