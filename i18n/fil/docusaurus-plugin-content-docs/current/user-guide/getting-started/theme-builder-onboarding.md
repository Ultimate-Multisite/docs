---
title: Pagpapakilala sa Theme Builder Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Ipinakilala ng Superdav AI Agent v1.12.0 ang isang ginagabayan na **Theme Builder onboarding flow** na tumutulong sa iyo na gumawa ng custom block theme sa unang pag-setup mo. Pinapalitan nito ang dating Site Builder mode ng mas flexible at agent-assisted na paraan.

## Ano ang Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Ang Theme Builder onboarding flow ay isang interactive setup wizard na:

- Gumagabay sa iyo sa mga desisyon sa disenyo (kulay, tipograpiya, layout)
- Kinukuha ang mga kagustuhan sa visual identity ng iyong site
- Gumagawa ng custom block theme na akma sa iyong pangangailangan
- Nag-a-activate ng theme nang awtomatiko pagkatapos kumpleto

Ang flow na ito ay pinapagana ng **Setup Assistant agent**, na nagtatanong ng mga paglilinaw at nagtatayo ng iyong theme nang paunti-unti.

## Pag-umpisa sa Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### First-Run Setup {#first-run-setup}

Kapag unang nag-launch ka ng Superdav AI Agent sa isang bagong WordPress installation, makikita mo ang:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Piliin ang **"Build a custom theme"** para makapasok sa Theme Builder onboarding flow.

### Manual Activation {#manual-activation}

Maaari ka ring magsimula ng Theme Builder onboarding anumang oras sa pamamagitan ng pag-request ng:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## Ang mga Hakbang sa Onboarding {#the-onboarding-steps}

### Step 1: Mode Selection {#step-1-mode-selection}

Tatanungin ka ng Setup Assistant agent tungkol sa iyong kagustuhan:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

Inirerekomenda ang **Guided mode** para sa karamihan ng gumagamit; ang agent ang gagawa ng mga rekomendasyon sa disenyo batay sa iyong industriya at mga layunin.

### Step 2: Site Specification {#step-2-site-specification}

Tatanungin ka tungkol sa iyong site:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, atbp.
- **Target audience**: Sino ang mga bisita mo?
- **Brand colors**: Primary at secondary colors (o "Hindi ako sigurado")
- **Tone**: Professional, creative, playful, minimal, atbp.

Ang impormasyong ito ay iniimbak sa iyong **site_brief** memory, na siyang ire-reference ng mga agent sa mga susunod na session.

### Step 3: Design System Decisions {#step-3-design-system-decisions}

Gagabayan ka ng agent sa pagpili ng mga design token:

- **Typography**: Font family (serif, sans-serif, monospace) at size scale
- **Color palette**: Primary, secondary, accent, at neutral colors
- **Spacing**: Compact, normal, o spacious layouts
- **Motion**: Animations at transitions (kung gusto)

### Step 4: Theme Generation {#step-4-theme-generation}

Ang Setup Assistant agent ay magbabalangkas (scaffolds) ng iyong custom block theme gamit ang:

- `theme.json` na naglalaman ng lahat ng iyong design tokens
- Block templates para sa mga karaniwang layout (homepage, blog, contact)
- Custom block styles na tumutugma sa iyong design system
- Theme metadata at WordPress support declarations

### Step 5: Activation and Verification {#step-5-activation-and-verification}

Awtomatikong ia-activate ang theme, at makikita mo ang:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Maaari mo namang bisitahin ang iyong site para i-verify na tama ang pagpapakita ng theme.

## Site Specification at site_brief Memory {#site-specification-and-sitebrief-memory}

Sa panahon ng onboarding, kinukuha ng agent ang specification ng iyong site sa isang **site_brief** memory category. Kasama rito ang:

- Site purpose at goals
- Target audience
- Brand colors at tone
- Design preferences
- Content structure

### Bakit Mahalaga ang site_brief {#why-sitebrief-matters}

Sa mga susunod na session, ire-reference ng mga agent ang iyong site_brief para:

- Mapanatili ang design consistency sa pagbabago
- Magmungkahi ng mga feature na nakaayon sa layunin ng iyong site
- Magbigay ng context-aware na rekomendasyon
- Maiwasan ang pag-uulit ng mga tanong sa setup

### Pagtingin sa Iyong site_brief {#viewing-your-sitebrief}

Maaari mong tanungin ang agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

Ipapapakita ng agent ang iyong naka-store na site specification.

## Pag-customize Pagkatapos ng Onboarding {#customizing-after-onboarding}

Pagkatapos makumpleto ang Theme Builder onboarding, maaari mong:

### Gamitin ang Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Mag-request ng mga pagpapahusay sa disenyo:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

Ang **Design System Aesthetics skill** ay gagabay sa iyo sa mga target na pag-update sa disenyo.

### I-edit ang theme.json nang Direkta {#edit-themejson-directly}

Para sa mga advanced user, i-edit ang `/wp-content/themes/[theme-name]/theme.json` para i-adjust ang:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Gumawa ng Custom Block Templates {#create-custom-block-templates}

Gamitin ang WordPress block editor para gumawa ng custom templates para sa:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Paghahambing: Luma vs. Bago na Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Troubleshooting {#troubleshooting}

**Hindi natapos ang onboarding flow**
- I-restart ang flow: "Start the Theme Builder onboarding"
- I-check na updated ang iyong WordPress installation
- I-verify na enabled ang Setup Assistant agent

**Hindi ginagamit ang aking site_brief**
- Kumpirmahin na may access ang agent sa memory
- Tanungin ang agent na "recall my site brief"
- I-check na enabled ang memory sa iyong settings

**Hindi tugma sa aking kagustuhan ang nabuong theme**
- Gamitin ang Design System Aesthetics skill para i-refine ito
- Tanungin ang agent na "regenerate the theme with [specific changes]"
- I-edit ang theme.json nang direkta para sa mas tumpak na kontrol

## Next Steps {#next-steps}

Pagkatapos makumpleto ang Theme Builder onboarding:

1. **I-verify ang iyong site**: Bisitahin ang iyong site para makita ang bagong theme
2. **I-refine ang disenyo**: Gamitin ang Design System Aesthetics skill para sa mga pag-aayos
3. **Magdagdag ng content**: Simulan ang pagbuo ng content ng iyong site
4. **Galugarin ang mga kakayahan**: Matuto tungkol sa iba pang agent abilities tulad ng scaffold-block-theme at activate-theme
