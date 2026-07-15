---
title: Onboarding Flow sa Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Ang Superdav AI Agent v1.12.0 nagpaila og giya nga **Theme Builder onboarding flow** nga motabang nimo sa paghimo og custom block theme atol sa imong unang setup. Kini nagpuli na sa daan nga Site Builder mode ug usa ka mas flexible, agent-assisted nga pamaagi.

## Unsa ang Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Ang Theme Builder onboarding flow kay usa ka interactive setup wizard nga:

- Giya ka pinaagi sa mga desisyon sa disenyo (mga kolor, typography, layout)
- Nagkuha sa imong gusto nga hitsura sa imong site
- Mogenerate og custom block theme nga gipahimo para nimo
- Awtonom nga mag-activate sa theme kung mahuman na

Ang flow kay gi-power sa **Setup Assistant agent**, nga mangutana og mga klaripikasyon ug magtukod sa imong theme aron kini molambo.

## Pagsugod sa Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Unang Pag-launch (First-Run Setup) {#first-run-setup}

Kung unang i-launch nimo ang Superdav AI Agent sa bag-ong WordPress installation, makita nimo niini:

```
Welcome to Superdav AI Agent!

Unsa may gusto nimong buhaton?
1. Buat og custom theme (Theme Builder)
2. Gamit ang existing theme
3. Palihog palihog sa setup karon
```

Piliha ang **"Build a custom theme"** aron mosulod sa Theme Builder onboarding flow.

### Manual Activation {#manual-activation}

Mahimo usab nimo sugdan ang Theme Builder onboarding bisan kanus-a pinaagi sa pag-request:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## Mga Lakang sa Onboarding {#the-onboarding-steps}

### Lakang 1: Pagpili sa Mode (Mode Selection) {#step-1-mode-selection}

Ang Setup Assistant agent mangutana bahin sa imong gusto:

```
Unsaon nimo paghimo sa imong theme?
- Guided (Mangutana ko og mga pangutana ug akong himuon kini para nimo)
- Hands-on (Ipakita ko kanimo ang mga opsyon ug ikaw ang magdesisyon)
```

Ang **Guided mode** gi-rekomenda para sa kadaghanan sa mga user; ang agent maghatag og mga rekomendasyon sa disenyo base sa imong industriya ug mga tumong.

### Lakang 2: Detalye sa Site (Site Specification) {#step-2-site-specification}

Mangutana kanimo bahin sa imong site:

Ang mga impormasyon nga kini kay **site_brief** memory nimo, diin gihapon gi-store ang tanan. Kini gamiton sa mga agent para magrefer sa umaabot nga mga sesyon.

### Step 3: Mga Desisyon sa Design System {#step-3-design-system-decisions}

Giunsa man kaatiman sa imong pagpili sa design tokens (mga porma sa disenyo):

- **Typography**: Pamilya sa font (serif, sans-serif, monospace) ug ang kadaghan sa gagmay/dako
- **Color palette**: Primary, secondary, accent, ug neutral nga mga kolor
- **Spacing**: Compact (gamay), normal, o spacious (lapad) nga layout
- **Motion**: Mga animation ug transition (kung gusto nimo)

### Step 4: Paghimo sa Theme {#step-4-theme-generation}

Ang Setup Assistant agent maghatag kanimo og balangkas (scaffold) para sa imong custom block theme uban niini:

- `theme.json` nga adunay tanan nimong design tokens
- Block templates para sa mga kasagarang layout (homepage, blog, contact)
- Custom block styles nga nag-match sa imong design system
- Theme metadata ug mga deklarasyon sa suporta sa WordPress

### Step 5: Pag-activate ug Pag-verify {#step-5-activation-and-verification}

Automated na kini ma-activate ang theme, ug makita nimo kini:

```
✓ Ang imong custom theme kay live na!
  Theme name: [Imong Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Bisitaha ang imong site para makita ang bag-ong disenyo.
```

Unya, pwede nimo bisitaha ang imong site para ma-verify nga tama ang pagpakita sa theme.

## Site Specification ug site_brief Memory {#site-specification-and-sitebrief-memory}

Atol sa onboarding, kuhaon sa agent ang detalye sa imong site isip **site_brief** memory category. Naglakip kini niini:

- Katuyoan ug mga tumong sa site
- Target audience (kinsa ang mga bisitante nimo)
- Brand colors ug tono
- Mga gusto sa disenyo
- Estruktura sa content

### Ngano Importante ang site_brief {#why-sitebrief-matters}

Sa umaabot nga mga sesyon, magrefer ang mga agent sa imong site_brief para:

Panatili ang pagka-consistent sa disenyo bisan pa sa mga pagbag-o
Maghatag og mga feature nga haom sa katuyoan sa imong site
Maghatag og mga rekomendasyon nga nagkahibalo sa konteksto
Likayi ang pag-ulit sa mga pangutana bahin sa setup

### Pagtan-aw sa Imong site_brief {#viewing-your-sitebrief}

Mahimo nimong mangutana sa agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

Ang agent magpakita sa imong na-save nga site specification.

## Pag-customize Human sa Onboarding {#customizing-after-onboarding}

Human matapos ang Theme Builder onboarding, mahimo nimong:

### Gamit ang Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Mangayo og mga pagpaayo sa disenyo:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

Ang **Design System Aesthetics skill** maggiya kanimo sa mga targeted nga update sa disenyo.

### I-edit ang theme.json Direkta {#edit-themejson-directly}

Para sa mga advanced user, i-edit ang `/wp-content/themes/[theme-name]/theme.json` aron ma-adjust:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Paghimo og Custom Block Templates {#create-custom-block-templates}

Gamit ang WordPress block editor, maghimo og custom templates para sa:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Pagsamtan: Daang vs. Bag-ong Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Pag-troubleshoot {#troubleshooting}

**Dili natapos ang onboarding flow**
- I-restart ang flow: "Start the Theme Builder onboarding"
- Siguraduhon nga updated ang imong WordPress installation
- I-verify nga enabled ang Setup Assistant agent

**Ang akong site_brief wala ginagamit**
- Siguraduhon nga naa ang access sa memory ang agent
- Pangutana sa agent nga "recall my site brief" (balhin/ibalik ang akong site brief)
- Siguraduhon nga enabled ang memory sa imong settings

**Ang theme nga gi-generate dili tugma sa akong gusto**
- Gamita ang Design System Aesthetics skill para pino-refine kini
- Pangutana sa agent nga "regenerate the theme with [specific changes]" (maghimo og bag-ong theme uban ang [piho nga mga kausaban])
- I-edit ang theme.json direkta para sa mas tukmang kontrol

## Sunod nga mga Lakang {#next-steps}

Human makahuman sa Theme Builder onboarding:

1. **I-verify ang imong site**: Bisitaha ang imong site para makita ang bag-ong theme
2. **Pino-refine ang disenyo**: Gamita ang Design System Aesthetics skill para sa mga adjustments
3. **Magdugang og content**: Sugdan ang paghimo sa content sa imong site
4. **Paligamna ang mga abilidad**: Magtuon bahin sa ubang mga abilidad sa agent sama sa scaffold-block-theme ug activate-theme
