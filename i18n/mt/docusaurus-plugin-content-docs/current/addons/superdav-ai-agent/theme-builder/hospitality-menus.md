---
title: Menijiet tal-Ospitalità
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus tal-Ospitalità

Il-funzjoni **Hospitality Menus** tippermetti lil Theme Builder jiġġenera u jdaħħal paġni strutturati ta’ menus tal-ikel u x-xorb direttament fis-sit WordPress tiegħek.

## Ħarsa Ġenerali {#overview}

Theme Builder issa jista’ joħloq paġni professjonali u strutturati ta’ menus għal negozji tal-ospitalità inklużi ristoranti, kafetteriji, bars, u servizzi ta’ catering. Dawn il-menus huma integrati kompletament fid-disinn tas-sit tiegħek u jistgħu jiġu aġġornati u ġestiti faċilment.

## Tipi ta’ Ospitalità Appoġġjati {#supported-hospitality-types}

- **Ristoranti** — menus ta’ ikel b’servizz sħiħ
- **Kafetteriji** — menus tal-kafè u ikel ħafif
- **Bars u Lounges** — menus tax-xorb u appetizers
- **Fran** — menus ta’ pasti u ħobż
- **Servizzi ta’ Catering** — għażliet ta’ menus għal avvenimenti
- **Food Trucks** — menus ta’ servizz tal-ikel mobbli
- **Birreriji u Wineries** — menus tax-xorb b’deskrizzjonijiet

## Struttura tal-Menu {#menu-structure}

### Kategoriji tal-Menu {#menu-categories}

Il-menus huma organizzati f’kategoriji:

- **Appetizers** — starters u platti żgħar
- **Entrees** — platti ewlenin
- **Sides** — akkumpanjamenti u ħxejjex
- **Desserts** — ħlewwiet
- **Beverages** — xorb (alkoħoliku u mhux alkoħoliku)
- **Specials** — speċjali ta’ kuljum jew staġjonali

### Format ta’ Oġġett tal-Menu {#menu-item-format}

Kull oġġett tal-menu jinkludi:

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

#### Oqsma tal-Oġġett {#item-fields}

| Qasam | Tip | Deskrizzjoni |
|-------|------|-------------|
| `name` | string | Isem tal-platt jew tax-xarba |
| `description` | string | Deskrizzjoni dettaljata tal-oġġett |
| `price` | string | Prezz (iffurmat bil-munita) |
| `dietary_info` | array | Attributi tad-dieta (Vegan, Mingħajr Gluten, eċċ.) |
| `allergens` | array | Allerġeni komuni (Ġewż, Frott tal-baħar bil-qoxra, eċċ.) |
| `availability` | string | Meta jkun disponibbli (Kuljum, Staġjonali, eċċ.) |

## Ħolqien ta’ Menus tal-Ospitalità {#creating-hospitality-menus}

### Pass 1: Ipprovdi Informazzjoni tal-Menu {#step-1-provide-menu-information}

Għid lil Theme Builder dwar il-menu tiegħek:

```
Oħloq menu ta’ ristorant għar-ristorant Taljan tiegħi b’appetizers,
platti tal-għaġin, platti ewlenin, u desserts. Inkludi prezzijiet u deskrizzjonijiet.
```

### Pass 2: Theme Builder Jiġġenera l-Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Joħloq paġna strutturata tal-menu
2. Jiddisinjaha biex taqbel mat-theme tas-sit tiegħek
3. Jorganizza l-oġġetti f’kategoriji
4. Jifformattja l-prezzijiet u d-deskrizzjonijiet
5. Iżid informazzjoni dwar id-dieta u l-allerġeni

### Pass 3: Irrevedi u Ippersonalizza {#step-3-review-and-customize}

Tista’:

1. Teditja oġġetti tal-menu u prezzijiet
2. Iżżid jew tneħħi kategoriji
3. Terġa’ tordna l-oġġetti fi ħdan il-kategoriji
4. Taġġorna deskrizzjonijiet u informazzjoni dwar id-dieta
5. Taġġusta l-istil u t-tqassim

## Għażliet ta’ Wiri tal-Menu {#menu-display-options}

### Paġna Sħiħa tal-Menu {#full-menu-page}

Paġna ddedikata li turi l-menu sħiħ tiegħek:

- Organizzata skont il-kategorija
- Tista’ titfittex u tiġi ffiltrata
- Tqassim adattat għall-istampar
- Disinn responsiv għall-mowbajl

### Widget tal-Menu {#menu-widget}

Daħħal sezzjonijiet tal-menu f’paġni oħra:

- Oġġetti prominenti fuq il-homepage
- Speċjali ta’ kuljum fis-sidebar
- Menu tax-xorb fuq il-paġna tal-bar
- Wirja tad-desserts fil-footer

### PDF tal-Menu {#menu-pdf}

Iġġenera menu PDF li jista’ jitniżżel:

- Ifformattjar professjonali
- Kwalità lesta għall-istampar
- Jinkludi stampi u deskrizzjonijiet
- Faċli biex taqsam u tibgħat bl-email

## Informazzjoni dwar id-Dieta u l-Allerġeni {#dietary-and-allergen-information}

### Attributi tad-Dieta {#dietary-attributes}

Immarka l-oġġetti b’informazzjoni dwar id-dieta:

- **Vegan** — ebda prodotti mill-annimali
- **Veġetarjan** — ebda laħam
- **Mingħajr Gluten** — sigur għall-marda coeliac
- **Mingħajr Prodotti tal-Ħalib** — ebda prodotti tal-ħalib
- **Mingħajr Ġewż** — ebda ġewż tas-siġar jew karawett
- **Baxx fil-Karboidrati** — karboidrati mnaqqsa
- **Għoli fil-Proteina** — rikk fil-proteina

### Twissijiet dwar l-Allerġeni {#allergen-warnings}

Inkludi allerġeni komuni:

- **Ġewż** — ġewż tas-siġar u karawett
- **Frott tal-baħar bil-qoxra** — krustaċji u molluski
- **Ħut** — l-ispeċijiet kollha tal-ħut
- **Prodotti tal-Ħalib** — ħalib u prodotti tal-ħalib
- **Bajd** — bajd tat-tiġieġ
- **Sojja** — prodotti tas-sojja
- **Gluten** — qamħ u ċereali li fihom gluten
- **Sesame** — żerriegħa u żejt tas-sesame

## Ġestjoni tal-Menu {#menu-management}

### Aġġornament tal-Prezzijiet {#updating-prices}

Aġġorna l-prezzijiet tal-menu faċilment:

1. Mur fil-paġna tal-menu
2. Ikklikkja "Editja l-Menu"
3. Aġġorna l-prezzijiet għall-oġġetti
4. Issejvja l-bidliet
5. Il-bidliet jidhru immedjatament fuq is-sit tiegħek

### Żieda ta’ Oġġetti Staġjonali {#adding-seasonal-items}

Oħloq varjazzjonijiet staġjonali tal-menu:

1. Oħloq verżjoni ġdida tal-menu
2. Żid oġġetti staġjonali
3. Immarka l-oġġetti bħala "Staġjonali"
4. Skeda d-dati tad-disponibbiltà
5. Uri awtomatikament matul l-istaġun

### Ġestjoni tal-Ispeċjali {#managing-specials}

Uri speċjali ta’ kuljum jew ta’ kull ġimgħa:

1. Oħloq kategorija "Specials"
2. Żid oġġetti b’dati tad-disponibbiltà
3. Enfasizza l-ispeċjali fuq il-homepage
4. Aġġorna kuljum jew kull ġimgħa
5. Arkivja speċjali qodma

## Integrazzjoni ma’ Theme Builder {#integration-with-theme-builder}

Meta tuża Theme Builder għal siti tal-ospitalità:

1. **Sejbien awtomatiku tal-menu** — jidentifika jekk intix negozju tal-ikel/xorb
2. **Ħolqien ta’ paġna tal-menu** — jiġġenera paġni professjonali tal-menu
3. **Tqabbil tad-disinn** — il-menus jaqblu mat-theme tas-sit tiegħek
4. **Ottimizzazzjoni għall-mowbajl** — il-menus jintwerew b’mod sabiħ fuq it-telefowns
5. **Ottimizzazzjoni SEO** — il-menus huma faċli għall-magni tat-tiftix

## L-Aħjar Prattiki {#best-practices}

### Disinn tal-Menu {#menu-design}

- **Organizzazzjoni ċara** — struttura loġika tal-kategoriji
- **Deskrizzjonijiet li jinqraw** — appetitużi u informattivi
- **Ipprezzar konsistenti** — munita u fformattjar ċari
- **Ritratti professjonali** — stampi tal-ikel ta’ kwalità għolja
- **Spazju vojt** — timlix iżżejjed il-paġna

### Kontenut {#content}

- **Deskrizzjonijiet preċiżi** — iddeskrivi l-oġġetti b’mod preċiż
- **Enfasizza l-ispeċjali** — agħmel l-ispeċjali jispikkaw
- **Inkludi allerġeni** — dejjem elenka l-allerġeni
- **Aġġorna regolarment** — żomm il-prezzijiet u l-oġġetti aġġornati
- **Uża lingwa appetituża** — agħmel l-oġġetti jidhru delizzjużi

### Aċċessibbiltà {#accessibility}

- **Fonts li jinqraw** — uża tipografiji ċari u leġibbli
- **Kuntrast suffiċjenti** — żgura li t-test jinqara
- **Tikketti tad-dieta** — immarka b’mod ċar l-għażliet tad-dieta
- **Twissijiet dwar l-allerġeni** — uri l-allerġeni b’mod prominenti
- **Faċli għall-mowbajl** — ittestja fuq l-apparati kollha

## Eżempji {#examples}

### Struttura ta’ Menu ta’ Ristorant {#restaurant-menu-structure}

```
Antipasti
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Insalata Caprese

Platti tal-Għaġin
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Platti Ewlenin
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Deżerti
├── Tiramisu
├── Panna Cotta
└── Għażla ta' Gelato
```

### Struttura tal-Menu tal-Kafetterija {#cafe-menu-structure}

```
Kafè
├── Espresso
├── Cappuccino
└── Latte

Għaġiniet
├── Croissants
├── Muffins
└── Scones

Sandwiċis
├── Panini Caprese
├── Club bid-Dundjan Affumikat
└── Wrap Veġetarjan
```

## Karatteristiċi Relatati {#related-features}

- [Oħloq Menu](../abilities/create-menu.md) — oħloq menus tan-navigazzjoni
- [Direzzjoni tad-Disinn](./design-direction.md) — ippersonalizza d-disinn tas-sit tiegħek
- [Intervista ta' Skoperta](./discovery-interview.md) — ippjana l-istruttura tas-sit tiegħek
