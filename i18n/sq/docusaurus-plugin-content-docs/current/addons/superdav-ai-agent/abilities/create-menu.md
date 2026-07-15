---
title: Krijo menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Krijo Menu

Aftësia **Krijo Menu** krijon menu navigimi në WordPress me mbështetje për etiketa të dallueshme navigimi, të ndara nga titujt e faqeve.

## Përmbledhje {#overview}

Kjo aftësi zgjeron funksionalitetin standard të krijimit të menuve me mundësinë për të specifikuar një parametër `navigation_label`. Kjo ju lejon të krijoni menu ku etiketa e shfaqur në navigim ndryshon nga titulli i faqes, duke ofruar më shumë fleksibilitet në strukturën e sajtit dhe përvojën e përdoruesit.

## Parametrat {#parameters}

| Parametri | Lloji | I detyrueshëm | Përshkrimi |
|-----------|------|----------|-------------|
| `name` | string | Po | Emri i menusë, p.sh. `Primary Navigation` |
| `location` | string | Jo | Vendndodhja e temës ku do t’i caktohet kjo menu, p.sh. `primary` |
| `navigation_label` | string | Jo | Etiketa që do të shfaqet në navigim (e dallueshme nga titulli i faqes) |

## Vlera e kthyer {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etiketa e navigimit kundrejt titullit të faqes {#navigation-label-vs-page-title}

Parametri `navigation_label` ju lejon të ndani emrin e brendshëm të menusë nga etiketa që u shfaqet përdoruesve:

- **`name`** — Identifikuesi i brendshëm i menusë që përdoret nga WordPress (p.sh., "Primary Navigation")
- **`navigation_label`** — Etiketa që u shfaqet vizitorëve të sajtit në navigim (p.sh., "Main Menu")

Kjo është e dobishme kur:
- Konventa juaj e emërtimit të brendshëm ndryshon nga etiketat që shohin përdoruesit
- Dëshironi etiketa më të shkurtra në navigim sesa në panelin e administrimit
- Duhet të mbështesni shumë gjuhë me gjatësi të ndryshme etiketash
- Po ndërtoni menu për rajone ose grupe përdoruesish specifike

## Shembuj përdorimi {#usage-examples}

### Shembulli 1: Menu e thjeshtë me etiketë navigimi {#example-1-simple-menu-with-navigation-label}

**Kërkesa:**
```
Krijo një menu navigimi kryesore të quajtur "Main Navigation" me etiketën e navigimit "Menu".
```

**Rezultati:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Shembulli 2: Menu për një vendndodhje specifike të temës {#example-2-menu-for-specific-theme-location}

**Kërkesa:**
```
Krijo një menu fundfaqeje të quajtur "Footer Links" me etiketën e navigimit "Quick Links" dhe caktoje te vendndodhja e fundfaqes.
```

**Rezultati:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrimi me Theme Builder {#integration-with-theme-builder}

Kur përdorni Theme Builder, aftësia Krijo Menu:

1. Zbulon automatikisht vendndodhjet e disponueshme të menuve të temës
2. Krijon menu me etiketa të përshtatshme navigimi për dizajnin tuaj
3. Cakton menutë te vendndodhjet e sakta të temës
4. Mbështet shtimin e elementeve të menusë pas krijimit

## Aftësi të lidhura {#related-abilities}

- **`add_menu_item`** — Shtoni elemente në një menu ekzistuese
- **`update_menu`** — Riemërtoni një menu ose ricaktojeni te një vendndodhje teme
- **`delete_menu`** — Hiqni një menu nga sajti juaj

## Praktikat më të mira {#best-practices}

- **Përdorni etiketa të qarta navigimi** — mbajini etiketat të përmbledhura dhe përshkruese për përdoruesit
- **Përputhni vendndodhjet e temës** — caktoni menutë te vendndodhja e saktë e temës për shfaqje të duhur
- **Planifikoni strukturën e menusë** — vendosni hierarkinë e menusë suaj përpara se të krijoni elemente
- **Testoni përshtatshmërinë** — verifikoni që menutë shfaqen saktë në pajisjet mobile
- **Lokalizoni etiketat** — përdorni etiketa të ndryshme navigimi për versione të ndryshme gjuhësore

## Kufizimet {#limitations}

- Etiketat e navigimit janë vetëm për shfaqje; `name` i brendshëm përdoret ende për identifikimin në WordPress
- Mbështetja e temës ndryshon; jo të gjitha temat mbështesin të gjitha vendndodhjet e menuve
- Elementet e menusë duhet të shtohen veçmas pas krijimit të menusë
- Ndryshimi i një etikete navigimi kërkon përditësimin e menusë

## Aftësi të lidhura {#related-abilities-1}

- [Gjenero Logo SVG](./generate-logo-svg.md) — krijoni logo për kokën e sajtit tuaj
- [Validoni kontrastin e paletës](./validate-palette-contrast.md) — siguroni skema ngjyrash të aksesueshme
