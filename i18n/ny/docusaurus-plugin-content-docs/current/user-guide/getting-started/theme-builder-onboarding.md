---
title: Mwayi Wopolo wa Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Mfundo wa Kufunga Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 imafuna **Theme Builder onboarding flow** ambayo imakutendeka kuti upange theme ya custom wakati wamba wako wa kumpanga mwanawu. Iyi imabadza mode ya Site Builder iliyopitilira ndi njira yofunika kwambiri, yomwe imapereka ufunso wa agent.

## Kodi Theme Builder Onboarding Flow ndi chiyani? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow ndi wizard wosonyeza zomwe zimapereka:

- Imapereka mwayi m'mwayi pa zochitika za kupanga (mitundu ya miyoyo, mfundo za chithunzi, mpangidwe)
- Imakubweretsa zofunso za chinthu chomwe m'chithunzi cha wanu mukuwoneza
- Imapereka theme ya custom yomwe imaperekera zomwe mukuwona
- Imapanga theme yomwe imaperekera m'mwayi pamene imakomera

Flow i limapereka ndi **Setup Assistant agent**, yomwe imapereka zofunso za kupambana ndipo imapangidwa m'mwayi.

## Kufunga Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Setup ya M'mwayi Woyamba (First-Run Setup) {#first-run-setup}

Pamene mukuwoneza Superdav AI Agent kwa chinthu cha WordPress chiri, mukuwoneza:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Kukonza **"Build a custom theme"** kuti mukhale m'theme builder onboarding flow.

### Kufunga M'mwayi Wopereka (Manual Activation) {#manual-activation}

Mukuwoneza kuti muli ndi ule Theme Builder onboarding kwa nthawi yomwe mukuwoneza:

```
"Start the Theme Builder onboarding"
```

kapena

```
"Help me create a custom theme"
```

## Zifukwa za Onboarding {#the-onboarding-steps}

### Step 1: Kukhonza M'mwayi (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent imapereka zofunso za m'mwayi wanu:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** imaperekedwa kwambiri kwa anthu ambiri; agent imapereka zofunso za kupanga m'mwayi monga momwe mukuwoneza ndi zomwe mukuwona.

### Step 2: Kufotokoza M'site (Site Specification) {#step-2-site-specification}

Mukuwoneza za site yanu:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, etc.
- **Target audience**: Ndiye muliwo? (Who are your visitors?)
- **Brand colors**: Primary and secondary colors (or "I'm not sure") - Mwayi muliwo? (Are you unsure?)
- **Tone**: Professional, creative, playful, minimal, etc.

This information iye itiririra mu **site_brief** memory yawe, kuli mwayi wosomera ku sessions zina.

### Step 3: Design System Decisions {#step-3-design-system-decisions}

Agent yake uliwonetsa kuti muliwo mwayi wosomera ku design tokens (design elements):

- **Typography**: Font family (serif, sans-serif, monospace) na size scale
- **Color palette**: Primary, secondary, accent, and neutral colors
- **Spacing**: Compact, normal, or spacious layouts
- **Motion**: Animations and transitions (if desired) - Kuti muliwo mwayi wosomera ku animations na transitions.

### Step 4: Theme Generation {#step-4-theme-generation}

Setup Assistant agent yake uliwonetsa theme yawe ya custom (custom block theme) naliye:

- `theme.json` yake yikwera design tokens zake zonse
- Block templates kuti muliwo layouts zosonse (homepage, blog, contact)
- Custom block styles zomwe zimakwanira design system yawe
- Theme metadata na declarations za WordPress

### Step 5: Activation and Verification {#step-5-activation-and-verification}

Theme iye imalimbikira (automatically activated), ndipo muliwo mwayi wosomera kuona:

```
✓ Theme yawe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yom

Kuthandiza ulingani wosayelo wa site_brief

Mungathe kuli:

```
"Show me my site brief"
```

koma

```
"What do you know about my site?"
```

Mwanamukana (agent) utondetsa ufotokozi wanu wa site.

## Kufotokozera Site_brief Wanu Mmodzi Wosayelo

Panda kuonja Theme Builder, muli ndi ulemu:

### Gwiritsa ntchito Skill ya Design System Aesthetics

Mungathe kukhulupatsa kusintha za design:

```
"Refine the typography to be more modern"
```

koma

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** imapamukira m'moyo wanu kuti muonjeza kusintha za design.

### Kufotokozera theme.json Mmodzi Wosayelo

Pansi pawo, mmodzi wosavuta (advanced users) mungofotokozere `/wp-content/themes/[theme-name]/theme.json` kuti muonjeza:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Kukhazikitsa Custom Block Templates

Gwiritsani ntchito WordPress block editor kuti mukhazikitsire templates zosavuta kwa:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Kupereka Mwayi: Zosiyanasiyana za Onboarding Wopambana vs. Wopambana Mpamba

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Kukhala ndi Masulira (Troubleshooting)

**Onboarding flow simukukumbutsa**
- Retsukani mwayi: "Start the Theme Builder onboarding"
- Onjeza kuti WordPress yanu imene kukhala lino
- Onjeza kuti Setup Assistant agent imene



**Site_brief ya sikwira**
- Kufuna kuti mwana wanu (agent) akuti ali ndi memory?
- Mupatsani mwana wanu kuti "kumbukire site brief yanu" (recall my site brief).
- Onani kuti memory ikulimbikizidwa m'settings yanu.

**Theme yomwe imapangidwa simukumana ndi zofunso zanu**
- Gwiritsani ntchito skill ya Design System Aesthetics kuti muwoneke bwanji, ndipo mwamulitsa kuti "upangidwe theme ndi [zofunso zina]" (regenerate the theme with [specific changes]).
- Onani theme.json m'moyo wanu kuti muli ndi ulemu wopereka kwa kusintha kwa mpaka.

## Zofunso Zikulu Zikuchepa

Pambuyo pamene mumaliza onboarding ya Theme Builder:

1. **Onani site yanu**: Onani sitini lanu kuti muone theme yomwe imapangidwa.
2. **Sinthani zofunso**: Gwiritsani ntchito skill ya Design System Aesthetics kuti muli ndi kusintha.
3. **Onjeza m'malo**: Muleni kupeza m'malo kwa site yanu.
4. **Onani zofunso zina**: Onani za zofunso zina zomwe mwana wanu (agent) amagwira, monga scaffold-block-theme ndi activate-theme.
