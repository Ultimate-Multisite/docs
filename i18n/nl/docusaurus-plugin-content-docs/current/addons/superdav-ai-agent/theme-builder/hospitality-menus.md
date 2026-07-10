---
title: Gastvrijheidsmenu's
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastronomische Menu's {#hospitality-menus}

De functie **Gastronomische Menu's** stelt Theme Builder in staat om gestructureerde menu's voor voedsel en drank te genereren en in te bedden op uw WordPress-site.

## Overzicht {#overview}

Theme Builder kan nu professionele, gestructureerde menu's maken voor horecazakelijke bedrijven, waaronder restaurants, cafés, bars en cateringdiensten. Deze menu's zijn volledig geïntegreerd in het ontwerp van uw site en kunnen eenvoudig worden bijgewerkt en beheerd.

## Ondersteunde Horeca-typen {#supported-hospitality-types}

- **Restaurants** — volledige maaltijdmenu's
- **Cafés** — koffie- en lichte maaltijdmenu's
- **Bars en Lounges** — drank- en voorgerechtmenu's
- **Bakkerijen** — patisserie- en broodmenu's
- **Cateringdiensten** — menu-opties voor evenementen
- **Food Trucks** — mobiele voedseldienstenmenu's
- **Brouwerijen en Wijnhuizen** — drankmenu's met beschrijvingen

## Menu Structuur {#menu-structure}

### Menu Categorieën {#menu-categories}

Menu's zijn georganiseerd in categorieën:

- **Voorgerechten** — starters en kleine gerechten
- **Hoofdgerechten** — hoofdmaaltijden
- **Bijgerechten** — begeleiding en groenten
- **Desserts** — zoete lekkernijen
- **Dranken** — drankjes (alcoholisch en niet-alcoholisch)
- **Specials** — dagelijkse of seizoensgebonden specials

### Menu Item Formaat {#menu-item-format}

Elk menu-item bevat:

```json
{
  "name": "Gegrilde Zalm",
  "description": "Verse Atlantische zalm met citroenboter saus",
  "price": "$24.95",
  "dietary_info": ["Glutenvrij", "Hoog-Eiwit"],
  "allergens": ["Vis"],
  "availability": "Dagelijks"
}
```

#### Veldnamen {#item-fields}

| Veld | Type | Beschrijving |
|-------|------|-------------|
| `name` | string | Naam van het gerecht of drankje |
| `description` | string | Gedetailleerde beschrijving van het item |
| `price` | string | Prijs (geformatteerd met valuta) |
| `dietary_info` | array | Dieetattributen (Veganistisch, Glutenvrij, etc.) |
| `allergens` | array | Veelvoorkomende allergenen (Noten, Schelpdieren, etc.) |
| `availability` | string | Wanneer beschikbaar (Dagelijks, Seizoensgebonden, etc.) |

## Gastronomische Menu's Maken {#creating-hospitality-menus}

### Stap 1: Menu-informatie Verstrekken {#step-1-provide-menu-information}

Vertel Theme Builder over uw menu:

```
Maak een restaurantmenu voor mijn Italiaanse restaurant met voorgerechten,
pastagerechten, hoofdgerechten en desserts. Neem prijzen en beschrijvingen op.
```

### Stap 2: Theme Builder Genereert Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Maakt een gestructureerde menu-pagina
2. Ontwerpt deze zodat deze past bij het thema van uw site
3. Organiseert items in categorieën
4. Formatteert prijzen en beschrijvingen
5. Voegt dieet- en allergeneninformatie toe

### Stap 3: Bekijken en Aanpassen {#step-3-review-and-customize}

U kunt:

1. Menu-items en prijzen bewerken
2. Categorieën toevoegen of verwijderen
3. Items binnen categorieën opnieuw rangschikken
4. Beschrijvingen en dieetinfo bijwerken
5. Styling en lay-out aanpassen

## Menu Weergave Opties {#menu-display-options}

### Volledige Menu Pagina {#full-menu-page}

Een specifieke pagina die uw volledige menu weergeeft:

- Georganiseerd per categorie
- Zoekbaar en filterbaar
- Printvriendelijke lay-out
- Responsief ontwerp voor mobiel

### Menu Widget {#menu-widget}

Voeg menu-secties toe op andere pagina's:

- Uitgelichte items op de homepage
- Dagelijkse specials in de zijbalk
- Drankmenu op de barpagina
- Dessertshowcase in de voettekst

### Menu PDF {#menu-pdf}

Genereer een downloadbaar PDF-menu:

- Professionele opmaak
- Printklare kwaliteit
- Bevat afbeeldingen en beschrijvingen
- Eenvoudig te delen en per e-mail te versturen

## Dieet- en Allergeneninformatie {#dietary-and-allergen-information}

### Dieetattributen {#dietary-attributes}

Markeer items met dieetinformatie:

- **Veganistisch** — geen dierlijke producten
- **Vegetarisch** — geen vlees
- **Glutenvrij** — veilig voor coeliakie
- **Zuivelvrij** — geen zuivelproducten
- **Notenvrij** — geen noten of pinda's
- **Laag-Koolhydraat** — verminderde koolhydraten
- **Hoog-Eiwit** — rijk aan eiwitten

### Allergenwaarschuwingen {#allergen-warnings}

Sluit veelvoorkomende allergenen op:

- **Noten** — noten en pinda's
- **Schelpdieren** — kreeftachtigen en weekdieren
- **Vis** — alle vissoorten
- **Zuivel** — melk en zuivelproducten
- **Eieren** — kippeneieren
- **Soja** — sojaproducten
- **Gluten** — tarwe en glutenhoudende granen
- **Sesam** — sesamzaad en olie

## Menu Beheer {#menu-management}

### Prijzen Bijwerken {#updating-prices}

Menu-prijzen eenvoudig bijwerken:

1. Navigeer naar de menu-pagina
2. Klik op "Menu Bewerken"
3. Update de prijzen voor de items
4. Wijzigingen opslaan
5. Wijzigingen verschijnen direct op uw site

### Seizoensgebonden Items Toevoegen {#adding-seasonal-items}

Maak seizoensgebonden menuvariaties:

1. Maak een nieuwe menuversie aan
2. Voeg seizoensgebonden items toe
3. Markeer items als "Seizoensgebonden"
4. Plan de beschikbaarheidsdata
5. Automatisch weergeven tijdens het seizoen

### Specials Beheren {#managing-specials}

Toon dagelijkse of wekelijkse specials:

1. Maak een "Specials" categorie aan
2. Voeg items toe met beschikbaarheidsdata
3. Highlight specials op de homepage
4. Dagelijks of wekelijks updaten
5. Oude specials archiveren

## Integratie met Theme Builder {#integration-with-theme-builder}

Bij het gebruik van Theme Builder voor horecageites:

1. **Automatische menu-detectie** — identificeert of u een voedsel-/drankbedrijf bent
2. **Menu-pagina creatie** — genereert professionele menu-pagina's
3. **Ontwerp-matching** — menu's passen bij het thema van uw site
4. **Mobiele optimalisatie** — menu's worden prachtig weergegeven op telefoons
5. **SEO-optimalisatie** — menu's zijn vriendelijk voor zoekmachines

## Best Practices {#best-practices}

### Menu Ontwerp {#menu-design}

- **Duidelijke organisatie** — logische categorie-structuur
- **Leesbare beschrijvingen** — smakelijk en informatief
- **Consistent prijzen** — duidelijke valuta en opmaak
- **Professionele foto's** — hoogwaardige voedselafbeeldingen
- **Witruimte** — de pagina niet overladen

### Content {#content}

- **Accurate beschrijvingen** — beschrijf items nauwkeurig
- **Specials benadrukken** — laat specials opvallen
- **Allergenen opnemen** — vermeld altijd allergenen
- **Regelmatig updaten** — houd prijzen en items actueel
- **Smakelijke taal gebruiken** — laat items lekker klinken

### Toegankelijkheid {#accessibility}

- **Leesbare lettertypen** — gebruik duidelijk leesbare lettertypen
- **Voldoende contrast** — zorg ervoor dat de tekst leesbaar is
- **Dieetlabels** — markeer dieetopties duidelijk
- **Allergenwaarschuwingen** — toon allergenen prominent
- **Mobielvriendelijk** — test op alle apparaten

## Voorbeelden {#examples}

### Restaurant Menu Structuur {#restaurant-menu-structure}

```
Voorgerechten
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pastagerechten
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Hoofdgerechten
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Café Menu Structuur {#cafe-menu-structure}

```
Koffie
├── Espresso
├── Cappuccino
└── Latte

Patisserie
├── Croissants
├── Muffins
└── Scones

Broodjes
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarisch Wrap
```

## Gerelateerde Functies {#related-features}

- [Create Menu](../abilities/create-menu.md) — navigatiemenu's maken
- [Design Direction](./design-direction.md) — het ontwerp van uw site aanpassen
- [Discovery Interview](./discovery-interview.md) — uw site-structuur plannen
