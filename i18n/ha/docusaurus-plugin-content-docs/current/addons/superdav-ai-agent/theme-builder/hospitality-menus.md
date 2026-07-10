---
title: Menus na Masaukin Baƙi
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu na Masauki da Abinci {#hospitality-menus}

Siffar **Hospitality Menus** tana ba Theme Builder damar ƙirƙira da saka shafukan menu na abinci da abin sha masu tsari kai tsaye cikin shafin WordPress ɗinka.

## Taƙaitaccen Bayani {#overview}

Theme Builder yanzu zai iya ƙirƙirar ƙwararrun shafukan menu masu tsari ga kasuwancin masauki da abinci ciki har da gidajen abinci, cafes, bars, da sabis na catering. Waɗannan menu suna haɗe gaba ɗaya cikin ƙirar shafinka kuma ana iya sabunta su da sarrafa su cikin sauƙi.

## Nau'ikan Masauki da Abinci da ake Goyon Bayan su {#supported-hospitality-types}

- **Gidajen abinci** — menu na cikakken sabis na cin abinci
- **Cafes** — menu na kofi da abinci mai sauƙi
- **Bars da Lounges** — menu na abin sha da ƙananan abinci
- **Bakeries** — menu na kekuna da burodi
- **Sabis na Catering** — zaɓuɓɓukan menu na taruka
- **Food Trucks** — menu na sabis na abinci mai motsi
- **Breweries da Wineries** — menu na abin sha tare da bayanai

## Tsarin Menu {#menu-structure}

### Rukunonin Menu {#menu-categories}

Ana tsara menu cikin rukunoni:

- **Appetizers** — abincin farawa da ƙananan faranti
- **Entrees** — manyan abinci
- **Sides** — abubuwan haɗawa da kayan lambu
- **Desserts** — kayan zaƙi
- **Beverages** — abubuwan sha (masu barasa da marasa barasa)
- **Specials** — na musamman na yau da kullum ko na kakar lokaci

### Tsarin Abun Menu {#menu-item-format}

Kowane abun menu ya ƙunshi:

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

#### Filayen Abu {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Sunan abinci ko abin sha |
| `description` | string | Cikakken bayanin abun |
| `price` | string | Farashi (an tsara shi da kuɗi) |
| `dietary_info` | array | Halayen abinci (Vegan, Gluten-Free, da sauransu) |
| `allergens` | array | Abubuwan da ke yawan jawo rashin lafiyar abinci (Nuts, Shellfish, da sauransu) |
| `availability` | string | Lokacin da ake samu (Daily, Seasonal, da sauransu) |

## Ƙirƙirar Menu na Masauki da Abinci {#creating-hospitality-menus}

### Mataki na 1: Bayar da Bayanin Menu {#step-1-provide-menu-information}

Faɗa wa Theme Builder game da menu ɗinka:

```
Ƙirƙiri menu na gidan abinci don gidan abincina na Italiya tare da appetizers,
abincin pasta, manyan abinci, da desserts. Haɗa farashi da bayanai.
```

### Mataki na 2: Theme Builder Yana Samar da Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Yana ƙirƙirar shafin menu mai tsari
2. Yana tsara shi ya dace da theme na shafinka
3. Yana tsara abubuwa cikin rukunoni
4. Yana tsara farashi da bayanai
5. Yana ƙara bayanin abinci da na abubuwan da ke jawo rashin lafiya

### Mataki na 3: Bita da Keɓancewa {#step-3-review-and-customize}

Za ka iya:

1. Gyara abubuwan menu da farashi
2. Ƙara ko cire rukunoni
3. Sake tsara abubuwa a cikin rukunoni
4. Sabunta bayanai da bayanin abinci
5. Daidaita salo da shimfiɗa

## Zaɓuɓɓukan Nuna Menu {#menu-display-options}

### Cikakken Shafin Menu {#full-menu-page}

Shafi na musamman da ke nuna cikakken menu ɗinka:

- An tsara shi bisa rukuni
- Ana iya nema da tacewa
- Shimfiɗa mai dacewa da bugawa
- Ƙira mai amsawa ga wayar hannu

### Widget na Menu {#menu-widget}

Saka sassan menu a wasu shafuka:

- Abubuwan da aka fito da su a shafin gida
- Na musamman na yau da kullum a sidebar
- Menu na abin sha a shafin bar
- Nunin kayan zaƙi a footer

### PDF na Menu {#menu-pdf}

Samar da menu na PDF da za a iya saukewa:

- Tsarin ƙwararru
- Inganci mai shirye don bugawa
- Ya haɗa da hotuna da bayanai
- Mai sauƙin rabawa da aika ta email

## Bayanin Abinci da Abubuwan da ke Jawo Rashin Lafiya {#dietary-and-allergen-information}

### Halayen Abinci {#dietary-attributes}

Yi alama ga abubuwa da bayanin abinci:

- **Vegan** — babu kayayyakin dabba
- **Vegetarian** — babu nama
- **Gluten-Free** — lafiya ga cutar celiac
- **Dairy-Free** — babu kayayyakin madara
- **Nut-Free** — babu goro na itace ko gyada
- **Low-Carb** — rage carbohydrates
- **High-Protein** — mai wadatar protein

### Gargaɗin Abubuwan da ke Jawo Rashin Lafiya {#allergen-warnings}

Haɗa abubuwan da ke yawan jawo rashin lafiyar abinci:

- **Nuts** — goro na itace da gyada
- **Shellfish** — crustaceans da mollusks
- **Fish** — duk nau'in kifi
- **Dairy** — madara da kayayyakin madara
- **Eggs** — ƙwayayen kaza
- **Soy** — kayayyakin soy
- **Gluten** — alkama da hatsi masu ɗauke da gluten
- **Sesame** — ƙwayoyin sesame da mai

## Sarrafa Menu {#menu-management}

### Sabunta Farashi {#updating-prices}

Sabunta farashin menu cikin sauƙi:

1. Je zuwa shafin menu
2. Danna "Gyara Menu"
3. Sabunta farashin abubuwa
4. Ajiye canje-canje
5. Canje-canje suna bayyana nan take a shafinka

### Ƙara Abubuwan Kakar Lokaci {#adding-seasonal-items}

Ƙirƙiri bambance-bambancen menu na kakar lokaci:

1. Ƙirƙiri sabon sigar menu
2. Ƙara abubuwan kakar lokaci
3. Yi alama ga abubuwa a matsayin "Seasonal"
4. Tsara ranakun samuwa
5. Nuna su ta atomatik yayin kakar lokaci

### Sarrafa Na Musamman {#managing-specials}

Nuna na musamman na yau da kullum ko na mako-mako:

1. Ƙirƙiri rukunin "Specials"
2. Ƙara abubuwa tare da ranakun samuwa
3. Fito da na musamman a shafin gida
4. Sabunta yau da kullum ko mako-mako
5. Ajiye tsoffin na musamman a archive

## Haɗawa da Theme Builder {#integration-with-theme-builder}

Lokacin amfani da Theme Builder don shafukan masauki da abinci:

1. **Gano menu ta atomatik** — yana gane idan kai kasuwancin abinci/abin sha ne
2. **Ƙirƙirar shafin menu** — yana samar da ƙwararrun shafukan menu
3. **Daidaiton ƙira** — menu suna dacewa da theme na shafinka
4. **Ingantawa ga wayar hannu** — menu suna bayyana da kyau a kan wayoyi
5. **Ingantawar SEO** — menu suna dacewa da injinan bincike

## Mafi Kyawun Ayyuka {#best-practices}

### Ƙirar Menu {#menu-design}

- **Tsari bayyananne** — tsarin rukuni mai ma'ana
- **Bayanai masu sauƙin karantawa** — masu sa sha'awa da ba da bayani
- **Farashi mai daidaito** — kuɗi da tsari bayyananne
- **Hotuna na ƙwararru** — hotunan abinci masu inganci
- **Farin sarari** — kada a cunkushe shafin

### Abun Ciki {#content}

- **Bayanai daidai** — bayyana abubuwa daidai
- **Fito da na musamman** — sa na musamman su yi fice
- **Haɗa abubuwan da ke jawo rashin lafiya** — koyaushe jera abubuwan da ke jawo rashin lafiya
- **Sabunta akai-akai** — kiyaye farashi da abubuwa na yanzu
- **Yi amfani da harshe mai sa sha'awa** — sa abubuwa su ji kamar masu daɗi

### Samun Dama {#accessibility}

- **Fonts masu sauƙin karantawa** — yi amfani da nau'ikan rubutu masu bayyani da sauƙin karantawa
- **Bambancin launi isasshe** — tabbatar rubutu yana da sauƙin karantawa
- **Alamomin abinci** — yi alama a fili ga zaɓuɓɓukan abinci
- **Gargaɗin abubuwan da ke jawo rashin lafiya** — nuna abubuwan da ke jawo rashin lafiya a fili
- **Mai dacewa da wayar hannu** — gwada a kan dukkan na'urori

## Misalai {#examples}

### Tsarin Menu na Gidan Abinci {#restaurant-menu-structure}

```
Abubuwan buɗe ci
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salatin Caprese

Abincin Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Manyan Abinci
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Kayan Zaki
├── Tiramisu
├── Panna Cotta
└── Zaɓin Gelato
```

### Tsarin Jerin Abincin Cafe {#cafe-menu-structure}

```
Kofi
├── Espresso
├── Cappuccino
└── Latte

Kayan Gasa
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Fasali Masu Alaƙa {#related-features}

- [Ƙirƙiri Jerin Zaɓuɓɓuka](../abilities/create-menu.md) — ƙirƙiri jerin zaɓuɓɓukan kewayawa
- [Jagorancin Zane](./design-direction.md) — keɓance zanen shafinka
- [Tattaunawar Ganowa](./discovery-interview.md) — tsara tsarin shafinka
