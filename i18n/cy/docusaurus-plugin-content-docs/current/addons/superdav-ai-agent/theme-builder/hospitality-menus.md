---
title: Bwydlenni Lletygarwch
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Bwydlenni Lletygarwch

Mae’r nodwedd **Bwydlenni Lletygarwch** yn caniatáu i Theme Builder gynhyrchu ac ymgorffori tudalennau bwydlenni bwyd a diod strwythuredig yn uniongyrchol i’ch safle WordPress.

## Trosolwg

Gall Theme Builder bellach greu tudalennau bwydlenni proffesiynol, strwythuredig ar gyfer busnesau lletygarwch gan gynnwys bwytai, caffis, bariau, a gwasanaethau arlwyo. Mae’r bwydlenni hyn wedi’u hintegreiddio’n llawn i ddyluniad eich safle a gellir eu diweddaru a’u rheoli’n hawdd.

## Mathau Lletygarwch a Gefnogir

- **Bwytai** — bwydlenni bwyta gwasanaeth llawn
- **Caffis** — bwydlenni coffi a bwyd ysgafn
- **Bariau a Lolfaon** — bwydlenni diodydd a blasynnau
- **Pobyddai** — bwydlenni crwst a bara
- **Gwasanaethau Arlwyo** — opsiynau bwydlenni digwyddiadau
- **Tryciau Bwyd** — bwydlenni gwasanaeth bwyd symudol
- **Bragdai a Gwindai** — bwydlenni diodydd gyda disgrifiadau

## Strwythur y Fwydlen

### Categorïau Bwydlen

Trefnir bwydlenni yn gategorïau:

- **Blasynnau** — dechreuwyr a phlatiau bach
- **Prif gyrsiau** — prif gyrsiau
- **Ategolion** — ategolion a llysiau
- **Pwdinau** — danteithion melys
- **Diodydd** — diodydd (alcoholig a di-alcohol)
- **Arbennigion** — arbennigion dyddiol neu dymhorol

### Fformat Eitem Bwydlen

Mae pob eitem bwydlen yn cynnwys:

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

#### Meysydd Eitem

| Maes | Math | Disgrifiad |
|-------|------|-------------|
| `name` | string | Enw pryd neu ddiod |
| `description` | string | Disgrifiad manwl o’r eitem |
| `price` | string | Pris (wedi’i fformatio gydag arian cyfred) |
| `dietary_info` | array | Priodoleddau deietegol (Fegan, Heb Glwten, ac ati) |
| `allergens` | array | Alergenau cyffredin (Cnau, Pysgod cregyn, ac ati) |
| `availability` | string | Pryd ar gael (Dyddiol, Tymhorol, ac ati) |

## Creu Bwydlenni Lletygarwch

### Cam 1: Darparu Gwybodaeth am y Fwydlen

Dywedwch wrth Theme Builder am eich bwydlen:

```
Creu bwydlen bwyty ar gyfer fy mwyty Eidalaidd gyda blasynnau,
seigiau pasta, prif gyrsiau, a phwdinau. Cynhwyswch brisiau a disgrifiadau.
```

### Cam 2: Mae Theme Builder yn Cynhyrchu’r Fwydlen

Mae Theme Builder yn:

1. Creu tudalen bwydlen strwythuredig
2. Ei dylunio i gyd-fynd â thema eich safle
3. Trefnu eitemau yn gategorïau
4. Fformatio prisiau a disgrifiadau
5. Ychwanegu gwybodaeth ddeietegol ac alergenau

### Cam 3: Adolygu ac Addasu

Gallwch:

1. Golygu eitemau bwydlen a phrisiau
2. Ychwanegu neu dynnu categorïau
3. Aildrefnu eitemau o fewn categorïau
4. Diweddaru disgrifiadau a gwybodaeth ddeietegol
5. Addasu steilio a chynllun

## Opsiynau Arddangos Bwydlen

### Tudalen Fwydlen Lawn

Tudalen bwrpasol sy’n arddangos eich bwydlen gyflawn:

- Wedi’i threfnu yn ôl categori
- Yn chwiliadwy ac yn hidladwy
- Cynllun cyfeillgar i argraffu
- Dyluniad ymatebol i ffonau symudol

### Teclyn Bwydlen

Ymgorfforwch adrannau bwydlen ar dudalennau eraill:

- Eitemau dan sylw ar yr hafan
- Arbennigion dyddiol ar y bar ochr
- Bwydlen ddiodydd ar dudalen y bar
- Arddangosfa bwdinau yn y troedyn

### PDF Bwydlen

Cynhyrchwch fwydlen PDF y gellir ei lawrlwytho:

- Fformatio proffesiynol
- Ansawdd parod i’w argraffu
- Yn cynnwys delweddau a disgrifiadau
- Hawdd i’w rhannu ac e-bostio

## Gwybodaeth Ddeietegol ac Alergenau

### Priodoleddau Deietegol

Marciwch eitemau gyda gwybodaeth ddeietegol:

- **Fegan** — dim cynhyrchion anifeiliaid
- **Llysieuol** — dim cig
- **Heb Glwten** — diogel ar gyfer clefyd coeliag
- **Heb Laeth** — dim cynhyrchion llaeth
- **Heb Gnau** — dim cnau coed na physgnau
- **Isel mewn Carbohydradau** — carbohydradau wedi’u lleihau
- **Uchel mewn Protein** — cyfoethog mewn protein

### Rhybuddion Alergenau

Cynhwyswch alergenau cyffredin:

- **Cnau** — cnau coed a physgnau
- **Pysgod cregyn** — cramenogion a molysgiaid
- **Pysgod** — pob rhywogaeth o bysgod
- **Llaeth** — llaeth a chynhyrchion llaeth
- **Wyau** — wyau ieir
- **Soia** — cynhyrchion soia
- **Glwten** — gwenith a grawn sy’n cynnwys glwten
- **Sesame** — hadau sesame ac olew

## Rheoli Bwydlenni

### Diweddaru Prisiau

Diweddarwch brisiau bwydlenni’n hawdd:

1. Llywiwch i’r dudalen bwydlen
2. Cliciwch "Golygu Bwydlen"
3. Diweddarwch brisiau ar gyfer eitemau
4. Cadwch newidiadau
5. Mae newidiadau’n ymddangos ar unwaith ar eich safle

### Ychwanegu Eitemau Tymhorol

Creu amrywiadau bwydlen tymhorol:

1. Creu fersiwn bwydlen newydd
2. Ychwanegu eitemau tymhorol
3. Marciwch eitemau fel "Tymhorol"
4. Trefnwch ddyddiadau argaeledd
5. Arddangos yn awtomatig yn ystod y tymor

### Rheoli Arbennigion

Arddangos arbennigion dyddiol neu wythnosol:

1. Creu categori "Arbennigion"
2. Ychwanegu eitemau gyda dyddiadau argaeledd
3. Amlygu arbennigion ar yr hafan
4. Diweddaru’n ddyddiol neu’n wythnosol
5. Archifo hen arbennigion

## Integreiddio â Theme Builder

Wrth ddefnyddio Theme Builder ar gyfer safleoedd lletygarwch:

1. **Canfod bwydlenni’n awtomatig** — yn nodi a ydych yn fusnes bwyd/diod
2. **Creu tudalennau bwydlen** — yn cynhyrchu tudalennau bwydlen proffesiynol
3. **Cydweddu dyluniad** — mae bwydlenni’n cyd-fynd â thema eich safle
4. **Optimeiddio symudol** — mae bwydlenni’n arddangos yn hardd ar ffonau
5. **Optimeiddio SEO** — mae bwydlenni’n gyfeillgar i beiriannau chwilio

## Arferion Gorau

### Dylunio Bwydlen

- **Trefniadaeth glir** — strwythur categorïau rhesymegol
- **Disgrifiadau darllenadwy** — yn flasus ac yn llawn gwybodaeth
- **Prisiau cyson** — arian cyfred a fformatio clir
- **Lluniau proffesiynol** — delweddau bwyd o ansawdd uchel
- **Gofod gwyn** — peidiwch â gorlenwi’r dudalen

### Cynnwys

- **Disgrifiadau cywir** — disgrifiwch eitemau’n gywir
- **Amlygu arbennigion** — gwnewch i arbennigion sefyll allan
- **Cynnwys alergenau** — rhestrwch alergenau bob amser
- **Diweddaru’n rheolaidd** — cadwch brisiau ac eitemau’n gyfredol
- **Defnyddio iaith flasus** — gwnewch i eitemau swnio’n flasus

### Hygyrchedd

- **Ffontiau darllenadwy** — defnyddiwch deipweddau clir, hawdd eu darllen
- **Cyferbyniad digonol** — sicrhewch fod testun yn ddarllenadwy
- **Labeli deietegol** — marciwch opsiynau deietegol yn glir
- **Rhybuddion alergenau** — arddangoswch alergenau’n amlwg
- **Cyfeillgar i ffonau symudol** — profwch ar bob dyfais

## Enghreifftiau

### Strwythur Bwydlen Bwyty

```
Blasynnau
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salad Caprese

Prydau Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Prif Gyrsiau
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Pwdinau
├── Tiramisu
├── Panna Cotta
└── Detholiad Gelato
```

### Strwythur Dewislen Caffi

```
Coffi
├── Espresso
├── Cappuccino
└── Latte

Teisennau Crwst
├── Croissants
├── Muffins
└── Scones

Brechdanau
├── Panini Caprese
├── Club Twrci Mwg
└── Wrap Llysieuol
```

## Nodweddion Cysylltiedig

- [Creu Dewislen](../abilities/create-menu.md) — creu dewislenni llywio
- [Cyfeiriad Dylunio](./design-direction.md) — addasu dyluniad eich gwefan
- [Cyfweliad Darganfod](./discovery-interview.md) — cynllunio strwythur eich gwefan
