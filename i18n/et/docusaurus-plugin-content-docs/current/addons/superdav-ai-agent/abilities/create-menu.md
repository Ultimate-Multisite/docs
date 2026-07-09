---
title: Loo menüü
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Loo menüü

**Loo menüü** võime loob WordPressi navigeerimismenüüsid, toetades eraldi navigeerimissilte, mis erinevad lehtede pealkirjadest.

## Ülevaade

See võime laiendab standardset menüü loomise funktsionaalsust võimalusega määrata parameeter `navigation_label`. See võimaldab luua menüüsid, kus navigeerimises kuvatav silt erineb lehe pealkirjast, pakkudes saidi struktuuris ja kasutajakogemuses rohkem paindlikkust.

## Parameetrid

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|-----------|------|----------|-------------|
| `name` | string | Jah | Menüü nimi, nt `Primary Navigation` |
| `location` | string | Ei | Theme asukoht, millele see menüü määrata, nt `primary` |
| `navigation_label` | string | Ei | Navigeerimises kuvatav silt (erineb lehe pealkirjast) |

## Tagastusväärtus

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigeerimissilt vs lehe pealkiri

Parameeter `navigation_label` võimaldab eraldada sisemise menüü nime kasutajatele navigeerimises kuvatavast sildist:

- **`name`** — sisemine menüü identifikaator, mida WordPress kasutab (nt „Primary Navigation”)
- **`navigation_label`** — silt, mida saidi külastajatele navigeerimises kuvatakse (nt „Main Menu”)

See on kasulik, kui:
- teie sisemine nimetamiskonventsioon erineb kasutajatele nähtavatest siltidest
- soovite navigeerimises lühemaid silte kui halduspaneelis
- peate toetama mitut keelt erineva sildipikkusega
- loote menüüsid konkreetsete piirkondade või kasutajarühmade jaoks

## Kasutusnäited

### Näide 1: lihtne menüü navigeerimissildiga

**Viip:**
```
Loo esmane navigeerimismenüü nimega „Main Navigation” navigeerimissildiga „Menu”.
```

**Tulemus:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Näide 2: menüü konkreetse Theme asukoha jaoks

**Viip:**
```
Loo jaluse menüü nimega „Footer Links” navigeerimissildiga „Quick Links” ja määra see jaluse asukohale.
```

**Tulemus:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integreerimine Theme Builderiga

Theme Builderi kasutamisel teeb Loo menüü võime järgmist:

1. Tuvastab automaatselt saadaolevad theme menüü asukohad
2. Loob menüüd teie kujunduse jaoks sobivate navigeerimissiltidega
3. Määrab menüüd õigetele theme asukohtadele
4. Toetab menüüelementide lisamist pärast loomist

## Seotud võimed

- **`add_menu_item`** — lisa üksusi olemasolevasse menüüsse
- **`update_menu`** — nimeta menüü ümber või määra see uuesti theme asukohale
- **`delete_menu`** — eemalda menüü oma saidilt

## Parimad tavad

- **Kasutage selgeid navigeerimissilte** — hoidke sildid kasutajate jaoks lühikesed ja kirjeldavad
- **Sobitage theme asukohad** — määrake menüüd õigesse theme asukohta, et need kuvataks korrektselt
- **Planeerige menüü struktuur** — otsustage menüü hierarhia enne üksuste loomist
- **Testige kohanduvust** — kontrollige, et menüüd kuvataks mobiilseadmetes õigesti
- **Lokaliseerige sildid** — kasutage eri keeleversioonide jaoks erinevaid navigeerimissilte

## Piirangud

- Navigeerimissildid on ainult kuvamiseks; sisemist `name` kasutatakse endiselt WordPressi tuvastamiseks
- Theme tugi varieerub; kõik themes ei toeta kõiki menüü asukohti
- Menüüelemendid tuleb pärast menüü loomist eraldi lisada
- Navigeerimissildi muutmine nõuab menüü uuendamist

## Seotud võimed

- [Genereeri logo SVG](./generate-logo-svg.md) — loo logosid oma saidi päise jaoks
- [Valideeri paleti kontrastsus](./validate-palette-contrast.md) — taga ligipääsetavad värviskeemid
