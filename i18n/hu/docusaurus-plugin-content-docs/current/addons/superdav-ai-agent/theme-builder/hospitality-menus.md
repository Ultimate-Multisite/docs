---
title: Vendéglátó Menüpontok
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Étteremmenük {#hospitality-menus}

A **Hospitality Menus** funkciója lehetővé teszi a Theme Builder számára, hogy strukturált élelmiszer- és italmenüoldalakat generáljon és beépítsen közvetlenül a WordPress weboldalára.

## Áttekintő {#overview}

A Theme Builder most professzionális, strukturált menüoldalakat hoz létre az étyszolgáltatások számára, beleértve a restaurációkat, kávézókat, bárókat és katering szolgáltatásokat. Ezek a menük teljesen összehangoltak a weboldalának dizájnjához, és könnyedén frissíthetők és kezelhetők.

## Támogatott Étyszolgáltatási Típusok {#supported-hospitality-types}

- **Restaurációk** — teljes körű étkezési menük
- **Kávézók** — kávé és könnyű étel menük
- **Bárok és Lounge-ok** — ital és előétel menük
- **Sütőipari egységek** — sütemény és kenyér menük
- **Katering szolgáltatások** — esemény menüopciók
- **Food Truck-ok** — mozgó étel szolgáltatás menük
- **Bárók és Borraktárak** — italmenük leírással

## Menüstruktúra {#menu-structure}

### Menükategóriák {#menu-categories}

A menüket kategóriákba rendezzük:

- **Előétel** — kezdőételek és kis tálak
- **Főételek** — főételek
- **Tálalékok** — kísérőételek és zöldségek
- **Dessert** — édes finomságok
- **Italok** — italok (alkoholos és nem alkoholos)
- **Specials** — napi vagy szezonális ajánlatok

### Menüelem Formátuma {#menu-item-format}

Minden menüelem tartalmazza:

```json
{
  "name": "Grillezett hal",
  "description": "Friss atlantikus hal citrom-vajsoszószással",
  "price": "$24.95",
  "dietary_info": ["Gluténmentes", "Magas fehérjetartalmú"],
  "allergens": ["Hal"],
  "availability": "Napi"
}
```

#### Elemmezők {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Étel vagy ital neve |
| `description` | string | Részletes leírás az elemmel kapcsolatban |
| `price` | string | Ár (valutával formázva) |
| `dietary_info` | array | Diétás attribútumok (Vegán, Gluténmentes, stb.) |
| `allergens` | array | Gyakori allerének (Nagyökerek, Tepcsőzet, stb.) |
| `availability` | string | Mikor elérhető (Napi, Szezonális, stb.) |

## Étyszolgáltatási Menüek Létrehozása {#creating-hospitality-menus}

### 1. Lépés: Adja meg a menü információit {#step-1-provide-menu-information}

Tudassa el a Theme Builder-től a menüjéről:

```
Létrehoz egy olasz étteremmenüt előételekkel,
tésztaételekkel, főételekkel és desszertekkel. Tartalmazza az árakat és leírásokat.
```

### 2. Lépés: A Theme Builder generálja a menüt {#step-2-theme-builder-generates-menu}

A Theme Builder:

1. Létrehoz egy strukturált menüoldalt
2. Dizájnolja úgy, hogy illeszkedjen a weboldalának témájához
3. Kategóriákba rendezi az elemeket
4. Formázza az árakat és leírásokat
5. Ad hozzá diétás és allergenergiás információkat

### 3. Lépés: Felülvizsgálat és Testre szabás {#step-3-review-and-customize}

Ezzel tudja:

1. Szerkíteni a menüelemeket és az árakat
2. Hozzá vagy távolítani kategóriákat
3. Újrarendelni az elemeket a kategóriák között
4. Frissíteni a leírásokat és a diétás információkat
5. Beállítani a stílust és a felépítést

## Menü Megjelenítési Opciók {#menu-display-options}

### Teljes Menüoldal {#full-menu-page}

Egy dedikált oldal, amely a teljes menüjét mutatja:

- Kategóriák szerint rendezett
- Kereshető és szűrhető
- Nyomtatásra alkalmas felépítés
- Mobilra optimalizált dizájn

### Menü Widget {#menu-widget}

Beépíthet menüszekciókat más oldalakra:

- Kiemelt elemek az oldalon
- Napi ajánlatok az oldalsávban
- Italmenü a bároldalon
- Dessert kiállítás a láblécben

### Menü PDF {#menu-pdf}

Generálható letölthető PDF menü:

- Professzionális formázás
- Nyomtatásra kész minőség
- Tartalmaz képeket és leírásokat
- Könnyen megosztható és elküldhető e-mailben

## Diétás és Allergenergiás Információk {#dietary-and-allergen-information}

### Diétás Attribútumok {#dietary-attributes}

Markolja jelölésen az elemeket diétás információkkal:

- **Vegán** — állati termékek nélkül
- **Vegetáriánus** — hús nélkül
- **Gluténmentes** — biztonságos celiaki betegség esetén
- **Tejmentes** — tejtermékek nélkül
- **Nagyökerekmentes** — fa- és térdanyagtok vagy földeménytojások nélkül
- **Alacsony szénhidrát tartalmú** — csökkentált szénhidrát tartalommal
- **Magas fehérjetartalmú** — fehérjetípusú

### Allergenergiás Figyelem {#allergen-warnings}

Tartalmazza a gyakori allerének:

- **Nagyökerek** — fa- és térdanyagtok
- **Tepcsőzet** — tepcsőzetek és molluszkák
- **Hal** — minden halfajta
- **Tej** — tej és tejtermékek
- **Tojás** — csirketi tojás
- **Sójabusz** — sójabusz termékek
- **Glutén** —小麦 és gluténmentes gabonák
- **Mogyoró** — mogyorómag és olaj

## Menőkezelés {#menu-management}

### Árak Frissítése {#updating-prices}

Könnyen frissíthető a menüárak:

1. Navigáljon a menüoldalra
2. Kattasson "Edit Menu" (Menü szerkesztése)
3. Frissítse az árakat az elemeknél
4. Mentse a változásokat
5. A változások azonnal megjelennek a weboldalán

### Szezonális Elemek Hozzáadása {#adding-seasonal-items}

Létrehozható szezonális menüvariációk:

1. Létrehoz egy új menüverziót
2. Adjon hozzá szezonális elemeket
3. Jelölje ki az elemeket "Szezonálisként"
4. Programozza be az elérhetőségi dátumokat
5. Automatikusan megjelenik a szezon alatt

### Specials Kezelése {#managing-specials}

Napi vagy heti ajánlatok megjelenítése:

1. Létrehoz egy "Specials" (Ajánlatok) kategóriát
2. Adjon hozzá elemeket elérhetőségi dátumokkal
3. Kiemeli az ajánlatokat az oldalon
4. Frissíteni napi vagy heti
5. Archiválja az elavult ajánlatokat

## Integráció a Theme Builder-rel {#integration-with-theme-builder}

Ha a Theme Builder-t használja étyszolgáltatási weboldalakhoz:

1. **Automatikus menüfelismerés** — felismeri, hogy étel/italipari vállalkozásról van szó
2. **Menüoldal létrehozása** — generál professzionális menüoldalakat
3. **Dizájn összehangolása** — a menük illeszkednek a weboldalának témájához
4. **Mobil optimalizálás** — a menük szépnek mutatnak a telefonokon
5. **SEO optimalizálás** — a menük keresőmotor-barátok

## Jó Gyakorlatok {#best-practices}

### Menü Dizájnja {#menu-design}

- **Tiszta szerkezet** — logikus kategóriastruktúra
- **Olvasható leírások** — iştkhagyó és tájékoztató
- **Egletes árazás** — világos valuta és formázás
- **Professzionális képek** — magas minőségű élelmiszerképek
- **Fehér tér** — ne túláldozza a lapot

### Tartalom {#content}

- **Pontos leírások** — pontosan írja le az elemeket
- **Kiemelt ajánlatok** — emelje ki az ajánlatokat
- **Allergenek beillesztése** — mindig listázza az allergenergeket
- **Rendszeres frissítés** — tartsa aktuálisak az árakat és az elemeket
- **Iştkhagyó nyelvhasználat** — tegye ki az elemeket finomnak

### Elérhetőség {#accessibility}

- **Olvasható betűtípusok** — használjon világos, könnyen olvasható betűtípusokat
- **Elég kontraszt** — biztosítsa, hogy a szöveg olvasható legyen
- **Diétás címkék** — világosan jelölje ki a diétás opciókat
- **Allergenergiás figyelmeztetések** — emelkedően láthatóan jelenítse meg az allergenergeket
- **Mobilbarát** — tesztelje minden eszközön

## Péletek {#examples}

### Étteremmenü Struktúra {#restaurant-menu-structure}

```
Előétel
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Tésztaételek
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Főételek
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Dessert
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kávézók Menü Struktúra {#cafe-menu-structure}

```
Kávé
├── Espresso
├── Cappuccino
└── Latte

Sütemények
├── Croissants
├── Muffins
└── Scones

Szendvicsek
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Kapcsolódó Funkciók {#related-features}

- [Create Menu](../abilities/create-menu.md) — navigációs menüek létrehozása
- [Design Direction](./design-direction.md) — a weboldal dizájnának testre szabása
- [Discovery Interview](./discovery-interview.md) — a weboldal struktúrájának tervezése
