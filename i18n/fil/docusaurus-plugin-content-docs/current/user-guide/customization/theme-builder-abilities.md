---
title: Kakayahan ng Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Kakayahan sa Theme Builder: Pag-scaffold at Pag-activate ng Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Ipinakilala ng Superdav AI Agent v1.12.0 ang dalawang makapangyarihang kakayahan na nagpapahintulot sa iyo na bumuo at mag-deploy ng custom block themes nang direkta mula sa chat interface.

## Pangkalahatang Ideya (Overview) {#overview}

Ang **scaffold-block-theme** at **activate-theme** abilities ay nagpapahintulot sa mga agent na:
- Bumuo ng kumpleto, handa nang gamitin (production-ready) na block themes batay sa iyong mga detalye
- Awtomatikong i-activate ang mga theme sa iyong site nang walang mano-manong pag-interbensyon
- Lumikha ng magkakaugnay na visual identity sa pamamagitan ng gabay na pagdedesisyon sa disenyo

## Pag-scaffold ng Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

Ang **scaffold-block-theme** ability ay bumubuo ng isang bagong WordPress block theme na may kumpletong istraktura ng theme, kasama ang:

- `theme.json` configuration na may design tokens
- Mga block template files para sa mga karaniwang layout
- Custom block styles at variations
- Theme metadata at support declarations

### Paano Gamitin (How to Invoke) {#how-to-invoke}

Sa iyong chat sa Superdav AI Agent, maaari mong hilingin ang pagbuo ng theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Ang agent ay gagawin ang mga sumusunod:
1. Kokolektahin ang iyong mga kagustuhan sa disenyo sa pamamagitan ng pag-uusap
2. Bubuo ng kumpletong istraktura ng theme
3. Lilikha ng lahat ng kinakailangang theme files
4. Ihahanda ang theme para sa pag-activate

### Inaasahang Output (Expected Output) {#expected-output}

Kapag matagumpay na naisagawa ang ability, makikita mo ang:

- Kumpirmasyon na na-scaffold na ang theme
- Ang pangalan at lokasyon ng theme
- Isang buod ng mga design tokens na ginamit (kulay, typography, pagitan)
- Status na handa nang i-activate

Halimbawang output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Pag-activate ng Theme (Activate Theme) {#activate-theme}

Ang **activate-theme** ability ay nagpapalit sa iyong site sa isang bagong na-scaffold o umiiral na block theme.

### Paano Gamitin (How to Invoke) {#how-to-invoke-1}

Pagkatapos mag-scaffold ng theme, maaari mo itong i-activate kaagad:

```
"Activate the Modern Agency theme"
```

O i-activate ang anumang umiiral na theme:

```
"Switch to the Twentytwentyfour theme"
```

### Inaasahang Output (Expected Output) {#expected-output-1}

Kapag matagumpay ang pag-activate:

- Kumpirmasyon ng aktibong theme
- Pangalan ng dating theme (para sa pagtukoy)
- URL ng site kung saan kasalukuyang buhay ang theme
- Anumang tala sa setup na partikular sa theme

Halimbawang output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Pag-scaffold at Pag-activate {#workflow-scaffold-and-activate}

Ang isang tipikal na workflow ay pinagsasama ang dalawang abilities:

1. **Hilingin ang pagbuo ng theme**: "Create a block theme for my SaaS landing page"
2. **I-scaffold ng Agent ang theme**: Gumagawa ng files at design tokens
3. **Suriin at pagandahin**: Pag-uusap tungkol sa mga pagbabago sa disenyo kung kinakailangan
4. **I-activate**: "Activate the theme now"
5. **Beripika**: Bisitahin ang iyong site para kumpirmahin na buhay na ang bagong disenyo

## Design Tokens at Pag-customize {#design-tokens-and-customization}

Ang mga na-scaffold na theme ay gumagamit ng WordPress design tokens (sa pamamagitan ng `theme.json`) para sa:

- **Kulay (Colors)**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Pagitan (Spacing)**: Padding, margin, gap scales
- **Borders**: Radius at width tokens
- **Shadows**: Elevation levels

Ang mga token na ito ay sentralisado sa `theme.json`, kaya madaling i-adjust ang buong design system mo mula sa iisang file.

## Limitasyon at Paalala (Limitations and Notes) {#limitations-and-notes}

- Ang mga theme ay na-scaffold sa `/wp-content/themes/` at kailangang sumunod sa mga konbensyon ng pagpapangalan ng WordPress
- Ang pag-activate ay nangangailangan ng angkop na pahintulot (permissions) sa iyong WordPress site
- Ang custom PHP code sa mga theme ay minimal; gumamit ng plugins para sa mas kumplikadong functionality
- Ang mga block themes ay pinakamahusay na gumagana sa WordPress 5.9 pataas

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

**Hindi lumalabas ang Theme pagkatapos mag-scaffold**
- I-verify na umiiral ang theme directory at may tamang permissions
- Tiyakin na ang `theme.json` ay valid JSON
- Siguraduhin na ang pangalan ng theme ay hindi nagkakasalungat (conflict) sa mga umiiral na theme

**Nabigo ang Pag-activate**
- Kumpirmahin na mayroon kang administrator permissions
- I-check na ang theme directory ay nababasa (readable) ng WordPress
- Suriin ang WordPress error logs para sa mga detalye

**Hindi nagagamit ang Design Tokens**
- I-verify na tama ang syntax ng `theme.json`
- Linisin ang anumang caching plugins
- Tiyakin na sinusuportahan ng iyong WordPress version ang mga token na ginagamit mo

## Susunod na Hakbang (Next Steps) {#next-steps}

Pagkatapos i-activate ang iyong theme, maaari mong:
- Gamitin ang **Design System Aesthetics skill** para pagandahin ang typography, kulay, at pagitan
- I-customize ang mga indibidwal na block styles sa pamamagitan ng WordPress block editor
- Magdagdag ng custom CSS sa `style.css` file ng theme
- Gumawa ng custom block templates para sa mga tiyak na uri ng page
