---
title: Biachláir Fáilteachais
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Biachláir Fáilteachais {#hospitality-menus}

Ligeann an ghné **Biachláir Fáilteachais** do Theme Builder leathanaigh struchtúrtha bia agus dí a ghiniúint agus a leabú go díreach isteach i do shuíomh WordPress.

## Forbhreathnú {#overview}

Is féidir le Theme Builder anois leathanaigh bhiachláir ghairmiúla, struchtúrtha a chruthú do ghnólachtaí fáilteachais lena n-áirítear bialanna, caiféanna, beáir, agus seirbhísí lónadóireachta. Tá na biachláir seo comhtháite go hiomlán i ndearadh do shuímh agus is féidir iad a nuashonrú agus a bhainistiú go héasca.

## Cineálacha Fáilteachais a dtacaítear leo {#supported-hospitality-types}

- **Bialanna** — biachláir itheacháin lánseirbhíse
- **Caiféanna** — biachláir caife agus bia éadrom
- **Beáir agus Tolglanna** — biachláir dí agus réamhbhia
- **Báicéireachtaí** — biachláir taosráin agus aráin
- **Seirbhísí Lónadóireachta** — roghanna biachláir imeachtaí
- **Trucailí Bia** — biachláir seirbhíse bia soghluaiste
- **Grúdlanna agus Fíonghoirt** — biachláir dí le cur síos

## Struchtúr Biachláir {#menu-structure}

### Catagóirí Biachláir {#menu-categories}

Eagraítear biachláir ina gcatagóirí:

- **Réamhbhianna** — tosaithe agus plátaí beaga
- **Príomhchúrsaí** — príomhbhéilí
- **Miasa Taoibh** — tionlacain agus glasraí
- **Milseoga** — rudaí milse
- **Deochanna** — deochanna (alcólacha agus neamh-mheisciúla)
- **Speisialtachtaí** — speisialtachtaí laethúla nó séasúracha

### Formáid Mhír Biachláir {#menu-item-format}

Áirítear le gach mír bhiachláir:

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

#### Réimsí Míre {#item-fields}

| Réimse | Cineál | Cur síos |
|-------|------|-------------|
| `name` | string | Ainm mias nó dí |
| `description` | string | Cur síos mionsonraithe ar an mír |
| `price` | string | Praghas (formáidithe le hairgeadra) |
| `dietary_info` | array | Tréithe aiste bia (Vegan, Gluten-Free, srl.) |
| `allergens` | array | Ailléirginí coitianta (Cnónna, Sliogéisc, srl.) |
| `availability` | string | Cathain atá sé ar fáil (Laethúil, Séasúrach, srl.) |

## Biachláir Fáilteachais a Chruthú {#creating-hospitality-menus}

### Céim 1: Cuir Faisnéis Biachláir ar Fáil {#step-1-provide-menu-information}

Inis do Theme Builder faoi do bhiachlár:

```
Cruthaigh biachlár bialainne do mo bhialann Iodálach le réamhbhianna,
miasa pasta, príomhchúrsaí, agus milseoga. Cuir praghsanna agus cur síos san áireamh.
```

### Céim 2: Gineann Theme Builder Biachlár {#step-2-theme-builder-generates-menu}

Déanann Theme Builder:

1. Cruthaíonn sé leathanach biachláir struchtúrtha
2. Dearann sé é chun téama do shuímh a mheaitseáil
3. Eagraíonn sé míreanna ina gcatagóirí
4. Formáidíonn sé praghsanna agus cur síos
5. Cuireann sé faisnéis aiste bia agus ailléirginí leis

### Céim 3: Athbhreithnigh agus Saincheap {#step-3-review-and-customize}

Is féidir leat:

1. Míreanna biachláir agus praghsanna a chur in eagar
2. Catagóirí a chur leis nó a bhaint
3. Míreanna laistigh de chatagóirí a athordú
4. Cur síos agus faisnéis aiste bia a nuashonrú
5. Stíliú agus leagan amach a choigeartú

## Roghanna Taispeána Biachláir {#menu-display-options}

### Leathanach Iomlán Biachláir {#full-menu-page}

Leathanach tiomnaithe a thaispeánann do bhiachlár iomlán:

- Eagraithe de réir catagóire
- Inchúardaigh agus inscagtha
- Leagan amach cairdiúil don phriontáil
- Dearadh freagrúil do ghléasanna soghluaiste

### Giuirléid Biachláir {#menu-widget}

Leabaigh rannóga biachláir ar leathanaigh eile:

- Míreanna faoi thrácht ar an leathanach baile
- Speisialtachtaí laethúla ar an mbarra taoibh
- Biachlár dí ar leathanach an bheáir
- Taispeántas milseog sa bhuntásc

### PDF Biachláir {#menu-pdf}

Gin biachlár PDF in-íoslódáilte:

- Formáidiú gairmiúil
- Cáilíocht réidh le priontáil
- Áirítear íomhánna agus cur síos
- Éasca le roinnt agus le ríomhphost a sheoladh

## Faisnéis Aiste Bia agus Ailléirginí {#dietary-and-allergen-information}

### Tréithe Aiste Bia {#dietary-attributes}

Marcáil míreanna le faisnéis aiste bia:

- **Vegan** — gan táirgí ainmhithe
- **Vegetarian** — gan fheoil
- **Gluten-Free** — sábháilte do ghalar céiliach
- **Dairy-Free** — gan táirgí bainne
- **Nut-Free** — gan cnónna crainn ná piseanna talún
- **Low-Carb** — carbaihiodráití laghdaithe
- **High-Protein** — saibhir i bpróitéin

### Rabhaidh Ailléirginí {#allergen-warnings}

Cuir ailléirginí coitianta san áireamh:

- **Cnónna** — cnónna crainn agus piseanna talún
- **Sliogéisc** — crústaigh agus moilisc
- **Iasc** — gach speiceas éisc
- **Táirgí déiríochta** — bainne agus táirgí bainne
- **Uibheacha** — uibheacha sicín
- **Soighe** — táirgí soighe
- **Glútan** — cruithneacht agus gránaigh ina bhfuil glútan
- **Síosam** — síolta agus ola síosaim

## Bainistiú Biachláir {#menu-management}

### Praghsanna a Nuashonrú {#updating-prices}

Nuashonraigh praghsanna biachláir go héasca:

1. Téigh chuig an leathanach biachláir
2. Cliceáil "Cuir an Biachlár in Eagar"
3. Nuashonraigh praghsanna le haghaidh míreanna
4. Sábháil athruithe
5. Taispeántar athruithe láithreach ar do shuíomh

### Míreanna Séasúracha a Chur Leis {#adding-seasonal-items}

Cruthaigh athruithe biachláir séasúracha:

1. Cruthaigh leagan nua den bhiachlár
2. Cuir míreanna séasúracha leis
3. Marcáil míreanna mar "Séasúrach"
4. Sceideal dátaí infhaighteachta
5. Taispeáin go huathoibríoch le linn an tséasúir

### Speisialtachtaí a Bhainistiú {#managing-specials}

Taispeáin speisialtachtaí laethúla nó seachtainiúla:

1. Cruthaigh catagóir "Speisialtachtaí"
2. Cuir míreanna leis le dátaí infhaighteachta
3. Aibhsigh speisialtachtaí ar an leathanach baile
4. Nuashonraigh go laethúil nó go seachtainiúil
5. Cuir sean-speisialtachtaí i gcartlann

## Comhtháthú le Theme Builder {#integration-with-theme-builder}

Agus Theme Builder á úsáid do shuímh fáilteachais:

1. **Brath uathoibríoch biachláir** — aithníonn sé an gnólacht bia/dí thú
2. **Cruthú leathanach biachláir** — gineann sé leathanaigh bhiachláir ghairmiúla
3. **Meaitseáil dearaidh** — meaitseálann biachláir téama do shuímh
4. **Optamú soghluaiste** — taispeántar biachláir go hálainn ar fhóin
5. **Optamú SEO** — tá biachláir cairdiúil d’innill chuardaigh

## Dea-Chleachtais {#best-practices}

### Dearadh Biachláir {#menu-design}

- **Eagrú soiléir** — struchtúr catagóire loighciúil
- **Cur síos inléite** — blasta agus faisnéiseach
- **Praghsáil chomhsheasmhach** — airgeadra agus formáidiú soiléir
- **Grianghraif ghairmiúla** — íomhánna bia ardchaighdeáin
- **Spás bán** — ná plódáil an leathanach

### Ábhar {#content}

- **Cur síos cruinn** — déan cur síos cruinn ar mhíreanna
- **Aibhsigh speisialtachtaí** — déan speisialtachtaí feiceálach
- **Cuir ailléirginí san áireamh** — liostaigh ailléirginí i gcónaí
- **Nuashonraigh go rialta** — coinnigh praghsanna agus míreanna cothrom le dáta
- **Úsáid teanga bhlasta** — déan míreanna a fhuaimniú blasta

### Inrochtaineacht {#accessibility}

- **Clónna inléite** — bain úsáid as clófhoirne soiléire, soléite
- **Codarsnacht leordhóthanach** — cinntigh go bhfuil an téacs inléite
- **Lipéid aiste bia** — marcáil roghanna aiste bia go soiléir
- **Rabhaidh ailléirginí** — taispeáin ailléirginí go feiceálach
- **Cairdiúil do ghléasanna soghluaiste** — tástáil ar gach gléas

## Samplaí {#examples}

### Struchtúr Biachláir Bialainne {#restaurant-menu-structure}

```
Réamhchúrsaí
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Sailéad Caprese

Miasa Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Príomhchúrsaí
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Milseoga
├── Tiramisu
├── Panna Cotta
└── Rogha Gelato
```

### Struchtúr Roghchláir Caifé {#cafe-menu-structure}

```
Caife
├── Espresso
├── Cappuccino
└── Latte

Taosráin
├── Croissants
├── Muffins
└── Scones

Ceapairí
├── Panini Caprese
├── Club Turcaí Deataithe
└── Wrap Veigeatórach
```

## Gnéithe Gaolmhara {#related-features}

- [Cruthaigh Roghchlár](../abilities/create-menu.md) — cruthaigh roghchláir nascleanúna
- [Treo Dearaidh](./design-direction.md) — saincheap dearadh do shuímh
- [Agallamh Fionnachtana](./discovery-interview.md) — pleanáil struchtúr do shuímh
