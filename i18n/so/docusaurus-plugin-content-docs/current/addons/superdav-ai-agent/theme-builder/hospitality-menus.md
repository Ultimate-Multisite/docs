---
title: Liisaska Cuntada ee Martigelinta
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu-yada Martigelinta

Astaanta **Menu-yada Martigelinta** waxay Theme Builder u oggolaanaysaa inuu abuuro oo si toos ah ugu dhex-daro bogag menu cunto iyo cabitaan oo qaabaysan gudaha WordPress site-kaaga.

## Dulmar

Theme Builder hadda wuxuu abuuri karaa bogag menu xirfad leh oo qaabaysan oo loogu talagalay ganacsiyada martigelinta, oo ay ku jiraan makhaayado, kafateeriyo, baarar, iyo adeegyada cunto-karinta munaasabadaha. Menu-yadani si buuxda ayay ugu dhex milmaan naqshadda site-kaaga, waxaana si fudud loo cusboonaysiin karaa loona maamuli karaa.

## Noocyada Martigelinta ee La Taageero

- **Makhaayado** — menu-yada cunto ee adeeg buuxa
- **Kafateeriyo** — menu-yada kafeega iyo cunto fudud
- **Baarar iyo Lounges** — menu-yada cabitaannada iyo cunnooyinka furitaanka
- **Foornooyinka Rootiga iyo Keega** — menu-yada macmacaanka duban iyo rootiga
- **Adeegyada Cunto-karinta Munaasabadaha** — ikhtiyaarrada menu-ga munaasabadaha
- **Baabuurta Cuntada** — menu-yada adeegga cuntada guurguura
- **Warshadaha Biirka iyo Khamriga** — menu-yada cabitaannada oo leh sharraxaado

## Qaab-dhismeedka Menu-ga

### Qaybaha Menu-ga

Menu-yada waxaa loo habeeyaa qaybo:

- **Cunnooyinka Furitaanka** — bilowyo iyo saxanno yaryar
- **Cuntooyinka Waaweyn** — cuntooyinka ugu muhiimsan
- **Raacyada** — raacyo iyo khudaar
- **Macmacaanka** — waxyaabo macaan
- **Cabitaannada** — cabitaanno (khamri leh iyo kuwo aan khamri lahayn)
- **Gaarka ah** — waxyaabo gaar ah oo maalinle ah ama xilliyeed

### Qaabka Shayga Menu-ga

Shay kasta oo menu ah wuxuu ka kooban yahay:

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

#### Goobaha Shayga

| Goob | Nooc | Sharraxaad |
|-------|------|-------------|
| `name` | string | Magaca saxanka ama cabitaanka |
| `description` | string | Sharraxaad faahfaahsan oo ku saabsan shayga |
| `price` | string | Qiimaha (oo lagu qaabeeyey lacag) |
| `dietary_info` | array | Sifooyinka cunto (Vegan, Gluten-Free, iwm.) |
| `allergens` | array | Waxyaabaha caamka ah ee xasaasiyadda keena (Nuts, Shellfish, iwm.) |
| `availability` | string | Goorta la heli karo (Daily, Seasonal, iwm.) |

## Abuurista Menu-yada Martigelinta

### Tallaabada 1: Bixi Macluumaadka Menu-ga

U sheeg Theme Builder waxa ku saabsan menu-gaaga:

```
Abuur menu makhaayad oo loogu talagalay makhaayaddayda Talyaaniga oo leh cunnooyinka furitaanka,
saxanno baasto ah, cuntooyinka waaweyn, iyo macmacaan. Ku dar qiimayaal iyo sharraxaado.
```

### Tallaabada 2: Theme Builder Wuxuu Abuuraa Menu

Theme Builder:

1. Wuxuu abuuraa bog menu oo qaabaysan
2. Wuxuu u naqshadeeyaa si uu ula jaanqaado theme-ka site-kaaga
3. Wuxuu shayada u habeeyaa qaybo
4. Wuxuu qaabeeyaa qiimayaasha iyo sharraxaadaha
5. Wuxuu ku daraa macluumaadka cunto iyo xasaasiyadeed

### Tallaabada 3: Dib u eeg oo Habee

Waad awooddaa:

1. Inaad wax ka beddesho shayada menu-ga iyo qiimayaasha
2. Inaad ku darto ama ka saarto qaybo
3. Inaad dib u kala hormariso shayada gudaha qaybaha
4. Inaad cusboonaysiiso sharraxaadaha iyo macluumaadka cunto
5. Inaad hagaajiso qaabka muuqaalka iyo layout-ka

## Ikhtiyaarrada Muujinta Menu-ga

### Bog Menu Buuxa

Bog gooni ah oo soo bandhigaya menu-gaaga dhammeystiran:

- Waxaa loo habeeyey qaybo
- Waa la raadin karaa lana shaandhayn karaa
- Layout ku habboon daabacaad
- Naqshad mobile-responsive ah

### Menu Widget

Ku dhex-dar qaybaha menu-ga bogag kale:

- Shayada la soo bandhigay ee homepage-ka
- Waxyaabaha gaarka ah ee maalinlaha ah ee sidebar-ka
- Menu-ga cabitaannada ee bogga baarka
- Bandhigga macmacaanka ee footer-ka

### Menu PDF

Abuur menu PDF ah oo la soo dejisan karo:

- Qaabayn xirfad leh
- Tayo diyaar u ah daabacaad
- Waxaa ku jira sawirro iyo sharraxaado
- Si fudud ayaa loo wadaagi karaa loona email-garayn karaa

## Macluumaadka Cunto iyo Xasaasiyadeed

### Sifooyinka Cunto

Ku calaamadee shayada macluumaadka cunto:

- **Vegan** — ma laha waxyaabo xayawaan ka yimid
- **Vegetarian** — ma laha hilib
- **Gluten-Free** — ammaan u ah cudurka celiac
- **Dairy-Free** — ma laha waxyaabo caano ah
- **Nut-Free** — ma laha lowska geedaha ama looska
- **Low-Carb** — karbohaydraytyo la dhimay
- **High-Protein** — borotiin badan leh

### Digniinaha Xasaasiyadda

Ku dar waxyaabaha caamka ah ee xasaasiyadda keena:

- **Nuts** — lowska geedaha iyo looska
- **Shellfish** — qolofoley iyo mollusks
- **Fish** — dhammaan noocyada kalluunka
- **Dairy** — caano iyo waxyaabaha caanaha laga sameeyo
- **Eggs** — ukunta digaagga
- **Soy** — waxyaabaha soy-ga laga sameeyo
- **Gluten** — qamadi iyo badarro gluten leh
- **Sesame** — iniin sisin iyo saliid

## Maamulka Menu-ga

### Cusboonaysiinta Qiimayaasha

Si fudud u cusboonaysii qiimayaasha menu-ga:

1. U gudub bogga menu-ga
2. Guji "Wax ka beddel Menu-ga"
3. Cusboonaysii qiimayaasha shayada
4. Kaydi isbeddellada
5. Isbeddelladu isla markiiba waxay ka muuqdaan site-kaaga

### Ku Darista Shayada Xilliyeed

Abuur kala-duwanaansho menu oo xilliyeed:

1. Abuur nooc menu cusub
2. Ku dar shayo xilliyeed
3. U calaamadee shayada "Xilliyeed"
4. Jadwal u samee taariikhaha helitaanka
5. Si otomaatig ah u soo bandhig inta lagu jiro xilliga

### Maareynta Waxyaabaha Gaarka ah

Soo bandhig waxyaabo gaar ah oo maalinle ah ama toddobaadle ah:

1. Abuur qayb "Waxyaabaha Gaarka ah"
2. Ku dar shayo leh taariikhaha helitaanka
3. Si muuqata ugu muuji waxyaabaha gaarka ah homepage-ka
4. Cusboonaysii maalin kasta ama toddobaad kasta
5. Kaydi waxyaabihii gaarka ahaa ee hore

## Isdhexgalka Theme Builder

Markaad Theme Builder u isticmaalayso site-yada martigelinta:

1. **Ogaanshaha menu-ga ee otomaatiga ah** — wuxuu aqoonsadaa haddii aad tahay ganacsi cunto/cabitaan
2. **Abuurista bogga menu-ga** — wuxuu abuuraa bogag menu xirfad leh
3. **Iswaafajinta naqshadda** — menu-yadu waxay la jaanqaadaan theme-ka site-kaaga
4. **Hagaajinta mobile-ka** — menu-yadu si qurux badan ayay uga muuqdaan taleefannada
5. **Hagaajinta SEO** — menu-yadu waa kuwo u fiican matoorada raadinta

## Hab-dhaqannada Ugu Fiican

### Naqshadda Menu-ga

- **Habaynta cad** — qaab-dhismeed qaybo oo macquul ah
- **Sharraxaado la akhrin karo** — rabitaanka cuntada kiciya oo xog leh
- **Qiimayn joogto ah** — lacag iyo qaabayn cad
- **Sawirro xirfad leh** — sawirro cunto oo tayo sare leh
- **Meel bannaan** — ha buux-dhaafin bogga

### Nuxurka

- **Sharraxaado sax ah** — si sax ah u sharrax shayada
- **Muuji waxyaabaha gaarka ah** — ka dhig waxyaabaha gaarka ah kuwo soo baxa
- **Ku dar waxyaabaha xasaasiyadda keena** — mar walba tax waxyaabaha xasaasiyadda keena
- **Si joogto ah u cusboonaysii** — qiimayaasha iyo shayada ha ahaadaan kuwo hadda jira
- **Adeegso luqad rabitaanka cuntada kicisa** — ka dhig shayada inay u muuqdaan kuwo macaan

### Helitaan

- **Far la akhrin karo** — isticmaal noocyo far oo cad oo si fudud loo akhrin karo
- **Isbarbardhig ku filan** — hubi in qoraalka la akhrin karo
- **Calaamadaha cunto** — si cad u calaamadee ikhtiyaarrada cunto
- **Digniinaha xasaasiyadda** — si muuqata u soo bandhig waxyaabaha xasaasiyadda keena
- **Mobile-friendly** — ku tijaabi dhammaan qalabka

## Tusaalooyin

### Qaab-dhismeedka Menu-ga Makhaayadda

```
Cunto-furayaal
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Saladh Caprese

Cuntooyinka Baastada
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Cuntooyinka Waaweyn
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Macmacaan
├── Tiramisu
├── Panna Cotta
└── Xulashada Gelato
```

### Qaab-dhismeedka Menu-ga Cafe

```
Qaxwo
├── Espresso
├── Cappuccino
└── Latte

Macmacaan duban
├── Croissants
├── Muffins
└── Scones

Sandwich-yo
├── Caprese Panini
├── Smoked Turkey Club
└── Duub Khudradeed
```

## Astaamo La Xiriira

- [Abuur Menu](../abilities/create-menu.md) — abuur menu-yada hagidda
- [Jihada Naqshadeynta](./design-direction.md) — habee naqshadda boggaaga
- [Wareysi Sahamin](./discovery-interview.md) — qorshee qaab-dhismeedka boggaaga
