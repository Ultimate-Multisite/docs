---
title: Daloy ng Onboarding para sa Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Daloy ng Onboarding para sa Theme Builder

Ang Superdav AI Agent v1.12.0 ay nagpapakilala ng gabay na **Theme Builder onboarding flow** na tumutulong sa iyo na gumawa ng custom block theme habang nasa iyong unang setup pa lang. Binabago nito ang lumang Site Builder mode para maging mas flexible at may tulong ng agent.

## Ano ang Theme Builder Onboarding Flow?

Ang Theme Builder onboarding flow ay isang interactive setup wizard na:

- Ginagabayan ka sa mga desisyon sa disenyo (kulay, typography, layout)
- Kinukuha ang iyong mga kagustuhan sa visual identity ng site mo
- Gumagawa ng custom block theme na swak para sa pangangailangan mo
- Awtomatikong inaaktibo ang theme kapag tapos ka na

Ang flow na ito ay pinapagana ng **Setup Assistant agent**, na nagtatanong ng mga malinaw na tanong at unti-unting bumubuo ng iyong theme.

## Pagsisimula sa Theme Builder Onboarding

### Unang Pag-setup (First-Run Setup)

Kapag unang nag-launch ka ng Superdav AI Agent sa bagong WordPress installation, makikita mo ito:

```
Welcome to Superdav AI Agent!

Ano ang gusto mong gawin?
1. Gumawa ng custom theme (Theme Builder)
2. Gumamit ng existing theme
3. I-skip muna ang setup
```

Piliin ang **"Build a custom theme"** para pumasok sa Theme Builder onboarding flow.

### Manual na Pag-activate

Maaari mo ring simulan ang Theme Builder onboarding anumang oras sa pamamagitan ng paghingi:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## Mga Hakbang sa Onboarding

### Hakbang 1: Pagpili ng Mode (Mode Selection)

Tatanungin ka ng Setup Assistant agent tungkol sa iyong preference:

```
Paano mo gustong buuin ang iyong theme?
- Guided (Magtatanong ako at gagawin ko ito para sa iyo)
- Hands-on (Ipakikita ko sa iyo ang mga opsyon at ikaw ang magdedesisyon)
```

Ang **Guided mode** ay inirerekomenda para sa karamihan ng users; nagbibigay ang agent ng mga rekomendasyon sa disenyo batay sa iyong industriya at mga layunin.

### Hakbang 2: Detalye ng Site (Site Specification)

Tatanungin ka tungkol sa iyong site:

Ang impormasyong ito ay naka-save sa iyong **site_brief** memory, na ginagamit ng mga agent sa mga susunod na sesyon.

### Step 3: Mga Desisyon para sa Design System

Gabayan ka ng agent sa pagpili ng design token:

- **Typography**: Font family (serif, sans-serif, monospace) at scale ng laki
- **Color palette**: Primary, secondary, accent, at neutral na kulay
- **Spacing**: Compact, normal, o spacious na layout
- **Motion**: Mga animation at transition (kung gusto mo)

### Step 4: Pagbuo ng Theme

Ang Setup Assistant agent ang magbibigay ng balangkas para sa iyong custom block theme gamit ang:

- `theme.json` na naglalaman ng lahat ng design tokens mo
- Block templates para sa mga karaniwang layout (homepage, blog, contact)
- Custom block styles na tumutugma sa iyong design system
- Theme metadata at mga deklarasyon ng suporta sa WordPress

### Step 5: Pag-activate at Pagveripika

Awtomatikong aaktibo ang theme, at makikita mo ito:

```
✓ Ang iyong custom theme ay live na!
  Pangalan ng Theme: [Pangalan ng Iyong Site] Theme
  Mga Kulay: [Primary] / [Secondary]
  Typography: [Font Family]

  Bisitahin ang iyong site para makita ang bagong disenyo.
```

Maaari mo na itong bisitahin ang iyong site para i-verify kung tama ang pagpapakita ng theme.

## Site Specification at site_brief Memory

Sa panahon ng onboarding, kinukuha ng agent ang detalye ng iyong site sa kategoryang **site_brief** memory. Kasama rito:

- Layunin at mga mithiin ng site
- Target na audience
- Mga kulay at tono ng brand
- Mga kagustuhan sa disenyo
- Istruktura ng nilalaman

### Bakit Mahalaga ang site_brief

Sa mga susunod na sesyon, ginagamit ng mga agent ang iyong site_brief para:

Panatili ang pagkakapare-pareho ng disenyo sa mga pagbabago
Magmungkahi ng mga feature na naaayon sa layunin ng iyong site
Magbigay ng mga rekomendasyon na may konteksto
Iwasan ang paulit-ulit na mga tanong tungkol sa setup

### Pagtingin sa Iyong site_brief

Maaari mong itanong sa agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

Ipakikita ng agent ang iyong na-save na spesipikasyon ng site.

## Pag-customize Pagkatapos Mag-onboard

Pagkatapos matapos ang onboarding ng Theme Builder, maaari kang:

### Gamitin ang Design System Aesthetics Skill

Humiling ng mga pagpapahusay sa disenyo:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

Ang **Design System Aesthetics skill** ay gagabay sa iyo sa mga targeted na update sa disenyo.

### I-edit ang theme.json nang direkta

Para sa mga advanced user, i-edit ang `/wp-content/themes/[theme-name]/theme.json` para baguhin ang:

- Color tokens
- Typography scales
- Spacing values
- Border at shadow definitions

### Gumawa ng Custom Block Templates

Gamitin ang WordPress block editor para gumawa ng mga custom template para sa:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Paghahambing: Lumang vs. Bagong Onboarding

| Feature | Site Builder (Luma) | Theme Builder (Bago) |
|---------|----------------------|-------------------|
| Paraan ng Setup | Wizard-based form | Usapang ginagabayan ng Agent |
| Pagbuo ng Theme | Limitadong mga template | Custom scaffolding |
| Design tokens | Manual na paglalagay | Mga pinag-gabay na desisyon |
| Flexibility | Nakapirming opsyon | Maaaring i-customize |
| Mga update sa hinaharap | Hindi tinutukoy | Na-store sa site_brief |

## Pag-troubleshoot

**Hindi natapos ang onboarding flow**
- I-restart ang flow: "Start the Theme Builder onboarding"
- Siguraduhin na updated ang iyong WordPress installation
- Beripikahin kung naka-enable ang Setup Assistant agent

**Hindi ginagamit ang aking site_brief**
- Siguraduhin na may access ang agent sa memorya
- Ipaalala sa agent na "recall my site brief" (balikan ang aking site brief)
- Tingnan kung naka-enable ba ang memorya sa iyong settings

**Hindi tumutugma ang nabuong theme sa aking mga preference**
- Gamitin ang Design System Aesthetics skill para mapino ito
- Ipaalala sa agent na "regenerate the theme with [specific changes]" (mag-regenerate ng theme gamit ang [partikular na pagbabago])
- I-edit nang direkta ang theme.json para sa mas tumpak na kontrol

## Mga Susunod na Hakbang

Pagkatapos makumpleto ang Theme Builder onboarding:

1. **I-verify ang iyong site**: Pumunta sa iyong site para makita ang bagong theme
2. **Pinuhin ang disenyo**: Gamitin ang Design System Aesthetics skill para sa mga pag-aayos
3. **Magdagdag ng content**: Simulan ang paggawa ng content para sa iyong site
4. **Galugarin ang mga kakayahan**: Matutunan ang tungkol sa ibang kakayahan ng agent tulad ng scaffold-block-theme at activate-theme
