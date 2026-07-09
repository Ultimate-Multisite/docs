---
title: Tsim Ntawv Qhia Zaub Mov
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Tsim Menu {#create-menu}

Lub peev xwm **Tsim Menu** tsim cov WordPress menu rau kev taw qhia, nrog kev txhawb kom muaj cov ntawv lo kev taw qhia uas txawv ntawm cov npe nplooj ntawv.

## Txheej txheem dav {#overview}

Lub peev xwm no nthuav dav txoj haujlwm tsim menu li ib txwm, nrog peev xwm teev tau ib qho `navigation_label` parameter. Qhov no cia koj tsim cov menu uas daim ntawv lo uas tshwm hauv kev taw qhia txawv ntawm npe nplooj ntawv, muab kev ywj pheej ntau dua hauv kev teeb tsa site thiab kev paub siv.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yog | Npe menu, piv txwv li `Primary Navigation` |
| `location` | string | Tsis yog | Qhov chaw theme uas yuav muab menu no rau, piv txwv li `primary` |
| `navigation_label` | string | Tsis yog | Daim ntawv lo uas yuav tshwm hauv kev taw qhia (txawv ntawm npe nplooj ntawv) |

## Tus nqi xa rov qab {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Daim ntawv lo kev taw qhia vs Npe nplooj ntawv {#navigation-label-vs-page-title}

Lub `navigation_label` parameter cia koj cais npe menu sab hauv ntawm daim ntawv lo uas qhia rau cov neeg siv:

- **`name`** — Tus cim menu sab hauv uas WordPress siv (piv txwv li, "Primary Navigation")
- **`navigation_label`** — Daim ntawv lo uas tshwm rau cov neeg tuaj saib site hauv kev taw qhia (piv txwv li, "Main Menu")

Qhov no muaj txiaj ntsig thaum:
- Koj txoj kev tis npe sab hauv txawv ntawm cov ntawv lo uas cov neeg siv pom
- Koj xav tau cov ntawv lo luv dua hauv kev taw qhia dua li hauv admin panel
- Koj yuav tsum txhawb ntau hom lus uas muaj qhov ntev ntawm ntawv lo sib txawv
- Koj tab tom tsim cov menu rau tej cheeb tsam tshwj xeeb lossis pawg neeg siv

## Piv txwv kev siv {#usage-examples}

### Piv txwv 1: Menu yooj yim nrog daim ntawv lo kev taw qhia {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Tsim ib qho primary navigation menu hu ua "Main Navigation" nrog daim ntawv lo kev taw qhia "Menu".
```

**Qhov tshwm sim:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Piv txwv 2: Menu rau qhov chaw theme tshwj xeeb {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Tsim ib qho footer menu hu ua "Footer Links" nrog daim ntawv lo kev taw qhia "Quick Links" thiab muab nws rau qhov chaw footer.
```

**Qhov tshwm sim:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Kev koom nrog Theme Builder {#integration-with-theme-builder}

Thaum siv Theme Builder, lub peev xwm Tsim Menu yuav:

1. Nrhiav tau cov chaw menu ntawm theme uas muaj siv tau yam tsis siv tes
2. Tsim cov menu nrog cov ntawv lo kev taw qhia uas haum rau koj qhov qauv tsim
3. Muab cov menu rau cov chaw theme uas raug
4. Txhawb kev ntxiv cov khoom hauv menu tom qab tsim tas

## Cov peev xwm uas cuam tshuam {#related-abilities}

- **`add_menu_item`** — Ntxiv cov khoom rau ib qho menu uas twb muaj lawm
- **`update_menu`** — Hloov npe ib qho menu lossis muab nws rov rau ib qho chaw theme
- **`delete_menu`** — Tshem ib qho menu tawm ntawm koj lub site

## Cov kev coj zoo tshaj {#best-practices}

- **Siv cov ntawv lo kev taw qhia kom meej** — khaws cov ntawv lo kom luv thiab piav meej rau cov neeg siv
- **Ua kom phim cov chaw theme** — muab cov menu rau qhov chaw theme uas raug kom tso saib tau zoo
- **Npaj cov qauv menu** — txiav txim siab koj qib txheej menu ua ntej tsim cov khoom
- **Sim kev teb raws lub vijtsam** — xyuas kom meej tias cov menu tso saib raug rau cov cuab yeej mobile
- **Ua cov ntawv lo raws lus hauv zos** — siv cov ntawv lo kev taw qhia sib txawv rau cov version lus sib txawv

## Cov kev txwv {#limitations}

- Cov ntawv lo kev taw qhia tsuas yog siv rau kev tso saib xwb; lub `name` sab hauv tseem raug siv rau WordPress kev txheeb xyuas
- Kev txhawb ntawm theme sib txawv; tsis yog txhua theme yuav txhawb txhua qhov chaw menu
- Cov khoom hauv menu yuav tsum muab ntxiv cais tom qab tsim menu tas
- Kev hloov daim ntawv lo kev taw qhia yuav tsum hloov kho lub menu

## Cov peev xwm uas cuam tshuam {#related-abilities-1}

- [Tsim Logo SVG](./generate-logo-svg.md) — tsim logo rau koj lub site header
- [Tshawb xyuas Palette Contrast](./validate-palette-contrast.md) — xyuas kom muaj cov qauv xim uas nkag tau yooj yim
