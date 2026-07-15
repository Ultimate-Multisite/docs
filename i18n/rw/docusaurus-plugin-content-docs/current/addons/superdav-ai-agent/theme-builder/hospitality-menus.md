---
title: Menyu z’Ubwakiranyi
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus za Hospitality

Ikiranga cya **Hospitality Menus** cyemerera Theme Builder gukora no gushyira amapaji ya menus y'ibiribwa n'ibinyobwa afite imiterere itunganyijeho, ako kanya muri site yawe ya WordPress.

## Incamake {#overview}

Theme Builder ubu ishobora gukora amapaji ya menu y'umwuga kandi atunganyije ku bucuruzi bwa hospitality burimo restaurants, cafes, bars, na serivisi za catering. Izi menus zinjizwa neza mu gishushanyo cya site yawe kandi zishobora kuvugururwa no gucungwa mu buryo bworoshye.

## Ubwoko bwa Hospitality Bushyigikiwe {#supported-hospitality-types}

- **Restaurants** — menus zo kurira aho bakorera serivisi yuzuye
- **Cafes** — menus za kawa n'ibiribwa byoroheje
- **Bars and Lounges** — menus z'ibinyobwa n'ibyokurya byo gutangira
- **Bakeries** — menus z'imigati n'ibyokurya biva mu ifuru
- **Catering Services** — amahitamo ya menu y'ibirori
- **Food Trucks** — menus za serivisi y'ibiribwa igendagenda
- **Breweries and Wineries** — menus z'ibinyobwa zifite ibisobanuro

## Imiterere ya Menu {#menu-structure}

### Ibyiciro bya Menu {#menu-categories}

Menus zitunganywa mu byiciro:

- **Appetizers** — ibyokurya byo gutangira n'amasahani mato
- **Entrees** — ibyokurya nyamukuru
- **Sides** — ibyo kurenzaho n'imboga
- **Desserts** — ibyokurya biryohereye
- **Beverages** — ibinyobwa (birimo inzoga n'ibitarimo inzoga)
- **Specials** — ibyihariye bya buri munsi cyangwa ibihe by'umwaka

### Imiterere y'Ikintu cya Menu {#menu-item-format}

Buri kintu cya menu kirimo:

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

#### Imirima y'Ikintu {#item-fields}

| Umurima | Ubwoko | Ibisobanuro |
|-------|------|-------------|
| `name` | string | Izina ry'ifunguro cyangwa ikinyobwa |
| `description` | string | Ibisobanuro birambuye by'icyo kintu |
| `price` | string | Igiciro (cyanditswe hamwe n'ifaranga) |
| `dietary_info` | array | Ibiranga imirire (Vegan, Gluten-Free, n'ibindi) |
| `allergens` | array | Ibishobora gutera allergies bikunze kuboneka (Nuts, Shellfish, n'ibindi) |
| `availability` | string | Igihe kiboneka (Daily, Seasonal, n'ibindi) |

## Gukora Hospitality Menus {#creating-hospitality-menus}

### Intambwe ya 1: Tanga Amakuru ya Menu {#step-1-provide-menu-information}

Bwira Theme Builder ibyerekeye menu yawe:

```
Kora menu ya restaurant kuri restaurant yanjye y'ibiribwa byo mu Butaliyani ifite ibyokurya byo gutangira,
ibyokurya bya pasta, ibyokurya nyamukuru, na desserts. Shyiramo ibiciro n'ibisobanuro.
```

### Intambwe ya 2: Theme Builder Ikora Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Ikora paji ya menu ifite imiterere itunganyije
2. Iyishushanya kugira ngo ihuze na theme ya site yawe
3. Itunganya ibintu mu byiciro
4. Itunganya imiterere y'ibiciro n'ibisobanuro
5. Yongeramo amakuru y'imirire n'aya allergens

### Intambwe ya 3: Suzuma kandi Uhindure {#step-3-review-and-customize}

Ushobora:

1. Guhindura ibintu bya menu n'ibiciro
2. Kongeramo cyangwa gukuramo ibyiciro
3. Kongera gutondeka ibintu mu byiciro
4. Kuvugurura ibisobanuro n'amakuru y'imirire
5. Guhindura styling n'imiterere

## Amahitamo yo Kwerekana Menu {#menu-display-options}

### Paji ya Menu Yuzuye {#full-menu-page}

Paji yihariye yerekana menu yawe yose:

- Itunganyijwe hakurikijwe icyiciro
- Ishobora gushakwamo no kuyungururwa
- Imiterere yorohereza gucapa
- Igishushanyo kijyana na mobile

### Menu Widget {#menu-widget}

Shyira ibice bya menu ku yandi mapaji:

- Ibintu byatoranyijwe kuri homepage
- Ibyihariye bya buri munsi kuri sidebar
- Menu y'ibinyobwa kuri paji ya bar
- Kugaragaza desserts kuri footer

### Menu PDF {#menu-pdf}

Kora menu ya PDF ishobora gukururwa:

- Imiterere y'umwuga
- Ubwiza bwiteguye gucapwa
- Irimo amashusho n'ibisobanuro
- Yoroshye gusangiza no kohereza kuri email

## Amakuru y'Imirire n'aya Allergen {#dietary-and-allergen-information}

### Ibiranga Imirire {#dietary-attributes}

Shyira ikimenyetso ku bintu ukoresheje amakuru y'imirire:

- **Vegan** — nta bikomoka ku nyamaswa
- **Vegetarian** — nta nyama
- **Gluten-Free** — bikwiriye ku burwayi bwa celiac
- **Dairy-Free** — nta bikomoka ku mata
- **Nut-Free** — nta mbuto zo ku biti cyangwa peanuts
- **Low-Carb** — carbohydrates zagabanyijwe
- **High-Protein** — bikungahaye kuri protein

### Imiburo ya Allergen {#allergen-warnings}

Shyiramo allergens zikunze kuboneka:

- **Nuts** — imbuto zo ku biti na peanuts
- **Shellfish** — crustaceans na mollusks
- **Fish** — amoko yose y'amafi
- **Dairy** — amata n'ibikomoka ku mata
- **Eggs** — amagi y'inkoko
- **Soy** — ibikomoka kuri soy
- **Gluten** — ingano n'ibinyampeke birimo gluten
- **Sesame** — imbuto za sesame n'amavuta yayo

## Gucunga Menu {#menu-management}

### Kuvugurura Ibiciro {#updating-prices}

Vugurura ibiciro bya menu mu buryo bworoshye:

1. Jya kuri paji ya menu
2. Kanda "Hindura Menu"
3. Vugurura ibiciro by'ibintu
4. Bika impinduka
5. Impinduka zigaragara ako kanya kuri site yawe

### Kongeramo Ibintu by'Ibihe by'Umwaka {#adding-seasonal-items}

Kora impinduka za menu zijyanye n'ibihe by'umwaka:

1. Kora verisiyo nshya ya menu
2. Ongeramo ibintu by'ibihe by'umwaka
3. Shyira ikimenyetso ku bintu nka "Seasonal"
4. Teganya amatariki yo kuboneka
5. Bizerekanwa mu buryo bwikora muri icyo gihe

### Gucunga Ibyihariye {#managing-specials}

Erekana ibyihariye bya buri munsi cyangwa buri cyumweru:

1. Kora icyiciro cya "Specials"
2. Ongeramo ibintu bifite amatariki yo kuboneka
3. Garagaza ibyihariye kuri homepage
4. Bivugurure buri munsi cyangwa buri cyumweru
5. Bika ibyihariye bishaje mu bubiko

## Kwihuza na Theme Builder {#integration-with-theme-builder}

Iyo ukoresha Theme Builder kuri site za hospitality:

1. **Kumenya menu mu buryo bwikora** — imenya niba uri ubucuruzi bw'ibiribwa/ibinyobwa
2. **Gukora paji ya menu** — ikora amapaji ya menu y'umwuga
3. **Guhuza igishushanyo** — menus zihura na theme ya site yawe
4. **Kunoza mobile** — menus zigaragara neza kuri telefoni
5. **Kunoza SEO** — menus ziba zinogeye search-engine

## Imikorere Myiza {#best-practices}

### Igishushanyo cya Menu {#menu-design}

- **Itunganywa risobanutse** — imiterere y'ibyiciro ifite logique
- **Ibisobanuro bisomeka** — biryoshye kandi bitanga amakuru
- **Ibiciro bihamye** — ifaranga n'imiterere bisobanutse
- **Amafoto y'umwuga** — amashusho y'ibiribwa afite ubwiza bwo hejuru
- **Umwanya w'ubusa** — ntuzuzuze cyane paji

### Ibirimo {#content}

- **Ibisobanuro nyabyo** — sobanura ibintu uko biri
- **Garagaza ibyihariye** — tumaho ibyihariye bigaragara
- **Shyiramo allergens** — buri gihe tanga urutonde rwa allergens
- **Vugurura kenshi** — komeza ibiciro n'ibintu bigezweho
- **Koresha imvugo ikurura ipfa** — tuma ibintu byumvikana biryoshye

### Uburyo bwo Kugera ku Bintu {#accessibility}

- **Fonts zisomeka** — koresha inyuguti zisobanutse kandi zisomeka
- **Contrast ihagije** — menya neza ko inyandiko isomeka
- **Labels z'imirire** — shyiraho neza ikimenyetso ku mahitamo y'imirire
- **Imiburo ya allergen** — erekana allergens ahagaragara
- **Ijyana na mobile** — gerageza ku bikoresho byose

## Ingero {#examples}

### Imiterere ya Menu ya Restaurant {#restaurant-menu-structure}

```
Ibyo kurya bibanza
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Amafunguro ya Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Amafunguro nyamukuru
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Ibyo kurya bisoza
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Imiterere ya Menu ya Cafe {#cafe-menu-structure}

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

## Ibiranga bifitanye isano {#related-features}

- [Kora Menu](../abilities/create-menu.md) — kora menu zo kuyobora
- [Icyerekezo cy'Igishushanyo](./design-direction.md) — hindura igishushanyo cy'urubuga rwawe
- [Ikiganiro cyo kuvumbura](./discovery-interview.md) — tegura imiterere y'urubuga rwawe
