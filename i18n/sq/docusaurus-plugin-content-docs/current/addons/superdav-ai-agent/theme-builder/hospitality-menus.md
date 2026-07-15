---
title: Menu të mikpritjes
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menutë e Hospitality

Veçoria **Hospitality Menus** i lejon Theme Builder të gjenerojë dhe të integrojë faqe të strukturuara menush ushqimi dhe pijesh drejtpërdrejt në faqen tuaj WordPress.

## Përmbledhje {#overview}

Theme Builder tani mund të krijojë faqe menush profesionale dhe të strukturuara për biznese hospitality, duke përfshirë restorante, kafene, bare dhe shërbime kateringu. Këto menu janë plotësisht të integruara në dizajnin e faqes suaj dhe mund të përditësohen e menaxhohen lehtësisht.

## Llojet e mbështetura të Hospitality {#supported-hospitality-types}

- **Restorante** — menu ngrënieje me shërbim të plotë
- **Kafene** — menu kafeje dhe ushqimesh të lehta
- **Bare dhe Lounges** — menu pijesh dhe mezeje
- **Furra buke** — menu ëmbëlsirash dhe buke
- **Shërbime kateringu** — opsione menush për evente
- **Food Trucks** — menu shërbimi ushqimor mobil
- **Birrari dhe kantina vere** — menu pijesh me përshkrime

## Struktura e menusë {#menu-structure}

### Kategoritë e menusë {#menu-categories}

Menutë organizohen në kategori:

- **Meze** — pjata hyrëse dhe pjata të vogla
- **Pjata kryesore** — kurse kryesore
- **Garnitura** — shoqërime dhe perime
- **Ëmbëlsira** — ëmbëlsira të shijshme
- **Pije** — pije (alkoolike dhe joalkoolike)
- **Speciale** — oferta ditore ose sezonale

### Formati i artikullit të menusë {#menu-item-format}

Çdo artikull menuje përfshin:

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

#### Fushat e artikullit {#item-fields}

| Fusha | Lloji | Përshkrimi |
|-------|------|-------------|
| `name` | string | Emri i pjatës ose pijes |
| `description` | string | Përshkrim i detajuar i artikullit |
| `price` | string | Çmimi (i formatuar me monedhë) |
| `dietary_info` | array | Atribute dietike (Vegan, Pa gluten, etj.) |
| `allergens` | array | Alergjenë të zakonshëm (arra, fruta deti me guaskë, etj.) |
| `availability` | string | Kur është i disponueshëm (çdo ditë, sezonal, etj.) |

## Krijimi i Hospitality Menus {#creating-hospitality-menus}

### Hapi 1: Jepni informacionin e menusë {#step-1-provide-menu-information}

Tregojini Theme Builder për menunë tuaj:

```
Krijo një menu restoranti për restorantin tim italian me meze,
pjata me pasta, pjata kryesore dhe ëmbëlsira. Përfshi çmime dhe përshkrime.
```

### Hapi 2: Theme Builder gjeneron menunë {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Krijon një faqe menuje të strukturuar
2. E dizajnon që të përputhet me temën e faqes suaj
3. Organizon artikujt në kategori
4. Formaton çmimet dhe përshkrimet
5. Shton informacion dietik dhe për alergjenët

### Hapi 3: Rishikoni dhe personalizoni {#step-3-review-and-customize}

Mund të:

1. Redaktoni artikujt e menusë dhe çmimet
2. Shtoni ose hiqni kategori
3. Riorganizoni artikujt brenda kategorive
4. Përditësoni përshkrimet dhe informacionin dietik
5. Rregulloni stilimin dhe paraqitjen

## Opsionet e shfaqjes së menusë {#menu-display-options}

### Faqe e plotë menuje {#full-menu-page}

Një faqe e dedikuar që shfaq menunë tuaj të plotë:

- E organizuar sipas kategorisë
- E kërkueshme dhe e filtrueshme
- Paraqitje e përshtatshme për printim
- Dizajn i përshtatshëm për pajisje mobile

### Widget menuje {#menu-widget}

Integroni seksione menuje në faqe të tjera:

- Artikuj të veçuar në faqen kryesore
- Speciale ditore në sidebar
- Menu pijesh në faqen e barit
- Prezantim ëmbëlsirash në footer

### PDF menuje {#menu-pdf}

Gjeneroni një menu PDF të shkarkueshme:

- Formatim profesional
- Cilësi gati për printim
- Përfshin imazhe dhe përshkrime
- E lehtë për t’u ndarë dhe dërguar me email

## Informacion dietik dhe për alergjenët {#dietary-and-allergen-information}

### Atributet dietike {#dietary-attributes}

Shënoni artikujt me informacion dietik:

- **Vegan** — pa produkte shtazore
- **Vegjetarian** — pa mish
- **Pa gluten** — i sigurt për sëmundjen celiake
- **Pa bulmet** — pa produkte qumështi
- **Pa arra** — pa arra pemësh ose kikirikë
- **Me pak karbohidrate** — karbohidrate të reduktuara
- **Me shumë proteina** — i pasur me proteina

### Paralajmërimet për alergjenët {#allergen-warnings}

Përfshini alergjenë të zakonshëm:

- **Arra** — arra pemësh dhe kikirikë
- **Fruta deti me guaskë** — krustace dhe molusqe
- **Peshk** — të gjitha llojet e peshkut
- **Bulmet** — qumësht dhe produkte qumështi
- **Vezë** — vezë pule
- **Sojë** — produkte soje
- **Gluten** — grurë dhe drithëra që përmbajnë gluten
- **Susam** — fara dhe vaj susami

## Menaxhimi i menusë {#menu-management}

### Përditësimi i çmimeve {#updating-prices}

Përditësoni lehtësisht çmimet e menusë:

1. Shkoni te faqja e menusë
2. Klikoni "Redakto menunë"
3. Përditësoni çmimet për artikujt
4. Ruani ndryshimet
5. Ndryshimet shfaqen menjëherë në faqen tuaj

### Shtimi i artikujve sezonalë {#adding-seasonal-items}

Krijoni variante sezonale të menusë:

1. Krijoni një version të ri menuje
2. Shtoni artikuj sezonalë
3. Shënoni artikujt si "Sezonalë"
4. Planifikoni datat e disponueshmërisë
5. Shfaqini automatikisht gjatë sezonit

### Menaxhimi i specialeve {#managing-specials}

Shfaqni speciale ditore ose javore:

1. Krijoni një kategori "Speciale"
2. Shtoni artikuj me data disponueshmërie
3. Theksoni specialet në faqen kryesore
4. Përditësoni çdo ditë ose çdo javë
5. Arkivoni specialet e vjetra

## Integrimi me Theme Builder {#integration-with-theme-builder}

Kur përdorni Theme Builder për faqe hospitality:

1. **Zbulim automatik i menusë** — identifikon nëse jeni biznes ushqimi/pijesh
2. **Krijim faqeje menuje** — gjeneron faqe profesionale menush
3. **Përputhje dizajni** — menutë përputhen me temën e faqes suaj
4. **Optimizim për pajisje mobile** — menutë shfaqen bukur në telefona
5. **Optimizim SEO** — menutë janë miqësore për motorët e kërkimit

## Praktikat më të mira {#best-practices}

### Dizajni i menusë {#menu-design}

- **Organizim i qartë** — strukturë logjike kategorish
- **Përshkrime të lexueshme** — të shijshme dhe informuese
- **Çmime të qëndrueshme** — monedhë dhe formatim i qartë
- **Foto profesionale** — imazhe ushqimi me cilësi të lartë
- **Hapësirë e bardhë** — mos e mbingarkoni faqen

### Përmbajtja {#content}

- **Përshkrime të sakta** — përshkruani artikujt saktë
- **Theksoni specialet** — bëjini specialet të bien në sy
- **Përfshini alergjenët** — listoni gjithmonë alergjenët
- **Përditësoni rregullisht** — mbani çmimet dhe artikujt aktualë
- **Përdorni gjuhë të shijshme** — bëjini artikujt të tingëllojnë të shijshëm

### Aksesueshmëria {#accessibility}

- **Fonte të lexueshme** — përdorni shkronja të qarta dhe të lexueshme
- **Kontrast i mjaftueshëm** — sigurohuni që teksti të jetë i lexueshëm
- **Etiketa dietike** — shënoni qartë opsionet dietike
- **Paralajmërime për alergjenët** — shfaqni dukshëm alergjenët
- **Miqësore për pajisje mobile** — testoni në të gjitha pajisjet

## Shembuj {#examples}

### Struktura e menusë së restorantit {#restaurant-menu-structure}

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

### Struktura e menusë së kafenesë {#cafe-menu-structure}

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

## Veçori të lidhura {#related-features}

- [Krijo menu](../abilities/create-menu.md) — krijoni menu navigimi
- [Drejtimi i dizajnit](./design-direction.md) — personalizoni dizajnin e faqes suaj
- [Intervista e zbulimit](./discovery-interview.md) — planifikoni strukturën e faqes suaj
