---
title: Boitsoetso bohlokoa la Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Mabotse a Tlhaloso ea Theme Builder: Ho Hlahloba le Ho Baola Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 e ntsa litlhahlo tse fapaneng tse duo tse ka ba le ho hlahloba le ho baola block themes tse fapaneng tsela tseo a tšobetso ea chat interface.

## Leano (Overview) {#overview}

Litlhahlo tsa **scaffold-block-theme** le **activate-theme** li ba le ho etsa agents:
- Ho hlahloba block themes tse fetang, tse ka ba le ho ba le ka setso sa hau
- Ho baola theme ka site ea hau nang le ho ba le ka tsela e nngoe e nngoe (without manual intervention)
- Ho etsa litšomo tsa haholo ho ba le ka hloekileng ka diketso tse di hlahang

## Ho Hlahloba Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

Litlhahlo **scaffold-block-theme** li hlahloba block theme e ntlha ea WordPress e ntle, e na le setso sa theme se fetang, se na le:

- `theme.json` le diketso tsa design tokens
- Litsebelisoa tsa template tsa block ho litšomo tse fapaneng
- Styles le variations tsa block tse fapaneng
- Metadata ea theme le diketso tsa ho ba le ka hlahloba (support declarations)

### Ho Baola (How to Invoke) {#how-to-invoke}

Ka chat ea hau le Superdav AI Agent, u ka hohola ho hlahloba theme:

```
"Hlahloba block theme e ntse e ntle e ntse e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e ntse e ntle e nt

Tsela la **activate-theme** e fana ka sefetsa site ea hau ho theme e ntlha e fetileng kapa e nang le e kholo.

### Ena e ba le ho sebelisa

Ha o fetileng theme, u ka e fana ho sebelisa ka batho:

```
"Activate the Modern Agency theme"
```

Kapa fana ho sebelisa theme e nang le e kholo:

```
"Switch to the Twentytwentyfour theme"
```

### Ho Ba Le Ho Hlalosa

Ha ho ba le ho fana ka sefetsa:

- Ho bona theme e ntlha e fetileng
- Lebo la theme e nang le e kholo (ho hlalosana)
- URL ea site sefalo sa theme e ntse e le
- Letsatsi la setso sehle sa theme

Ho ba le ho fana ka sefetsa:
```
✓ Theme e fetileng ka hlokompho
  Theme e ntlha: Modern Agency
  Theme e nang le e kholo (ho hlalosana): Twentytwentyfour
  E le le: https://yoursite.com
  Letsatsi la setso: Hlalosa homepage ea hau ho bona layout e fetileng
```

## Ho Ba Le Workflow: Fetilisa le Fana

Workflow e ntlha e sebelisa batho ba leho bohle:

1. **Ho hloka ho fetola theme**: "Fetola block theme ho landing page ea me saas"
2. **Agent e fetile theme**: E fetola files le design tokens
3. **Ho hlalosa le ho fetola**: Ho buisana ka lipolo tsa setso ha ho hlokompha li fetola
4. **Fana**: "Activate the theme now"
5. **Ho bona**: Ho tlaase site ea hau ho bona layout e ntlha e ntse e le

## Design Tokens le Ho Fetola

Themes e fetileng e sebelisa WordPress design tokens (via `theme.json`) ho:

- **Mokotso**: Primary, secondary, accent, neutral palette
- **Lekutso**: Font families, sizes, weights, line heights
- **Ho tsamaetsa**: Padding, margin, gap scales
- **Borders**: Radius le width tokens
- **Shadows**: Elevation levels

Tokens e hlaloswa ka `theme.json`, ho etsa ho lula setso sehle sa hau ka file ena.

## Ho Ba Le Ho Hlalosa

Ho ba le ho fana:

- Themes e le fana i `/wp-content/themes/` le ba le tlhahlobo ea WordPress
- Ho tsamaea (Activation) ho hloka litlhokomelo tse nang le site ea WordPress ea hau

Ho hloekisa PHP code e fetang ka themes haholo; u sebelisa plugins ho feta bonnuma ba functionality e fetang.

Block themes li ba bonnuma meglio le WordPress 5.9 le leng le fetileng.

## Ho Hlalosa Matlhaolo (Troubleshooting)

**Theme ha le bona fa le fana ka tlhahlobo**
- Re ke le hore diriri ea theme e fali le e na le litlhokomelo tse nang le baona
- Re ke le hore `theme.json` e le JSON e fetang
- Re ke le hore lemo la theme ha le le mo leba le le fetileng

**Tsamaea (Activation) ha se a fana**
- Re ke le hore u na le litlhokomelo tsa administrator
- Re ke le hore diriri ea theme e le lebolele ho WordPress
- Re ke le hore u re le logs ea WordPress ho bona tlhahlobo

**Design tokens ha se a ba leba**
- Re ke le hore syntax ea `theme.json` e fetang
- Re ke le hore u faka caching plugins tse anyane
- Re ke le hore version ea WordPress ea hau e ka feta tokens o sebelisang

## Setso sa Ho Fetola (Next Steps)

Ha u tsamaea theme ea hau, u ka:
- Ho sebelisa **Design System Aesthetics skill** ho fetola typography, colors, le spacing
- Ho fetola styles tsa block e le leng le leng ka WordPress block editor
- Ho faka CSS e fetang sa file ea `style.css` ea theme

Ho fetola templates ea block e fetang ho dits'a page tse fetileng
