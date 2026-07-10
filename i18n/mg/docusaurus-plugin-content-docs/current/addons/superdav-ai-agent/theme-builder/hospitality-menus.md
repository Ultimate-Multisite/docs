---
title: Menio ho an'ny Fandraisam-bahiny
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menio ho an'ny fandraisam-bahiny {#hospitality-menus}

Ny endri-javatra **Menio ho an'ny fandraisam-bahiny** dia mamela ny Theme Builder hamorona sy hampiditra pejy menio sakafo sy zava-pisotro voarafitra mivantana ao amin'ny site WordPress-nao.

## Topimaso {#overview}

Afaka mamorona pejy menio matihanina sy voarafitra ho an'ny orinasa fandraisam-bahiny izao ny Theme Builder, anisan'izany ny trano fisakafoana, cafe, bar, ary tolotra catering. Tafiditra tanteraka ao amin'ny famolavolan'ny site-nao ireo menio ireo ary azo havaozina sy tantanana mora foana.

## Karazana fandraisam-bahiny tohanana {#supported-hospitality-types}

- **Trano fisakafoana** — menio fisakafoanana feno tolotra
- **Cafe** — menio kafe sy sakafo maivana
- **Bar sy Lounge** — menio zava-pisotro sy sakafo fanokafana
- **Boulangerie** — menio mofomamy sy mofo
- **Tolotra catering** — safidy menio ho an'ny hetsika
- **Food Truck** — menio tolotra sakafo mandehandeha
- **Brasserie sy toeram-pamokarana divay** — menio zava-pisotro misy famaritana

## Firafitry ny menio {#menu-structure}

### Sokajin'ny menio {#menu-categories}

Voalamina ho sokajy ny menio:

- **Sakafo fanokafana** — sakafo fanombohana sy lovia kely
- **Sakafo lehibe** — sakafo fototra
- **Fanampiny** — sakafo ampiarahina sy legioma
- **Tsindrin-tsakafo** — hanim-py
- **Zava-pisotro** — zava-pisotro (misy alikaola sy tsy misy alikaola)
- **Manokana** — sakafo manokana isan'andro na araka ny vanim-potoana

### Endriky ny singa ao amin'ny menio {#menu-item-format}

Ny singa tsirairay ao amin'ny menio dia ahitana:

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

#### Sahan'ny singa {#item-fields}

| Saha | Karazana | Famaritana |
|-------|------|-------------|
| `name` | string | Anaran'ny sakafo na zava-pisotro |
| `description` | string | Famaritana amin'ny antsipiriany momba ilay singa |
| `price` | string | Vidiny (voarafitra miaraka amin'ny vola) |
| `dietary_info` | array | Toetra ara-tsakafo (Vegan, Gluten-Free, sns.) |
| `allergens` | array | Zavatra mahazatra mahatonga allergy (voanjo, hazandrano akorandriaka, sns.) |
| `availability` | string | Fotoana ahazoana azy (isan'andro, araka ny vanim-potoana, sns.) |

## Famoronana menio ho an'ny fandraisam-bahiny {#creating-hospitality-menus}

### Dingana 1: Omeo fampahalalana momba ny menio {#step-1-provide-menu-information}

Lazao amin'ny Theme Builder ny momba ny menio-nao:

```
Mamoròna menio trano fisakafoana ho an'ny trano fisakafoana italiana-ko misy sakafo fanokafana,
sakafo pasta, sakafo lehibe, ary tsindrin-tsakafo. Ampidiro ny vidiny sy ny famaritana.
```

### Dingana 2: Mamorona menio ny Theme Builder {#step-2-theme-builder-generates-menu}

Ny Theme Builder dia:

1. Mamorona pejy menio voarafitra
2. Mamolavola azy hifanaraka amin'ny theme an'ny site-nao
3. Mandamina ireo singa ho sokajy
4. Mandrafitra ny vidiny sy ny famaritana
5. Manampy fampahalalana ara-tsakafo sy allergen

### Dingana 3: Avereno jerena ary ampanjifao {#step-3-review-and-customize}

Afaka:

1. Manitsy singa sy vidiny ao amin'ny menio
2. Manampy na manala sokajy
3. Mandamina indray ireo singa ao anatin'ny sokajy
4. Manavao famaritana sy fampahalalana ara-tsakafo
5. Manitsy ny styling sy ny layout

## Safidy fampisehoana menio {#menu-display-options}

### Pejy menio feno {#full-menu-page}

Pejy natokana mampiseho ny menio feno anao:

- Voalamina araka ny sokajy
- Azo karohina sy sivanina
- Layout mety amin'ny fanontana
- Famolavolana mamaly amin'ny finday

### Widget menio {#menu-widget}

Ampidiro amin'ny pejy hafa ny fizarana menio:

- Singa asongadina amin'ny pejy fandraisana
- Sakafo manokana isan'andro amin'ny sidebar
- Menio zava-pisotro amin'ny pejy bar
- Fampisehoana tsindrin-tsakafo amin'ny footer

### PDF menio {#menu-pdf}

Mamoròna menio PDF azo alaina:

- Fandrafetana matihanina
- Kalitao vonona hatao printy
- Ahitana sary sy famaritana
- Mora zaraina sy alefa amin'ny email

## Fampahalalana ara-tsakafo sy allergen {#dietary-and-allergen-information}

### Toetra ara-tsakafo {#dietary-attributes}

Mariho amin'ny fampahalalana ara-tsakafo ireo singa:

- **Vegan** — tsy misy vokatra avy amin'ny biby
- **Vegetarian** — tsy misy hena
- **Gluten-Free** — azo antoka ho an'ny aretina celiac
- **Dairy-Free** — tsy misy vokatra ronono
- **Nut-Free** — tsy misy voanjo avy amin'ny hazo na voanjo tany
- **Low-Carb** — karbohidraty nahena
- **High-Protein** — be proteinina

### Fampitandremana allergen {#allergen-warnings}

Ampidiro ireo allergen mahazatra:

- **Voanjo** — voanjo avy amin'ny hazo sy voanjo tany
- **Hazandrano akorandriaka** — crustacea sy mollusque
- **Trondro** — karazan-trondro rehetra
- **Ronono** — ronono sy vokatra ronono
- **Atody** — atodin'akoho
- **Soja** — vokatra soja
- **Gluten** — varimbazaha sy voamaina misy gluten
- **Sesame** — voan'ny sesame sy menaka sesame

## Fitantanana menio {#menu-management}

### Fanavaozana vidiny {#updating-prices}

Havaozy mora foana ny vidin'ny menio:

1. Mankanesa amin'ny pejy menio
2. Tsindrio "Hanova Menio"
3. Havaozy ny vidin'ireo singa
4. Tehirizo ny fanovana
5. Miseho avy hatrany amin'ny site-nao ny fanovana

### Fanampiana singa araka ny vanim-potoana {#adding-seasonal-items}

Mamoròna fiovaovan'ny menio araka ny vanim-potoana:

1. Mamoròna kinova menio vaovao
2. Manampia singa araka ny vanim-potoana
3. Mariho ho "Araka ny vanim-potoana" ireo singa
4. Farito ny daty ahazoana azy
5. Asehoy ho azy mandritra ny vanim-potoana

### Fitantanana sakafo manokana {#managing-specials}

Asehoy ny sakafo manokana isan'andro na isan-kerinandro:

1. Mamoròna sokajy "Sakafo manokana"
2. Manampia singa misy daty ahazoana azy
3. Asongadino amin'ny pejy fandraisana ny sakafo manokana
4. Havaozy isan'andro na isan-kerinandro
5. Ataovy archive ny sakafo manokana taloha

## Fifandraisana amin'ny Theme Builder {#integration-with-theme-builder}

Rehefa mampiasa Theme Builder ho an'ny site fandraisam-bahiny:

1. **Famantarana menio mandeha ho azy** — mamantatra raha orinasa sakafo/zava-pisotro ianao
2. **Famoronana pejy menio** — mamorona pejy menio matihanina
3. **Fampifanarahana famolavolana** — mifanaraka amin'ny theme an'ny site-nao ny menio
4. **Fanatsarana ho an'ny finday** — miseho tsara amin'ny finday ny menio
5. **Fanatsarana SEO** — sariaka amin'ny milina fikarohana ny menio

## Fomba fanao tsara indrindra {#best-practices}

### Famolavolana menio {#menu-design}

- **Fandaminana mazava** — rafitra sokajy lojika
- **Famaritana mora vakina** — mampilendalenda sy manome fampahalalana
- **Vidiny mitovy endrika** — vola sy fandrafetana mazava
- **Sary matihanina** — sary sakafo avo kalitao
- **Elanelana fotsy** — aza atao feno loatra ny pejy

### Votoaty {#content}

- **Famaritana marina** — farito marina ireo singa
- **Asongadino ny manokana** — ataovy miavaka ny sakafo manokana
- **Ampidiro ny allergen** — tanisao foana ny allergen
- **Havaozy tsy tapaka** — ataovy vaovao ny vidiny sy ny singa
- **Mampiasà fiteny mampilendalenda** — ataovy toa matsiro ireo singa

### Fahazoan'ny rehetra miditra {#accessibility}

- **Endri-tsoratra mora vakina** — mampiasà typefaces mazava sy mora vakina
- **Fifanohitra ampy** — ataovy azo vakina ny lahatsoratra
- **Marika ara-tsakafo** — mariho mazava ireo safidy ara-tsakafo
- **Fampitandremana allergen** — asehoy amin'ny toerana mora hita ny allergen
- **Mety amin'ny finday** — andramo amin'ny fitaovana rehetra

## Ohatra {#examples}

### Firafitry ny menio trano fisakafoana {#restaurant-menu-structure}

```
Sakafo fanokafana
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salady Caprese

Sakafo paty
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Sakafo fototra
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Tsindrin-tsakafo
├── Tiramisu
├── Panna Cotta
└── Safidy Gelato
```

### Firafitry ny Menu an'ny kafe {#cafe-menu-structure}

```
Kafe
├── Espresso
├── Cappuccino
└── Latte

Mofomamy
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Endri-javatra mifandraika {#related-features}

- [Mamorona Menu](../abilities/create-menu.md) — mamorona menus fitetezana
- [Torolalana momba ny famolavolana](./design-direction.md) — ampanjifao ny famolavolan'ny tranonkalanao
- [Dinidinika fikarohana](./discovery-interview.md) — amboary drafitra ny firafitry ny tranonkalanao
