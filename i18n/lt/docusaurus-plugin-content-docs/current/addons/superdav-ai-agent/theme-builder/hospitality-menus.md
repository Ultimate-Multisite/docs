---
title: Svetingumo meniu
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Svetingumo meniu {#hospitality-menus}

**Svetingumo meniu** funkcija leidžia Theme Builder generuoti ir įterpti struktūruotus maisto ir gėrimų meniu puslapius tiesiai į jūsų WordPress svetainę.

## Apžvalga {#overview}

Theme Builder dabar gali kurti profesionalius, struktūruotus meniu puslapius svetingumo verslams, įskaitant restoranus, kavines, barus ir maitinimo paslaugas. Šie meniu yra visiškai integruoti į jūsų svetainės dizainą ir gali būti lengvai atnaujinami bei valdomi.

## Palaikomi svetingumo tipai {#supported-hospitality-types}

- **Restoranai** — pilno aptarnavimo maitinimo meniu
- **Kavinės** — kavos ir lengvų patiekalų meniu
- **Barai ir lounge** — gėrimų ir užkandžių meniu
- **Kepyklos** — kepinių ir duonos meniu
- **Maitinimo paslaugos** — renginių meniu parinktys
- **Maisto sunkvežimiai** — mobilių maisto paslaugų meniu
- **Alaus daryklos ir vyninės** — gėrimų meniu su aprašymais

## Meniu struktūra {#menu-structure}

### Meniu kategorijos {#menu-categories}

Meniu suskirstomi į kategorijas:

- **Užkandžiai** — užkandžiai ir mažos lėkštės
- **Pagrindiniai patiekalai** — pagrindiniai valgiai
- **Garnyrai** — priedai ir daržovės
- **Desertai** — saldūs skanėstai
- **Gėrimai** — gėrimai (alkoholiniai ir nealkoholiniai)
- **Specialūs pasiūlymai** — dienos ar sezoniniai pasiūlymai

### Meniu elemento formatas {#menu-item-format}

Kiekvienas meniu elementas apima:

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

#### Elemento laukai {#item-fields}

| Laukas | Tipas | Aprašymas |
|-------|------|-------------|
| `name` | string | Patiekalo arba gėrimo pavadinimas |
| `description` | string | Išsamus elemento aprašymas |
| `price` | string | Kaina (suformatuota su valiuta) |
| `dietary_info` | array | Mitybos atributai (veganiškas, be glitimo ir t. t.) |
| `allergens` | array | Dažni alergenai (riešutai, vėžiagyviai ir t. t.) |
| `availability` | string | Kada pasiekiama (kasdien, sezoniškai ir t. t.) |

## Svetingumo meniu kūrimas {#creating-hospitality-menus}

### 1 veiksmas: pateikite meniu informaciją {#step-1-provide-menu-information}

Papasakokite Theme Builder apie savo meniu:

```
Sukurk restorano meniu mano itališkam restoranui su užkandžiais,
makaronų patiekalais, pagrindiniais patiekalais ir desertais. Įtrauk kainas ir aprašymus.
```

### 2 veiksmas: Theme Builder sugeneruoja meniu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Sukuria struktūruotą meniu puslapį
2. Sukuria dizainą, atitinkantį jūsų svetainės temą
3. Suskirsto elementus į kategorijas
4. Suformatuoja kainas ir aprašymus
5. Prideda mitybos ir alergenų informaciją

### 3 veiksmas: peržiūrėkite ir pritaikykite {#step-3-review-and-customize}

Galite:

1. Redaguoti meniu elementus ir kainas
2. Pridėti arba pašalinti kategorijas
3. Pertvarkyti elementus kategorijose
4. Atnaujinti aprašymus ir mitybos informaciją
5. Koreguoti stilių ir išdėstymą

## Meniu rodymo parinktys {#menu-display-options}

### Visas meniu puslapis {#full-menu-page}

Specialus puslapis, kuriame rodomas visas jūsų meniu:

- Suskirstytas pagal kategoriją
- Ieškomas ir filtruojamas
- Spausdinimui patogus išdėstymas
- Mobiliesiems pritaikytas dizainas

### Meniu valdiklis {#menu-widget}

Įterpkite meniu skyrius kituose puslapiuose:

- Išskirtiniai elementai pagrindiniame puslapyje
- Dienos pasiūlymai šoninėje juostoje
- Gėrimų meniu baro puslapyje
- Desertų vitrina poraštėje

### Meniu PDF {#menu-pdf}

Sugeneruokite atsisiunčiamą PDF meniu:

- Profesionalus formatavimas
- Spausdinimui paruošta kokybė
- Įtraukiami vaizdai ir aprašymai
- Lengva bendrinti ir siųsti el. paštu

## Mitybos ir alergenų informacija {#dietary-and-allergen-information}

### Mitybos atributai {#dietary-attributes}

Pažymėkite elementus mitybos informacija:

- **Veganiškas** — be gyvūninės kilmės produktų
- **Vegetariškas** — be mėsos
- **Be glitimo** — saugu sergant celiakija
- **Be pieno produktų** — be pieno produktų
- **Be riešutų** — be medžių riešutų ar žemės riešutų
- **Mažai angliavandenių** — sumažintas angliavandenių kiekis
- **Daug baltymų** — gausu baltymų

### Alergenų įspėjimai {#allergen-warnings}

Įtraukite dažnus alergenus:

- **Riešutai** — medžių riešutai ir žemės riešutai
- **Vėžiagyviai ir moliuskai** — vėžiagyviai ir moliuskai
- **Žuvis** — visos žuvų rūšys
- **Pieno produktai** — pienas ir pieno produktai
- **Kiaušiniai** — vištų kiaušiniai
- **Soja** — sojos produktai
- **Glitimas** — kviečiai ir glitimo turintys grūdai
- **Sezamas** — sezamo sėklos ir aliejus

## Meniu valdymas {#menu-management}

### Kainų atnaujinimas {#updating-prices}

Lengvai atnaujinkite meniu kainas:

1. Eikite į meniu puslapį
2. Spustelėkite „Redaguoti meniu“
3. Atnaujinkite elementų kainas
4. Išsaugokite pakeitimus
5. Pakeitimai iškart pasirodo jūsų svetainėje

### Sezoninių elementų pridėjimas {#adding-seasonal-items}

Kurkite sezonines meniu variacijas:

1. Sukurkite naują meniu versiją
2. Pridėkite sezoninių elementų
3. Pažymėkite elementus kaip „Sezoniniai“
4. Suplanuokite pasiekiamumo datas
5. Automatiškai rodykite sezono metu

### Specialių pasiūlymų valdymas {#managing-specials}

Rodykite dienos ar savaitės pasiūlymus:

1. Sukurkite „Specialūs pasiūlymai“ kategoriją
2. Pridėkite elementų su pasiekiamumo datomis
3. Paryškinkite pasiūlymus pagrindiniame puslapyje
4. Atnaujinkite kasdien arba kas savaitę
5. Archyvuokite senus pasiūlymus

## Integracija su Theme Builder {#integration-with-theme-builder}

Naudojant Theme Builder svetingumo svetainėms:

1. **Automatinis meniu aptikimas** — nustato, ar esate maisto / gėrimų verslas
2. **Meniu puslapio kūrimas** — generuoja profesionalius meniu puslapius
3. **Dizaino atitikimas** — meniu atitinka jūsų svetainės temą
4. **Mobilusis optimizavimas** — meniu gražiai rodomi telefonuose
5. **SEO optimizavimas** — meniu yra draugiški paieškos sistemoms

## Geriausios praktikos {#best-practices}

### Meniu dizainas {#menu-design}

- **Aiški organizacija** — logiška kategorijų struktūra
- **Skaitomi aprašymai** — apetitą keliantys ir informatyvūs
- **Nuosekli kainodara** — aiški valiuta ir formatavimas
- **Profesionalios nuotraukos** — aukštos kokybės maisto vaizdai
- **Baltoji erdvė** — neperkraukite puslapio

### Turinys {#content}

- **Tikslūs aprašymai** — tiksliai apibūdinkite elementus
- **Paryškinkite pasiūlymus** — pasirūpinkite, kad pasiūlymai išsiskirtų
- **Įtraukite alergenus** — visada nurodykite alergenus
- **Reguliariai atnaujinkite** — palaikykite kainas ir elementus aktualius
- **Naudokite apetitą keliančią kalbą** — pateikite elementus taip, kad jie skambėtų gardžiai

### Prieinamumas {#accessibility}

- **Skaitomi šriftai** — naudokite aiškius, įskaitomus šriftus
- **Pakankamas kontrastas** — užtikrinkite, kad tekstas būtų skaitomas
- **Mitybos etiketės** — aiškiai pažymėkite mitybos parinktis
- **Alergenų įspėjimai** — matomai rodykite alergenus
- **Draugiška mobiliesiems** — testuokite visuose įrenginiuose

## Pavyzdžiai {#examples}

### Restorano meniu struktūra {#restaurant-menu-structure}

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

### Kavinės meniu struktūra {#cafe-menu-structure}

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

## Susijusios funkcijos {#related-features}

- [Kurti meniu](../abilities/create-menu.md) — kurkite navigacijos meniu
- [Dizaino kryptis](./design-direction.md) — tinkinkite savo svetainės dizainą
- [Atrankinis pokalbis](./discovery-interview.md) — planuokite savo svetainės struktūrą
