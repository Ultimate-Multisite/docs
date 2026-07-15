---
title: Gaaschtgewerbe-Menüen
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality-Menüen

D'Feature **Hospitality Menus** erlaabt Theme Builder, strukturéiert Säite fir Iess- a Gedrénksmenüen direkt an deng WordPress-Säit ze generéieren an anzebannen.

## Iwwersiicht {#overview}

Theme Builder kann elo professionell, strukturéiert Menü-Säite fir Hospitality-Betriber erstellen, dorënner Restauranten, Caféen, Baren a Catering-Servicer. Dës Menüe si komplett an den Design vun denger Säit integréiert a kënnen einfach aktualiséiert a geréiert ginn.

## Ënnerstëtzt Hospitality-Typen {#supported-hospitality-types}

- **Restauranten** — Menüe fir Vollservice-Restauratioun
- **Caféen** — Menüe fir Kaffi a liicht Iessen
- **Baren a Loungen** — Menüe fir Gedrénks an Appetizer
- **Bäckereien** — Menüe fir Patisserie a Brout
- **Catering-Servicer** — Menüoptioune fir Evenementer
- **Food Trucks** — Menüe fir mobil Iessservicer
- **Brauereien a Wënzerbetriber** — Gedrénksmenüe mat Beschreiwungen

## Menüstruktur {#menu-structure}

### Menü-Kategorien {#menu-categories}

Menüe ginn a Kategorien organiséiert:

- **Appetizer** — Entréeën a kleng Platen
- **Haaptplaten** — Haaptgerechter
- **Bäilagen** — Begleedungen a Geméis
- **Desserten** — séiss Leckereien
- **Gedrénks** — Gedrénks (alkoholesch an net-alkoholesch)
- **Specials** — deeglech oder saisonal Spezialitéiten

### Format vum Menü-Element {#menu-item-format}

All Menü-Element enthält:

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

#### Element-Felder {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Numm vum Plat oder Gedrénks |
| `description` | string | Detailéiert Beschreiwung vum Element |
| `price` | string | Präis (mat Währung formatéiert) |
| `dietary_info` | array | Ernärungsattributer (vegan, glutenfräi, asw.) |
| `allergens` | array | Heefeg Allergener (Nëss, Schueldéieren, asw.) |
| `availability` | string | Wéini verfügbar (deeglech, saisonal, asw.) |

## Hospitality-Menüen erstellen {#creating-hospitality-menus}

### Schrëtt 1: Menü-Informatioune ginn {#step-1-provide-menu-information}

Erziel Theme Builder iwwer däi Menü:

```
Erstell e Restaurant-Menü fir mäin italieenesche Restaurant mat Appetizer,
Nuddelsplaten, Haaptplaten an Desserten. Füügt Präisser a Beschreiwungen derbäi.
```

### Schrëtt 2: Theme Builder generéiert de Menü {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Erstellt eng strukturéiert Menü-Säit
2. Designt se passend zum Theme vun denger Säit
3. Organiséiert Elementer a Kategorien
4. Formatéiert Präisser a Beschreiwungen
5. Füügt Ernärungs- an Allergeninformatiounen derbäi

### Schrëtt 3: Iwwerpréiwen an upassen {#step-3-review-and-customize}

Du kanns:

1. Menü-Elementer a Präisser änneren
2. Kategorien derbäisetzen oder ewechhuelen
3. Elementer bannent Kategorien nei uerdnen
4. Beschreiwungen an Ernärungsinformatiounen aktualiséieren
5. Styling a Layout upassen

## Optioune fir d'Menü-Uweisung {#menu-display-options}

### Voll Menü-Säit {#full-menu-page}

Eng dedizéiert Säit, déi däi komplette Menü uweist:

- No Kategorie organiséiert
- Duerchsichbar a filterbar
- Dréckfrëndleche Layout
- Mobil-responsiven Design

### Menü-Widget {#menu-widget}

Bett Menü-Sektiounen op anere Säiten an:

- Ausgewielten Elementer op der Homepage
- Deeglech Specials an der Sidebar
- Gedrénksmenü op der Bar-Säit
- Dessert-Presentatioun am Footer

### Menü-PDF {#menu-pdf}

Generéier en erofluedbare PDF-Menü:

- Professionell Formatéierung
- Dréckfäerdeg Qualitéit
- Enthält Biller a Beschreiwungen
- Einfach ze deelen an per E-Mail ze schécken

## Ernärungs- an Allergeninformatiounen {#dietary-and-allergen-information}

### Ernärungsattributer {#dietary-attributes}

Markéier Elementer mat Ernärungsinformatiounen:

- **Vegan** — keng Déiereprodukter
- **Vegetaresch** — kee Fleesch
- **Glutenfräi** — sécher fir Zöliakie
- **Mëllechfräi** — keng Mëllechprodukter
- **Nëssfräi** — keng Bam Nëss oder Erdnëss
- **Kuelenhydratarm** — reduzéiert Kuelenhydrater
- **Proteinräich** — räich u Protein

### Allergen-Warnungen {#allergen-warnings}

Enthält heefeg Allergener:

- **Nëss** — Bam Nëss an Erdnëss
- **Schueldéieren** — Krustendéieren a Muscheldéieren
- **Fësch** — all Fëschzorten
- **Mëllechprodukter** — Mëllech a Mëllechprodukter
- **Eeër** — Héngeréeër
- **Soja** — Sojaprodukter
- **Gluten** — Weess a glutenhalteg Kären
- **Sesam** — Sesamkären an Ueleg

## Menü-Verwaltung {#menu-management}

### Präisser aktualiséieren {#updating-prices}

Menü-Präisser einfach aktualiséieren:

1. Navigéier op d'Menü-Säit
2. Klick op "Menü änneren"
3. Aktualiséier d'Präisser fir Elementer
4. Späicher d'Ännerungen
5. Ännerunge erschéngen direkt op denger Säit

### Saisonal Elementer derbäisetzen {#adding-seasonal-items}

Erstell saisonal Menü-Variatiounen:

1. Erstell eng nei Menü-Versioun
2. Füügt saisonal Elementer derbäi
3. Markéier Elementer als "Saisonal"
4. Plang Disponibilitéitsdatumen
5. Weist se automatesch wärend der Saison un

### Specials verwalten {#managing-specials}

Weis deeglech oder wöchentlech Specials un:

1. Erstell eng Kategorie "Specials"
2. Füügt Elementer mat Disponibilitéitsdatumen derbäi
3. Hief Specials op der Homepage ervir
4. Aktualiséier deeglech oder wöchentlech
5. Archivéier al Specials

## Integratioun mat Theme Builder {#integration-with-theme-builder}

Wann s du Theme Builder fir Hospitality-Säite benotz:

1. **Automatesch Menü-Erkennung** — erkennt, ob s du en Iess-/Gedrénksbetrieb bass
2. **Erstelle vu Menü-Säiten** — generéiert professionell Menü-Säiten
3. **Design-Ofstëmmung** — Menüe passen zum Theme vun denger Säit
4. **Mobil Optimiséierung** — Menüe ginn op Handyen schéin ugewisen
5. **SEO-Optimiséierung** — Menüe si sichmaschinnefrëndlech

## Bescht Praktiken {#best-practices}

### Menü-Design {#menu-design}

- **Kloer Organisatioun** — logesch Kategorie-Struktur
- **Liesbar Beschreiwungen** — appetitlech an informativ
- **Konsequent Präisser** — kloer Währung a Formatéierung
- **Professionell Fotoen** — héichwäerteg Iessbiller
- **Wäissraum** — iwwerfëll d'Säit net

### Inhalt {#content}

- **Genee Beschreiwungen** — beschreif Elementer präzis
- **Specials ervirhiewen** — maach Specials opfälleg
- **Allergener enthalen** — lëschten Allergener ëmmer op
- **Regelméisseg aktualiséieren** — haalt Präisser an Elementer aktuell
- **Appetitlech Sprooch benotzen** — looss Elementer lecker kléngen

### Accessibilitéit {#accessibility}

- **Liesbar Schrëften** — benotz kloer, gutt liesbar Schrëftaarten
- **Genuch Kontrast** — stell sécher, datt den Text liesbar ass
- **Ernärungslabelen** — markéier Ernärungsoptioune kloer
- **Allergen-Warnungen** — weis Allergener gutt siichtbar un
- **Mobilfrëndlech** — test op allen Apparater

## Beispiller {#examples}

### Restaurant-Menü-Struktur {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Café-Menüstruktur {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Verbonnen Funktiounen {#related-features}

- [Menü erstellen](../abilities/create-menu.md) — Navigatiounsmenüen erstellen
- [Designausriichtung](./design-direction.md) — den Design vun denger Säit upassen
- [Entdeckungsinterview](./discovery-interview.md) — d'Struktur vun denger Säit plangen
