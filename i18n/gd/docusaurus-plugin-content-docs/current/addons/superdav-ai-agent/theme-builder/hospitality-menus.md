---
title: Clàran-bìdh Aoigheachd
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Clàran-bìdh Aoigheachd

Leigidh feart **Clàran-bìdh Aoigheachd** le Theme Builder duilleagan clàr-bìdh structaraichte airson biadh is deochan a ghineadh agus a chur a-steach gu dìreach dhan làrach WordPress agad.

## Sealladh Coitcheann {#overview}

Faodaidh Theme Builder a-nis duilleagan clàr-bìdh proifeiseanta, structaraichte a chruthachadh airson gnìomhachasan aoigheachd, a’ gabhail a-steach taighean-bìdh, cafaidhean, bàraichean, agus seirbheisean solarachaidh bìdh. Tha na clàran-bìdh seo air am filleadh a-steach gu tur ann an dealbhadh na làraich agad agus gabhaidh an ùrachadh is an stiùireadh gu furasta.

## Seòrsaichean Aoigheachd le Taic {#supported-hospitality-types}

- **Taighean-bìdh** — clàran-bìdh seirbheis-làn
- **Cafaidhean** — clàran-bìdh cofaidh agus biadh aotrom
- **Bàraichean agus Seòmraichean-suidhe** — clàran-bìdh dheochan agus greimean-tòiseachaidh
- **Taighean-fuine** — clàran-bìdh pastraidh agus arain
- **Seirbheisean Solarachaidh Bìdh** — roghainnean clàr-bìdh airson tachartasan
- **Trucaichean Bìdh** — clàran-bìdh seirbheis bìdh gluasadach
- **Taighean-grùdaidh agus Taighean-fìona** — clàran-bìdh dheochan le tuairisgeulan

## Structar Clàr-bìdh {#menu-structure}

### Roinnean Clàr-bìdh {#menu-categories}

Tha clàran-bìdh air an eagrachadh ann an roinnean:

- **Greimean-tòiseachaidh** — tòiseachain agus truinnsearan beaga
- **Prìomh shoithichean** — prìomh chùrsaichean
- **Taobhan** — rudan-taice agus glasraich
- **Milseagan** — rudan milis
- **Deochan** — deochan (le deoch-làidir agus gun deoch-làidir)
- **Rudan Sònraichte** — rudan sònraichte làitheil no ràitheil

### Cruth Nì Clàr-bìdh {#menu-item-format}

Tha gach nì clàr-bìdh a’ gabhail a-steach:

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

#### Raointean Nì {#item-fields}

| Raon | Seòrsa | Tuairisgeul |
|-------|------|-------------|
| `name` | string | Ainm a’ mhias no na dibhe |
| `description` | string | Tuairisgeul mionaideach air an nì |
| `price` | string | Prìs (air a chruthadh le airgead) |
| `dietary_info` | array | Buadhan daitheid (Vegan, Gun Ghluten, msaa.) |
| `allergens` | array | Aileirgeanan cumanta (Cnothan, Maorach, msaa.) |
| `availability` | string | Cuin a tha e ri fhaighinn (Gach latha, Ràitheil, msaa.) |

## Cruthachadh Chlàran-bìdh Aoigheachd {#creating-hospitality-menus}

### Ceum 1: Thoir seachad Fiosrachadh Clàr-bìdh {#step-1-provide-menu-information}

Innis do Theme Builder mun chlàr-bìdh agad:

```
Cruthaich clàr-bìdh taigh-bìdh airson an taigh-bìdh Eadailteach agam le greimean-tòiseachaidh,
soithichean pasta, prìomh chùrsaichean, agus milseagan. Cuir a-steach prìsean agus tuairisgeulan.
```

### Ceum 2: Bidh Theme Builder a’ Gineadh Clàr-bìdh {#step-2-theme-builder-generates-menu}

Bidh Theme Builder:

1. A’ cruthachadh duilleag clàr-bìdh structaraichte
2. Ga dhealbhadh gus a bhith a rèir theme na làraich agad
3. Ag eagrachadh nithean ann an roinnean
4. A’ cruthachadh phrìsean agus thuairisgeulan
5. A’ cur fiosrachadh daitheid agus aileirgeanan ris

### Ceum 3: Dèan Lèirmheas agus Gnàthaich {#step-3-review-and-customize}

Faodaidh tu:

1. Nithean clàr-bìdh agus prìsean a dheasachadh
2. Roinnean a chur ris no a thoirt air falbh
3. Nithean ath-òrdachadh taobh a-staigh roinnean
4. Tuairisgeulan agus fiosrachadh daitheid ùrachadh
5. Stoidhleadh agus cruth a chur air dòigh

## Roghainnean Taisbeanaidh Clàr-bìdh {#menu-display-options}

### Duilleag Clàr-bìdh Slàn {#full-menu-page}

Duilleag shònraichte a’ taisbeanadh a’ chlàr-bhìdh iomlan agad:

- Air a h-eagrachadh a rèir roinne
- Gabhaidh a rannsachadh agus a chriathradh
- Cruth freagarrach airson clò-bhualadh
- Dealbhadh freagairteach do dh’innealan-làimhe

### Widget Clàr-bìdh {#menu-widget}

Cuir earrannan clàr-bìdh a-steach air duilleagan eile:

- Nithean sònraichte air an duilleag-dhachaigh
- Rudan sònraichte làitheil air a’ bhàr-taoibh
- Clàr-bìdh dheochan air duilleag a’ bhàir
- Taisbeanadh milseagan sa footer

### PDF Clàr-bìdh {#menu-pdf}

Gin clàr-bìdh PDF a ghabhas luchdadh a-nuas:

- Cruthachadh proifeiseanta
- Càileachd deiseil airson clò-bhualadh
- A’ gabhail a-steach ìomhaighean agus tuairisgeulan
- Furasta a cho-roinn agus a chur air post-d

## Fiosrachadh Daitheid agus Aileirgeanan {#dietary-and-allergen-information}

### Buadhan Daitheid {#dietary-attributes}

Comharraich nithean le fiosrachadh daitheid:

- **Vegan** — gun thoraidhean bheathaichean
- **Glasraichear** — gun fheòil
- **Gun Ghluten** — sàbhailte airson galar coeliac
- **Gun Bhainne** — gun thoraidhean bainne
- **Gun Chnothan** — gun chnothan craoibhe no cnòthan-talmhainn
- **Ìosal ann an Gualaisg** — gualaisgean lùghdaichte
- **Àrd ann am Pròtain** — beairteach ann am pròtain

### Rabhaidhean Aileirgeanan {#allergen-warnings}

Cuir a-steach aileirgeanan cumanta:

- **Cnothan** — cnothan craoibhe agus cnòthan-talmhainn
- **Maorach** — rùsganaich agus moileasgan
- **Iasg** — gach gnè èisg
- **Bainne** — bainne agus toraidhean bainne
- **Uighean** — uighean cearc
- **Soighe** — toraidhean soighe
- **Gluten** — cruithneachd agus gràinean anns a bheil gluten
- **Sesame** — sìol sesame agus ola

## Stiùireadh Clàr-bìdh {#menu-management}

### Ùrachadh Phrìsean {#updating-prices}

Ùraich prìsean clàr-bìdh gu furasta:

1. Seòl gu duilleag a’ chlàr-bìdh
2. Briog air "Deasaich Clàr-bìdh"
3. Ùraich prìsean airson nithean
4. Sàbhail atharrachaidhean
5. Nochdaidh atharrachaidhean sa bhad air an làrach agad

### Cur Nithean Ràitheil Ris {#adding-seasonal-items}

Cruthaich caochlaidhean clàr-bìdh ràitheil:

1. Cruthaich tionndadh clàr-bìdh ùr
2. Cuir nithean ràitheil ris
3. Comharraich nithean mar "Ràitheil"
4. Clàraich cinn-latha ruigsinneachd
5. Taisbean gu fèin-obrachail tron ràith

### Stiùireadh Rudan Sònraichte {#managing-specials}

Taisbean rudan sònraichte làitheil no seachdaineil:

1. Cruthaich roinn "Rudan Sònraichte"
2. Cuir nithean ris le cinn-latha ruigsinneachd
3. Cuir cuideam air rudan sònraichte air an duilleag-dhachaigh
4. Ùraich gach latha no gach seachdain
5. Tasglannaich seann rudan sònraichte

## Amalachadh le Theme Builder {#integration-with-theme-builder}

Nuair a bhios tu a’ cleachdadh Theme Builder airson làraichean aoigheachd:

1. **Lorg clàr-bìdh fèin-obrachail** — aithnicheas e ma tha thu nad ghnìomhachas bìdh/deochan
2. **Cruthachadh duilleag clàr-bìdh** — gineas e duilleagan clàr-bìdh proifeiseanta
3. **Co-fhreagairt dealbhaidh** — bidh clàran-bìdh a rèir theme na làraich agad
4. **Optimization airson innealan-làimhe** — bidh clàran-bìdh a’ taisbeanadh gu brèagha air fònaichean
5. **SEO optimization** — tha clàran-bìdh càirdeil do einnseanan-luirg

## Cleachdaidhean as Fheàrr {#best-practices}

### Dealbhadh Clàr-bìdh {#menu-design}

- **Eagrachadh soilleir** — structar roinnean loidsigeach
- **Tuairisgeulan so-leughte** — blasta agus fiosrachail
- **Prìsean cunbhalach** — airgead agus cruthachadh soilleir
- **Dealbhan proifeiseanta** — ìomhaighean bìdh àrd-chàileachd
- **Àite bàn** — na lìon an duilleag cus

### Susbaint {#content}

- **Tuairisgeulan ceart** — thoir cunntas ceart air nithean
- **Cuir cuideam air rudan sònraichte** — dèan rudan sònraichte follaiseach
- **Cuir a-steach aileirgeanan** — liostaich aileirgeanan an-còmhnaidh
- **Ùraich gu cunbhalach** — cùm prìsean agus nithean làithreach
- **Cleachd cànan blasta** — dèan nithean fuaimeachadh blasta

### Ruigsinneachd {#accessibility}

- **Cruthan-clò so-leughte** — cleachd typefaces soilleir, furasta an leughadh
- **Iomsgaradh gu leòr** — dèan cinnteach gu bheil an teacsa so-leughte
- **Leubailean daitheid** — comharraich roghainnean daitheid gu soilleir
- **Rabhaidhean aileirgeanan** — taisbean aileirgeanan gu follaiseach
- **Càirdeil do dh’innealan-làimhe** — dèan deuchainn air gach inneal

## Eisimpleirean {#examples}

### Structar Clàr-bìdh Taigh-bìdh {#restaurant-menu-structure}

```
Biadhan-tòiseachaidh
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salad Caprese

Soithichean Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Prìomh Chùrsaichean
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Milseagan
├── Tiramisu
├── Panna Cotta
└── Taghadh Gelato
```

### Structar Clàr-taice Cafaidh {#cafe-menu-structure}

```
Cofaidh
├── Espresso
├── Cappuccino
└── Latte

Pastraidhean
├── Croissants
├── Muffins
└── Sgonaichean

Ceapairean
├── Panini Caprese
├── Club Turcaidh Smocte
└── Wrap Glasraichear
```

## Feartan Co-cheangailte {#related-features}

- [Cruthaich Clàr-taice](../abilities/create-menu.md) — cruthaich clàir-sheòlaidh
- [Stiùireadh Dealbhaidh](./design-direction.md) — gnàthaich dealbhadh na làraich agad
- [Agallamh Lorg](./discovery-interview.md) — dealbhaich structar na làraich agad
