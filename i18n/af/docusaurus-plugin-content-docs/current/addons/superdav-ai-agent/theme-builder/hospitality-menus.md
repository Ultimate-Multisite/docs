---
title: Gastvryheidsmenu's
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastgewerdesmenu's

Die **Gastgewerdesmenu's**-kenmerk laat Theme Builder toe om gestruktureerde kos- en drankmenu-bladsye direk in u WordPress-webwerf te genereer en in te bed.

## Oorsig {#overview}

Theme Builder kan nou professionele, gestruktureerde menu-bladsye skep vir gastgewerdesbesighede, insluitend restaurante, kafees, bars en cateringdienste. Hierdie menu's is ten volle geïntegreer in die ontwerp van u webwerf en kan maklik opgedateer en bestuur word.

## Ondersteunde Gastgewerdessoorte {#supported-hospitality-types}

- **Restaurante** — volbedienings eetmenu's
- **Kafees** — koffie- en ligte maaltydmenu's
- **Bars en Lounges** — drank- en voorgeregmenu's
- **Bakkerye** — patisserie- en broodmenu's
- **Cateringdienste** — geleentiemenu-opsies
- **Voedsel-trekke** — mobiele voedseldiensmenu's
- **Brouwerye en Wyerye** — drankmenu's met beskrywings

## Menu-struktuur {#menu-structure}

### Menu-kategorieë {#menu-categories}

Menu's word georganiseer in kategorieë:

- **Voorgereggies** — voorgeregte en klein bordjies
- **Hoofgeregte** — hoofgeregte
- **Bygeregte** — bykomste en groente
- **Dessert** — soet lekkernye
- **Drankies** — drankies (alkoholies en nie-alkoholies)
- **Spesiaal** — daaglikse of seisoenale spesiale

### Menu-item Formaat {#menu-item-format}

Elke menu-item sluit in:

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

#### Item Velde {#item-fields}

| Veld | Tipe | Beskrywing |
|-------|------|-------------|
| `name` | string | Geregtenaam of dranknaam |
| `description` | string | Gedetailleerde beskrywing van die item |
| `price` | string | Prys (geformateer met valuta) |
| `dietary_info` | array | Dieetattributes (Vegan, Gluten-Free, ens.) |
| `allergens` | array | Algemene allergene (Neute, Skaliewe, ens.) |
| `availability` | string | Wanneer beskikbaar (Daagliks, Seisoenaal, ens.) |

## Skep Gastgewerdesmenu's {#creating-hospitality-menus}

### Stap 1: Verskaf Menu-inligting {#step-1-provide-menu-information}

Vertel Theme Builder van u menu:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Stap 2: Theme Builder Genereer Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Skep 'n gestruktureerde menu-bladsy
2. Ontwerp dit om by u webwerf se tema te pas
3. Organiseer items in kategorieë
4. Formateer pryse en beskrywings
5. Voeg dieet- en allergeen-inligting by

### Stap 3: Evalueer en Pas aan {#step-3-review-and-customize}

U kan:

1. Menu-items en pryse wysig
2. Kategorieë byvoeg of verwyder
3. Items binne kategorieë herskei
4. Beskrywings en dieet-inligting opdateer
5. Styling en uitleg aanpas

## Menu-weergawe Opsies {#menu-display-options}

### Volledige Menu-bladsy {#full-menu-page}

'n Spesiale bladsy wat u volledige menu vertoon:

- Georganiseer volgens kategorie
- Kan gesoek en gefilter word
- Vir drukvriendelike uitleg
- Mobiel-reaktiewe ontwerp

### Menu-widget {#menu-widget}

Beddien menu-seksies op ander bladsye:

- Uitgeligte items op die hoofblad
- Daaglikse spesiale in die sybalk
- Drankmenu op die barbladsy
- Dessert-uitstalling in die voete

### Menu-PDF {#menu-pdf}

Genereer 'n aflaaibare PDF-menu:

- Professionele formatting
- Vir druk gereed kwaliteit
- Sluit beelde en beskrywings in
- Maklik om te deel en per e-pos te stuur

## Dieet- en Allergeen-inligting {#dietary-and-allergen-information}

### Dieetattributes {#dietary-attributes}

Merk items met dieet-inligting:

- **Vegan** — geen dierelike produkte
- **Vegetaries** — geen vleis
- **Gluten-Free** — veilig vir seliakie-siekte
- **Dairy-Free** — geen melkprodukte
- **Nut-Free** — geen boomneute of neute
- **Low-Carb** — verminderde koolhidrate
- **High-Protein** — proteïenryk

### Allergeen Waarskuwings {#allergen-warnings}

Sluit algemene allergene in:

- **Nuts** — boomneute en neute
- **Skaliewe** — krake en molluske
- **Vis** — alle vissoorte
- **Melk** — melk en melkprodukte
- **Eiers** — hoender-eiers
- **Sojabonne** — sojabonneprodukte
- **Gluten** — tarwe en glutenhoudende graan
- **Sesam** — sesamsaad en olie

## Menu-bestuur {#menu-management}

### Prysopdatering {#updating-prices}

Pas menupryse maklik aan:

1. Navigeer na die menu-bladsy
2. Klik op "Edit Menu"
3. Pas pryse vir items aan
4. Stoor veranderinge
5. Veranderinge verskyn onmiddellik op u webwerf

### Seisoenale Items Byvoeg {#adding-seasonal-items}

Skep seisoenale menu-variasies:

1. Skep 'n nuwe menu-weergawe
2. Voeg seisoenale items by
3. Merk items as "Seasonal"
4. Skeduleer beskikbaarheidsdatums
5. Word outomaties gedurende die seisoen vertoon

### Spesiale Bestuur {#managing-specials}

Vertoon daaglikse of weeklikse spesiale:

1. Skep 'n "Specials" kategorie
2. Voeg items met beskikbaarheidsdatums by
3. Wys spesiale op die hoofblad
4. Opdateer daagliks of weekliks
5. Argiveer ou spesiale

## Integrasie met Theme Builder {#integration-with-theme-builder}

Wanneer u Theme Builder vir gastgewerdeswebwerwe gebruik:

1. **Outomatiese menu-opsporing** — identifiseer of u 'n voedsel-/drankbesigheid is
2. **Menu-bladsy skep** — genereer professionele menu-bladsye
3. **Ontwerp-pasmaat** — menu's pas by u webwerf se tema
4. **Mobiele optimalisering** — menu's word pragtig op fone vertoon
5. **SEO-optimalisering** — menu's is vriendelik vir soekmasjiene

## Beste Praktyke {#best-practices}

### Menu-ontwerp {#menu-design}

- **Duidelike organisasie** — logiese kategorie-struktuur
- **Leesbare beskrywings** — eetlustig en informatief
- **Konsistente prysvormat** — duidelike valuta en formatting
- **Professionele foto's** — hoëgehalte voedselbeelde
- **Witruimte** — moenie die bladsy oorlaai nie

### Inhoud {#content}

- **Accurate beskrywings** — beskryf items akkuraat
- **Spesiale uitlig** — laat spesiale uitstaan
- **Allergene sluit in** — lys altyd allergene
- **Regelmatig opdateer** — hou pryse en items op datum
- **Gebruik eetlustige taal** — laat items heerlik klink

### Toeganklikheid {#accessibility}

- **Leesbare lettertipes** — gebruik duidelike, leesbare lettertipe
- **Voldoende kontras** — verseker dat teks leesbaar is
- **Dieetetikette** — merk dieetopsies duidelik
- **Allergeen waarskuwings** — toon allergene prominent
- **Mobiel-vriendelik** — toets op alle toestelle

## Voorbeelde {#examples}

### Restaurant Menu-struktuur {#restaurant-menu-structure}

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

### Kafee Menu-struktuur {#cafe-menu-structure}

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

## Verwante Kenmerke {#related-features}

- [Create Menu](../abilities/create-menu.md) — skep navigasie-menu's
- [Design Direction](./design-direction.md) — pas die ontwerp van u webwerf aan
- [Discovery Interview](./discovery-interview.md) — beplan u webwerfstruktuur
