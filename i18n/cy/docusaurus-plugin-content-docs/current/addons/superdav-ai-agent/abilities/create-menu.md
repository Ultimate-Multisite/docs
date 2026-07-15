---
title: Creu Dewislen
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Creu Dewislen

Mae'r gallu **Creu Dewislen** yn creu dewislenni llywio WordPress gyda chymorth ar gyfer labeli llywio gwahanol ar wahân i deitlau tudalennau.

## Trosolwg {#overview}

Mae'r gallu hwn yn ymestyn y swyddogaeth safonol ar gyfer creu dewislenni gyda'r gallu i bennu paramedr `navigation_label`. Mae hyn yn eich galluogi i greu dewislenni lle mae'r label a ddangosir yn y llywio yn wahanol i deitl y dudalen, gan ddarparu mwy o hyblygrwydd yn strwythur y safle a phrofiad y defnyddiwr.

## Paramedrau {#parameters}

| Paramedr | Math | Gofynnol | Disgrifiad |
|-----------|------|----------|-------------|
| `name` | string | Ie | Enw'r ddewislen, e.e. `Primary Navigation` |
| `location` | string | Na | Lleoliad y thema i neilltuo'r ddewislen hon iddo, e.e. `primary` |
| `navigation_label` | string | Na | Label i'w ddangos yn y llywio (ar wahân i deitl y dudalen) |

## Gwerth Dychwelyd {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label Llywio yn erbyn Teitl Tudalen {#navigation-label-vs-page-title}

Mae'r paramedr `navigation_label` yn eich galluogi i wahanu enw mewnol y ddewislen oddi wrth y label a ddangosir i ddefnyddwyr:

- **`name`** — Dynodwr dewislen mewnol a ddefnyddir gan WordPress (e.e., "Primary Navigation")
- **`navigation_label`** — Y label a ddangosir i ymwelwyr y safle yn y llywio (e.e., "Main Menu")

Mae hyn yn ddefnyddiol pan:
- Mae eich confensiwn enwi mewnol yn wahanol i labeli sy'n wynebu defnyddwyr
- Rydych am gael labeli byrrach yn y llywio nag yn y panel gweinyddu
- Mae angen i chi gefnogi sawl iaith gyda hyd labeli gwahanol
- Rydych yn adeiladu dewislenni ar gyfer rhanbarthau neu grwpiau defnyddwyr penodol

## Enghreifftiau Defnydd {#usage-examples}

### Enghraifft 1: Dewislen Syml gyda Label Llywio {#example-1-simple-menu-with-navigation-label}

**Anogwr:**
```
Creu dewislen llywio gynradd o'r enw "Main Navigation" gyda'r label llywio "Menu".
```

**Canlyniad:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Enghraifft 2: Dewislen ar gyfer Lleoliad Thema Penodol {#example-2-menu-for-specific-theme-location}

**Anogwr:**
```
Creu dewislen droedyn o'r enw "Footer Links" gyda'r label llywio "Quick Links" a'i neilltuo i leoliad y troedyn.
```

**Canlyniad:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integreiddio â Theme Builder {#integration-with-theme-builder}

Wrth ddefnyddio Theme Builder, mae'r gallu Creu Dewislen yn:

1. Canfod lleoliadau dewislen thema sydd ar gael yn awtomatig
2. Creu dewislenni gyda labeli llywio priodol ar gyfer eich dyluniad
3. Neilltuo dewislenni i'r lleoliadau thema cywir
4. Cefnogi ychwanegu eitemau dewislen ar ôl eu creu

## Galluoedd Cysylltiedig {#related-abilities}

- **`add_menu_item`** — Ychwanegu eitemau at ddewislen bresennol
- **`update_menu`** — Ailenwi dewislen neu ei hailneilltuo i leoliad thema
- **`delete_menu`** — Tynnu dewislen o'ch safle

## Arferion Gorau {#best-practices}

- **Defnyddiwch labeli llywio clir** — cadwch labeli'n gryno ac yn ddisgrifiadol i ddefnyddwyr
- **Cydweddwch leoliadau thema** — neilltuwch ddewislenni i'r lleoliad thema cywir er mwyn eu harddangos yn briodol
- **Cynlluniwch strwythur y ddewislen** — penderfynwch ar hierarchaeth eich dewislen cyn creu eitemau
- **Profwch ymatebolrwydd** — gwiriwch fod dewislenni'n ymddangos yn gywir ar ddyfeisiau symudol
- **Lleoleiddiwch labeli** — defnyddiwch labeli llywio gwahanol ar gyfer fersiynau iaith gwahanol

## Cyfyngiadau {#limitations}

- Mae labeli llywio ar gyfer arddangos yn unig; defnyddir yr `name` mewnol o hyd ar gyfer adnabod WordPress
- Mae cymorth themâu yn amrywio; nid yw pob thema yn cefnogi pob lleoliad dewislen
- Rhaid ychwanegu eitemau dewislen ar wahân ar ôl creu'r ddewislen
- Mae newid label llywio yn gofyn am ddiweddaru'r ddewislen

## Galluoedd Cysylltiedig {#related-abilities-1}

- [Cynhyrchu Logo SVG](./generate-logo-svg.md) — creu logos ar gyfer pennyn eich safle
- [Dilysu Cyferbyniad Palet](./validate-palette-contrast.md) — sicrhau cynlluniau lliw hygyrch
