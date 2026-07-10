---
title: Cov Ntawv Qhia Rau Kev Tos Txais Qhua
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Cov Menu Rau Kev Tos Qhua {#hospitality-menus}

Qhov feature **Cov Menu Rau Kev Tos Qhua** tso cai rau Theme Builder tsim thiab embed cov nplooj menu zaub mov thiab dej haus uas muaj qauv ncaj qha rau hauv koj lub WordPress site.

## Kev Saib Dav {#overview}

Theme Builder tam sim no tsim tau cov nplooj menu uas zoo li kws tshaj lij thiab muaj qauv rau cov lag luam tos qhua xws li khw noj mov, cafes, bars, thiab kev pab catering. Cov menu no sib xyaw tag nrho rau hauv koj site tus qauv tsim thiab hloov kho nrog tswj tau yooj yim.

## Hom Kev Tos Qhua Uas Txhawb {#supported-hospitality-types}

- **Khw noj mov** — cov menu noj mov puv kev pabcuam
- **Cafes** — cov menu kas fes thiab khoom noj me
- **Bars thiab Lounges** — cov menu dej haus thiab khoom noj qhib plab
- **Bakeries** — cov menu ncuav qab zib thiab qhob cij
- **Kev Pab Catering** — cov kev xaiv menu rau kev lom zem
- **Food Trucks** — cov menu kev pab zaub mov txawb chaw
- **Breweries thiab Wineries** — cov menu dej haus nrog lus piav qhia

## Qauv Menu {#menu-structure}

### Pawg Menu {#menu-categories}

Cov menu raug teeb kom muaj pawg:

- **Khoom noj qhib plab** — khoom pib noj thiab tais me
- **Zaub mov tseem ceeb** — cov tais loj
- **Khoom noj nrog tais loj** — khoom noj ntxiv thiab zaub
- **Khoom qab zib** — khoom qab zib qab
- **Dej haus** — dej haus (muaj cawv thiab tsis muaj cawv)
- **Yam tshwj xeeb** — yam tshwj xeeb txhua hnub lossis raws caij nyoog

### Hom Ntawv Rau Yam Hauv Menu {#menu-item-format}

Txhua yam hauv menu muaj:

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

#### Cov Field Ntawm Yam Khoom {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Lub npe tais zaub mov lossis dej haus |
| `description` | string | Lus piav qhia ntxaws txog yam khoom |
| `price` | string | Tus nqi (format nrog txiaj) |
| `dietary_info` | array | Cov yam ntxwv kev noj haus (Vegan, Gluten-Free, thiab lwm yam) |
| `allergens` | array | Cov ua xua uas pom ntau (Nuts, Shellfish, thiab lwm yam) |
| `availability` | string | Thaum twg muaj (Txhua hnub, Raws caij nyoog, thiab lwm yam) |

## Tsim Cov Menu Rau Kev Tos Qhua {#creating-hospitality-menus}

### Kauj Ruam 1: Muab Cov Ntaub Ntawv Menu {#step-1-provide-menu-information}

Qhia Theme Builder txog koj menu:

```
Tsim ib lub menu khw noj mov rau kuv lub khw noj mov Italian nrog khoom noj qhib plab,
cov tais pasta, zaub mov tseem ceeb, thiab khoom qab zib. Muab tus nqi thiab lus piav qhia nrog.
```

### Kauj Ruam 2: Theme Builder Tsim Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Tsim ib nplooj menu uas muaj qauv
2. Tsim kom phim koj site tus theme
3. Teeb cov khoom rau hauv pawg
4. Format cov nqi thiab lus piav qhia
5. Ntxiv ntaub ntawv kev noj haus thiab ua xua

### Kauj Ruam 3: Tshuaj Xyuas Thiab Kho Kom Haum {#step-3-review-and-customize}

Koj tuaj yeem:

1. Kho cov khoom hauv menu thiab tus nqi
2. Ntxiv lossis tshem pawg
3. Rov teem cov khoom hauv cov pawg
4. Hloov kho lus piav qhia thiab ntaub ntawv kev noj haus
5. Kho styling thiab layout

## Kev Xaiv Rau Kev Tso Menu Pom {#menu-display-options}

### Nplooj Menu Tag Nrho {#full-menu-page}

Ib nplooj tshwj xeeb uas tso koj menu tag nrho pom:

- Teeb raws pawg
- Tshawb tau thiab lim tau
- Layout zoo rau luam tawm
- Tus qauv tsim teb tau rau mobile

### Menu Widget {#menu-widget}

Embed cov ntu menu rau lwm nplooj:

- Cov khoom nthuav qhia rau homepage
- Yam tshwj xeeb txhua hnub rau sidebar
- Menu dej haus rau nplooj bar
- Kev nthuav qhia khoom qab zib rau footer

### Menu PDF {#menu-pdf}

Tsim ib lub menu PDF uas download tau:

- Formatting zoo li kws tshaj lij
- Zoo txaus npaj luam tawm
- Muaj duab thiab lus piav qhia
- Yooj yim share thiab email

## Ntaub Ntawv Kev Noj Haus Thiab Ua Xua {#dietary-and-allergen-information}

### Cov Yam Ntxwv Kev Noj Haus {#dietary-attributes}

Cim cov khoom nrog ntaub ntawv kev noj haus:

- **Vegan** — tsis muaj khoom tsiaj
- **Vegetarian** — tsis muaj nqaij
- **Gluten-Free** — nyab xeeb rau celiac disease
- **Dairy-Free** — tsis muaj khoom mis
- **Nut-Free** — tsis muaj txiv ntoo ntoo lossis txiv laum huab xeeb
- **Low-Carb** — txo carbohydrates
- **High-Protein** — muaj protein ntau

### Kev Ceeb Toom Ua Xua {#allergen-warnings}

Muab cov ua xua uas pom ntau:

- **Nuts** — txiv ntoo ntoo thiab txiv laum huab xeeb
- **Shellfish** — crustaceans thiab mollusks
- **Fish** — txhua hom ntses
- **Dairy** — mis thiab khoom mis
- **Eggs** — qe qaib
- **Soy** — khoom soy
- **Gluten** — nplej thiab cov noob qoob loo uas muaj gluten
- **Sesame** — noob sesame thiab roj

## Kev Tswj Menu {#menu-management}

### Hloov Kho Tus Nqi {#updating-prices}

Hloov kho cov nqi menu tau yooj yim:

1. Mus rau nplooj menu
2. Nyem "Kho Menu"
3. Hloov kho tus nqi rau cov khoom
4. Save cov kev hloov
5. Cov kev hloov tshwm tam sim ntawd rau koj site

### Ntxiv Cov Khoom Raws Caij Nyoog {#adding-seasonal-items}

Tsim cov kev hloov menu raws caij nyoog:

1. Tsim ib version menu tshiab
2. Ntxiv cov khoom raws caij nyoog
3. Cim cov khoom tias yog "Raws caij nyoog"
4. Teem hnub muaj
5. Tso pom yam tsis siv neeg thaum txog caij

### Tswj Yam Tshwj Xeeb {#managing-specials}

Tso yam tshwj xeeb txhua hnub lossis txhua lub lim tiam pom:

1. Tsim ib pawg "Yam Tshwj Xeeb"
2. Ntxiv cov khoom nrog hnub muaj
3. Ua kom yam tshwj xeeb nổi nyob rau homepage
4. Hloov kho txhua hnub lossis txhua lub lim tiam
5. Khaws cov yam tshwj xeeb qub cia hauv archive

## Kev Sib Xyaw Nrog Theme Builder {#integration-with-theme-builder}

Thaum siv Theme Builder rau hospitality sites:

1. **Nrhiav menu yam tsis siv neeg** — paub seb koj puas yog lag luam zaub mov/dej haus
2. **Tsim nplooj menu** — tsim cov nplooj menu zoo li kws tshaj lij
3. **Kev phim qauv tsim** — cov menu phim koj site tus theme
4. **Kev kho kom zoo rau mobile** — cov menu tso pom zoo nkauj rau hauv xov tooj
5. **Kev kho kom zoo rau SEO** — cov menu haum rau search engine

## Cov Kev Xyaum Zoo Tshaj {#best-practices}

### Qauv Tsim Menu {#menu-design}

- **Kev teeb meej** — qauv pawg uas muaj laj thawj
- **Lus piav qhia nyeem tau** — ntxim qab thiab muaj ntaub ntawv
- **Tus nqi sib xws** — txiaj thiab formatting meej
- **Duab zoo li kws tshaj lij** — duab zaub mov zoo siab
- **Chaw dawb** — tsis txhob muab nplooj ntim dhau

### Cov Ntsiab Lus {#content}

- **Lus piav qhia raug** — piav cov khoom kom raug
- **Nthuav qhia yam tshwj xeeb** — ua kom yam tshwj xeeb sawv tawm
- **Muab ua xua nrog** — ib txwm teev cov ua xua
- **Hloov kho tsis tu ncua** — khaws cov nqi thiab cov khoom kom tshiab
- **Siv lus ua kom qab los noj** — ua kom cov khoom suab qab heev

### Kev Nkag Tau Siv {#accessibility}

- **Fonts nyeem tau** — siv typefaces meej thiab nyeem yooj yim
- **Contrast txaus** — xyuas kom text nyeem tau
- **Labels kev noj haus** — cim cov kev xaiv kev noj haus kom meej
- **Kev ceeb toom ua xua** — tso cov ua xua kom pom tseeb
- **Haum rau mobile** — sim rau txhua yam device

## Piv Txwv {#examples}

### Qauv Menu Khw Noj Mov {#restaurant-menu-structure}

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

### Qauv txheej txheem Menu hauv Cafe {#cafe-menu-structure}

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

## Cov yam ntxwv muaj feem xyuam {#related-features}

- [Tsim Menu](../abilities/create-menu.md) — tsim cov menu coj kev
- [Kev taw qhia tsim qauv](./design-direction.md) — kho lub tsim qauv ntawm koj lub vev xaib
- [Kev xam phaj tshawb nrhiav](./discovery-interview.md) — npaj qauv txheej txheem ntawm koj lub vev xaib
