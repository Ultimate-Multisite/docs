---
title: Mga Abilidad sa Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Mga Abilidad sa Theme Builder: Scaffold ug I-activate ang Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Ang Superdav AI Agent v1.12.0 nagpaila og duha ka gamhanan nga abilidad nga makatabang nimo maghimo ug mag-deploy og custom block themes direkta gikan sa chat interface.

## Overview {#overview}

Ang mga abilidad nga **scaffold-block-theme** ug **activate-theme** nagtugot sa mga agent nga:
- Maghimo og kompleto, production-ready nga block themes base sa imong mga detalye
- Awtomatikong mag-activate sa themes sa imong site nga walay kinahanglan nimong buhaton manually
- Makamugna og usa ka magkabuhaton nga hitsura pinaagi sa giya nga mga desisyon sa disenyo

## Scaffold Block Theme {#scaffold-block-theme}

Ang abilidad nga **scaffold-block-theme** naghimo og bag-ong WordPress block theme nga adunay kompleto nga istraktura sa theme, lakip na:

- `theme.json` configuration uban ang design tokens
- Block template files para sa mga kasagaran nga layout
- Custom block styles ug variations
- Theme metadata ug support declarations

### Unsaon Pagpatawag (How to Invoke) {#how-to-invoke}

Sa imong chat sa Superdav AI Agent, pwede kang mangayo og paghimo og theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Ang agent magbuhat niini:
1. Mangolekta sa imong mga gusto sa disenyo pinaagi sa panaghisgot
2. Maghimo sa kompleto nga istraktura sa theme
3. Mogawa sa tanang kinahanglanon nga mga file sa theme
4. Magandam sa theme para ma-activate

### Gipaabot nga Output (Expected Output) {#expected-output}

Kung malampuson ang pagpadagan sa abilidad, makita nimo:

- Kumpirmasyon nga ang theme nakasagol na (scaffolded)
- Ang ngalan ug lokasyon sa theme
- Usa ka summary sa mga design tokens nga gigamit (mga kolor, typography, spacing)
- Status nga andam na i-activate

Pananglitan nga output:
```
✓ Theme "Modern Agency" nakasagol na sa malampuson
  Lokasyon: /wp-content/themes/modern-agency/
  Mga Kolor: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Andam na i-activate
```

## Activate Theme {#activate-theme}

Ang abilidad nga **activate-theme** nag-usab sa imong site ngadto sa bagong gihimo o naa nang block theme.

### Unsaon Pagpatawag (How to Invoke) {#how-to-invoke-1}

Human mag-scaffold og theme, pwede nimo dayon kining i-activate:

```
"I-activate ang Modern Agency theme"
```

O i-activate bisan unsang existing theme:

```
"Mag-switch sa Twentytwentyfour theme"
```

### Gipaabot nga Output (Expected Output) {#expected-output-1}

Kung malampuson ang pag-activate:

- Pagpamatuod kung unsa ang active theme
- Nagpabilin nga ngalan sa nauna nga theme (para magamit isip reference)
- Site URL diin naglihok na ang theme
- Bisag unsa pang mga nota bahin sa setup sa theme

Pananglitan nga output:
```
✓ Theme successfully activated
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Naglihok na sa: https://yoursite.com
  Nota: Siguraduhon ang imong homepage para ma-verify ang layout
```

## Workflow: Scaffold ug Activate {#workflow-scaffold-and-activate}

Ang kasagaran nga workflow nagkombina sa duha ka abilidad:

1. **Pagpangayo og paghimo og theme**: "Maghimo og block theme para sa akong SaaS landing page"
2. **Ang Agent mag-scaffold sa theme**: Maghimo og mga files ug design tokens
3. **Review ug pagpaayo (Review and refine)**: Maghisgot bahin sa mga kausaban sa disenyo kung gikinahanglan
4. **I-activate**: "I-activate na ang theme"
5. **Pag-verify**: Bisitaha ang imong site para masiguro nga ang bag-ong disenyo naglihok na

## Design Tokens ug Customization {#design-tokens-and-customization}

Ang mga gihimo og scaffold nga themes naggamit sa WordPress design tokens (pinaagi sa `theme.json`) alang sa:

- **Mga Kolor**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius ug width tokens
- **Shadows**: Elevation levels

Kining mga tokens nag-sentro sa `theme.json`, nga dali ra i-adjust ang imong tibuok design system gikan sa usa ka file.

## Mga Limitasyon ug Nota {#limitations-and-notes}

Ang mga Theme kay gihimo sa `/wp-content/themes/` ug kinahanglan mosunod sa naming convention sa WordPress.
Kinahanglan og saktong permiso ang pag-activate sa inyong WordPress site.
Gamay ra ang Custom PHP code sa themes; gamita ang plugins para sa komplikadong functionality.
Mas maayo nga molihok ang Block themes uban sa WordPress 5.9 ug mas bag-o pa.

## Troubleshooting {#troubleshooting}

**Dili moabot ang Theme human gihimo (scaffolding)**
- Siguraduhon nga naa ang folder sa theme ug tama ang permissions niini.
- Check kung ang `theme.json` valid JSON ba.
- Siguraduhon nga dili mag-conflict ang ngalan sa theme sa mga existing themes.

**Mapakyas ang Activation**
- I-confirm nga naa kay administrator permissions.
- Siguraduhon nga readable ang folder sa theme para sa WordPress.
- Review ang WordPress error logs para makita ang detalye.

**Dili nag-apply ang Design tokens**
- Siguraduhon nga tama ang syntax sa `theme.json`.
- I-clear ang bisan unsang caching plugins.
- Check kung ang inyong WordPress version suporta sa mga tokens nga inyong gigamit.

## Unsa ang Sunod nga Buhaton (Next Steps) {#next-steps}

Human ma-activate ninyo ang inyong theme, mahimo ninyo:
- Gamita ang **Design System Aesthetics skill** para pino-puso ang typography, colors, ug spacing.
- I-customize ang individual block styles pinaagi sa WordPress block editor.
- Dugangi custom CSS sa `style.css` file sa theme.
- Paghimo og custom block templates para sa mga specific page types.
