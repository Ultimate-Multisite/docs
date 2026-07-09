---
title: Mamenyu eKugamuchira Vaenzi
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Mamenu eHospitality {#hospitality-menus}

Chinhu che **Hospitality Menus** chinobvumira Theme Builder kugadzira nekupinza mapeji emenu yezvokudya nezvinwiwa ane chimiro chakarongwa zvakananga muWordPress site yako.

## Pfupiso {#overview}

Theme Builder ikozvino inogona kugadzira mapeji emenu ehunyanzvi, akarongwa, emabhizinesi ehospitality kusanganisira maresitorendi, macafe, mabhawa, uye masevhisi ekucatering. Mamenu aya akabatanidzwa zvizere mudhizaini yesite yako uye anogona kuvandudzwa nekutarisirwa zviri nyore.

## Mhando dzeHospitality Dzinotsigirwa {#supported-hospitality-types}

- **Maresitorendi** — mamenu ekudyira ane sevhisi yakazara
- **Macafe** — mamenu ekofi nezvokudya zvakareruka
- **Mabhawa nemaLounge** — mamenu ezvinwiwa nezvokudya zvekutanga
- **Mabhekari** — mamenu emakeke nechingwa
- **Masevhisi eCatering** — sarudzo dzemenu yezviitiko
- **Food Trucks** — mamenu esevhisi yezvokudya inofamba
- **Mabrewery nemaWinery** — mamenu ezvinwiwa ane tsananguro

## Chimiro cheMenu {#menu-structure}

### Zvikamu zveMenu {#menu-categories}

Mamenu akarongwa muzvikamu:

- **Zvokudya zvekutanga** — zvokutanga nemapureti madiki
- **Zvekudya zvikuru** — makosi makuru
- **Zvekuperekedza** — zvinoperekedza nemiriwo
- **Madhizeti** — zvinotapira
- **Zvinwiwa** — zvinwiwa (zvine doro nezvisina doro)
- **Zvakakosha** — zvakakosha zvezuva nezuva kana zvemwaka

### Fomati yeChinhu cheMenu {#menu-item-format}

Chinhu chimwe nechimwe chemenu chinosanganisira:

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

#### Minda yeChinhu {#item-fields}

| Munda | Rudzi | Tsananguro |
|-------|------|-------------|
| `name` | string | Zita redishi kana chinwiwa |
| `description` | string | Tsananguro yakadzama yechinhu chacho |
| `price` | string | Mutengo (wakafomatwa nemari) |
| `dietary_info` | array | Hunhu hwekudya (Vegan, Gluten-Free, nezvimwe.) |
| `allergens` | array | Zvinowanzo konzera allergic reactions (Nuts, Shellfish, nezvimwe.) |
| `availability` | string | Painowanikwa (Daily, Seasonal, nezvimwe.) |

## Kugadzira Mamenu eHospitality {#creating-hospitality-menus}

### Danho 1: Ipa Ruzivo rweMenu {#step-1-provide-menu-information}

Udza Theme Builder nezvemenu yako:

```
Gadzira menu yeresitorendi yeresitorendi yangu yeItalian ine zvokudya zvekutanga,
madishi epasta, makosi makuru, uye madhizeti. Sanganisira mitengo netsananguro.
```

### Danho 2: Theme Builder Inogadzira Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Inogadzira peji remenu rakarongwa
2. Inorigadzira kuti rienderane netheme yesite yako
3. Inoronga zvinhu muzvikamu
4. Inofomata mitengo netsananguro
5. Inowedzera ruzivo rwekudya uye allergen

### Danho 3: Ongorora uye Gadzirisa {#step-3-review-and-customize}

Unogona:

1. Kugadzirisa zvinhu zvemenu nemitengo
2. Kuwedzera kana kubvisa zvikamu
3. Kuronga patsva zvinhu mukati mezvikamu
4. Kuvandudza tsananguro neruzivo rwekudya
5. Kugadzirisa styling nelayout

## Sarudzo dzeKuratidza Menu {#menu-display-options}

### Peji reMenu Rakazara {#full-menu-page}

Peji rakatsaurirwa rinoratidza menu yako yakazara:

- Yakarongwa nechikamu
- Inogona kutsvakwa nekusefwa
- Layout inokodzera kudhindwa
- Dhizaini inopindura panharembozha

### Menu Widget {#menu-widget}

Pinza zvikamu zvemenu pane mamwe mapeji:

- Zvinhu zvakasarudzwa papeji rekutanga
- Zvakakosha zvezuva nezuva pa sidebar
- Menu yezvinwiwa papeji rebhawa
- Kuratidzwa kwemadhizeti pa footer

### Menu PDF {#menu-pdf}

Gadzira menu yePDF inodhawunirodhwa:

- Kufomata kwehunyanzvi
- Hunhu hwakagadzirira kudhindwa
- Inosanganisira mifananidzo netsananguro
- Zviri nyore kugovera nekuemail

## Ruzivo rweKudya neAllergen {#dietary-and-allergen-information}

### Hunhu hweKudya {#dietary-attributes}

Maka zvinhu neruzivo rwekudya:

- **Vegan** — hapana zvigadzirwa zvemhuka
- **Vegetarian** — hapana nyama
- **Gluten-Free** — yakachengeteka kuchirwere checeliac
- **Dairy-Free** — hapana zvigadzirwa zvemukaka
- **Nut-Free** — hapana nzungu dzemiti kana peanuts
- **Low-Carb** — macarbohydrate akaderedzwa
- **High-Protein** — yakapfuma neprotein

### Yambiro dzeAllergen {#allergen-warnings}

Sanganisira allergen dzinowanzoitika:

- **Nuts** — nzungu dzemiti nema peanuts
- **Shellfish** — macrustaceans nemamollusks
- **Fish** — marudzi ose ehove
- **Dairy** — mukaka nezvigadzirwa zvemukaka
- **Eggs** — mazai ehuku
- **Soy** — zvigadzirwa zvesoy
- **Gluten** — gorosi nezviyo zvine gluten
- **Sesame** — mhodzi dzesesame nemafuta

## Kutarisira Menu {#menu-management}

### Kuvandudza Mitengo {#updating-prices}

Vandudza mitengo yemenu zviri nyore:

1. Enda kupeji remenu
2. Dzvanya "Gadzirisa Menu"
3. Vandudza mitengo yezvinhu
4. Chengetedza shanduko
5. Shanduko dzinooneka pakarepo pasite yako

### Kuwedzera Zvinhu zveMwaka {#adding-seasonal-items}

Gadzira misiyano yemenu yemwaka:

1. Gadzira vhezheni itsva yemenu
2. Wedzera zvinhu zvemwaka
3. Maka zvinhu se "Zvemwaka"
4. Ronga mazuva ekuwanikwa
5. Ratidza otomatiki panguva yemwaka

### Kutarisira Zvakakosha {#managing-specials}

Ratidza zvakakosha zvezuva nezuva kana zvevhiki:

1. Gadzira chikamu che "Zvakakosha"
2. Wedzera zvinhu zvine mazuva ekuwanikwa
3. Simbisa zvakakosha papeji rekutanga
4. Vandudza zuva nezuva kana vhiki nevhiki
5. Chengeta zvakakosha zvekare muarchive

## Kubatanidza neTheme Builder {#integration-with-theme-builder}

Paunenge uchishandisa Theme Builder kumasite ehospitality:

1. **Kuona menu otomatiki** — inoona kana uri bhizinesi rezvokudya/zvinwiwa
2. **Kugadzirwa kwepeji remenu** — inogadzira mapeji emenu ehunyanzvi
3. **Kuenderana kwedhizaini** — mamenu anoenderana netheme yesite yako
4. **Kuvandudzwa kwenharembozha** — mamenu anoratidzwa zvakanaka pamafoni
5. **SEO kuvandudzwa** — mamenu ane hushamwari kumainjini ekutsvaga

## Maitiro Akanakisa {#best-practices}

### Dhizaini yeMenu {#menu-design}

- **Kurongwa kwakajeka** — chimiro chezvikamu chine musoro
- **Tsananguro dzinoverengeka** — dzinokwezva kudya uye dzine ruzivo
- **Mitengo inoenderana** — mari yakajeka nekufomata
- **Mapikicha ehunyanzvi** — mifananidzo yezvokudya yemhando yepamusoro
- **Nzvimbo isina chinhu** — usazadza peji zvakawandisa

### Zviri Mukati {#content}

- **Tsananguro dzakarurama** — tsanangura zvinhu nemazvo
- **Simbisa zvakakosha** — ita kuti zvakakosha zvibude pachena
- **Sanganisira allergen** — gara uchinyora allergen
- **Vandudza nguva dzose** — chengeta mitengo nezvinhu zviri zvazvino
- **Shandisa mutauro unokwezva kudya** — ita kuti zvinhu zvinzwike zvinonaka

### Kuwanikwa {#accessibility}

- **Mafonti anoverengeka** — shandisa typefaces dzakajeka, dzinonyoreka
- **Musiyano wakakwana** — ita shuwa kuti chinyorwa chinoverengeka
- **Malabel ekudya** — maka zvakajeka sarudzo dzekudya
- **Yambiro dzeAllergen** — ratidza allergen pachena
- **Inokodzera nharembozha** — edza pamidziyo yose

## Mienzaniso {#examples}

### Chimiro cheMenu yeResitorendi {#restaurant-menu-structure}

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

### Chimiro cheMenyu yeCafe {#cafe-menu-structure}

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

## Zvimiro Zvinoenderana {#related-features}

- [Gadzira Menyu](../abilities/create-menu.md) — gadzira menyu dzekufambisa
- [Nhungamiro yeDhizaini](./design-direction.md) — gadzirisa dhizaini yesaiti yako
- [Hurukuro yeKutsvaga](./discovery-interview.md) — ronga chimiro chesaiti yako
