---
title: Oħloq Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Oħloq Menu

Il-kapaċità **Oħloq Menu** toħloq menus ta’ navigazzjoni ta’ WordPress b’appoġġ għal tikketti ta’ navigazzjoni distinti separati mit-titli tal-paġni.

## Ħarsa Ġenerali

Din il-kapaċità testendi l-funzjonalità standard tal-ħolqien ta’ menu bil-possibbiltà li tispeċifika parametru `navigation_label`. Dan jippermettilek toħloq menus fejn it-tikketta murija fin-navigazzjoni tkun differenti mit-titlu tal-paġna, u b’hekk tipprovdi aktar flessibbiltà fl-istruttura tas-sit u fl-esperjenza tal-utent.

## Parametri

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|-----------|------|----------|-------------|
| `name` | string | Iva | Isem tal-menu, eż. `Primary Navigation` |
| `location` | string | Le | Post fit-theme li dan il-menu għandu jiġi assenjat lilu, eż. `primary` |
| `navigation_label` | string | Le | Tikketta li tintwera fin-navigazzjoni (distinta mit-titlu tal-paġna) |

## Valur Ritornat

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Tikketta tan-Navigazzjoni vs Titlu tal-Paġna

Il-parametru `navigation_label` jippermettilek tissepara l-isem intern tal-menu mit-tikketta murija lill-utenti:

- **`name`** — Identifikatur intern tal-menu użat minn WordPress (eż., "Primary Navigation")
- **`navigation_label`** — It-tikketta murija lill-viżitaturi tas-sit fin-navigazzjoni (eż., "Main Menu")

Dan huwa utli meta:
- Il-konvenzjoni interna tiegħek tal-ismijiet tkun differenti mit-tikketti murija lill-utenti
- Trid tikketti iqsar fin-navigazzjoni milli fil-pannell tal-amministrazzjoni
- Għandek bżonn tappoġġja diversi lingwi b’tulijiet differenti ta’ tikketti
- Qed tibni menus għal reġjuni speċifiċi jew gruppi ta’ utenti

## Eżempji ta’ Użu

### Eżempju 1: Menu Sempliċi b’Tikketta tan-Navigazzjoni

**Prompt:**
```
Oħloq menu ta’ navigazzjoni primarja msejjaħ "Main Navigation" bit-tikketta tan-navigazzjoni "Menu".
```

**Riżultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Eżempju 2: Menu għal Post Speċifiku fit-Theme

**Prompt:**
```
Oħloq menu fil-footer msejjaħ "Footer Links" bit-tikketta tan-navigazzjoni "Quick Links" u assenjah lill-post tal-footer.
```

**Riżultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrazzjoni ma’ Theme Builder

Meta tuża Theme Builder, il-kapaċità Oħloq Menu:

1. Tinduna awtomatikament bil-postijiet tal-menu tat-theme disponibbli
2. Toħloq menus b’tikketti tan-navigazzjoni xierqa għad-disinn tiegħek
3. Tassenja menus lill-postijiet korretti tat-theme
4. Tappoġġja ż-żieda ta’ oġġetti tal-menu wara l-ħolqien

## Kapaċitajiet Relatati

- **`add_menu_item`** — Żid oġġetti ma’ menu eżistenti
- **`update_menu`** — Ibdel l-isem ta’ menu jew assenjah mill-ġdid lil post fit-theme
- **`delete_menu`** — Neħħi menu mis-sit tiegħek

## L-Aħjar Prattiki

- **Uża tikketti tan-navigazzjoni ċari** — żomm it-tikketti konċiżi u deskrittivi għall-utenti
- **Qabbel il-postijiet tat-theme** — assenja menus lill-post korrett tat-theme għal wirja xierqa
- **Ippjana l-istruttura tal-menu** — iddeċiedi dwar il-ġerarkija tal-menu tiegħek qabel toħloq l-oġġetti
- **Ittestja r-responsività** — ivverifika li l-menus jintwerew korrettament fuq apparati mobbli
- **Lokalizza t-tikketti** — uża tikketti tan-navigazzjoni differenti għal verżjonijiet lingwistiċi differenti

## Limitazzjonijiet

- It-tikketti tan-navigazzjoni huma biss għall-wiri; l-`name` intern xorta jintuża għall-identifikazzjoni ta’ WordPress
- L-appoġġ tat-theme jvarja; mhux it-themes kollha jappoġġjaw il-postijiet kollha tal-menu
- L-oġġetti tal-menu jridu jiżdiedu separatament wara l-ħolqien tal-menu
- Il-bidla ta’ tikketta tan-navigazzjoni teħtieġ aġġornament tal-menu

## Kapaċitajiet Relatati

- [Iġġenera Logo SVG](./generate-logo-svg.md) — oħloq logos għall-header tas-sit tiegħek
- [Ivvalida l-Kuntrast tal-Palette](./validate-palette-contrast.md) — żgura skemi ta’ kuluri aċċessibbli
