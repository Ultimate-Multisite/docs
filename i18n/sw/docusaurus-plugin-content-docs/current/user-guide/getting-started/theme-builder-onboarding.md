---
title: Mtiririko wa Kuanzisha Muundo wa Mandhari
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Mchakato wa Kuanzisha Theme Builder

Superdav AI Agent v1.12.0 inatangulia **mchakato wa kuanzisha (onboarding flow) wa Theme Builder** unaowakutanisha kwa kuunda theme maalum wakati wa kuanzisha mradi wako wa kwanza. Hii inabadilisha mtindo wa zamani wa Site Builder na kuleta njia rahisi zaidi, inayosaidiwa na agent.

## Theme Builder Onboarding Flow ni Nini?

Mchakato wa kuanzisha Theme Builder ni kichawi cha kuanzisha (setup wizard) kinachotufanya:

- Kutuongoza katika maamuzi ya usanifu (rangi, fonti, mpangilio)
- Kukamata mapendeleo ya mwonekano wa tovuti yako
- Kuunda theme maalum ya block inayolingana na mahitaji yako
- Kuwezesha theme hiyo kiotomatiki baada ya kukamilisha

Mchakato huu unatumia nguvu ya **Setup Assistant agent**, ambayo huuliza maswali ya ufafanuzi na kuunda theme yako kwa hatua kwa hatua.

## Kuanza Theme Builder Onboarding

### Kufanya Setup ya Kwanza

Unapofungua Superdav AI Agent kwa mara ya kwanza kwenye usakinishaji mpya wa WordPress, utaona:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Chagua **"Build a custom theme"** ili kuingia kwenye mchakato wa kuanzisha Theme Builder.

### Kuwezesha kwa Mikono

Unaweza pia kuanza onboarding ya Theme Builder wakati wowote kwa kuomba:

```
"Start the Theme Builder onboarding"
```

au

```
"Help me create a custom theme"
```

## Hatua za Onboarding

### Hatua ya 1: Kuchagua Mtindo (Mode Selection)

Setup Assistant agent inakuuliza kuhusu upendeleo wako:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** inashauriwa kwa watumiaji wengi; agent hutoa mapendekezo ya usanifu kulingana na sekta na malengo yako.

### Hatua ya 2: Maelezo ya Tovuti (Site Specification)

Utoulizwa kuhusu tovuti yako:

- **Lengo la tovuti**: E-commerce, blog, portfolio, SaaS, n.k.
- **Watumiaji walengwa**: Nani ndio wageni wako?
- **Rangi za chapa (Brand colors)**: Rangi kuu na ya pili (au "Sijui")
- **Mtindo (Tone)**: Kitaalamu, ubunifu, wa kuchezea, wa kiwango kidogo, n.k.

Taarifa hizi hihifadhiwa katika kumbukumbu yako ya **site_brief**, ambayo agents hutumia katika vikao vya baadaye.

### Hatua ya 3: Maamuzi ya Design System

Agent inakuongoza kupitia kuchagua tokens za usanifu:

- **Typography**: Familia ya fonti (serif, sans-serif, monospace) na kiwango cha ukubwa
- **Color palette**: Rangi kuu, ya pili, ya kusisitiza (accent), na rangi za kawaida (neutral)
- **Spacing**: Mpangilio mdogo, kawaida, au pana
- **Motion**: Animashoni na mabadiliko (ikiwa unataka)

### Hatua ya 4: Kuunda Theme (Theme Generation)

Setup Assistant agent inajenga (scaffolds) theme yako ya block maalum kwa kutumia:

- `theme.json` inayohifadhi tokens zote za usanifu wako
- Templates za block kwa mipangilio ya kawaida (ukurasa wa nyumbani, blogu, mawasiliano)
- Mitindo ya block maalum inayolingana na design system yako
- Metadata ya theme na matangazo ya usaidizi wa WordPress

### Hatua ya 5: Kuwezesha na Kuthibitisha (Activation and Verification)

Theme inawazeshwa kiotomatiki, na utaona:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Kisha unaweza kutembelea tovuti yako kuthibitisha kwamba theme inatokea vizuri.

## Site Specification na Kumbukumbu ya site_brief

Wakati wa onboarding, agent hukamata maelezo ya tovuti yako katika kategoria ya kumbukumbu ya **site_brief**. Hii inajumuisha:

- Lengo na malengo ya tovuti
- Watumiaji walengwa
- Rangi za chapa na mtindo
- Mapendeleo ya usanifu
- Muundo wa maudhui

### Kwa nini site_brief ni Muhimu

Katika vikao vya baadaye, agents hutumia site_brief yako ili:

- Kudumisha uthabiti wa usanifu kupitia mabadiliko
- Kupendekeza vipengele vinavyolingana na lengo la tovuti yako
- Kutoa mapendekezo yanayojua muktadha
- Kuepuka kuuliza maswali ya kuanzisha mara kwa mara

### Kuangalia site_brief yako

Unaweza kumuomba agent:

```
"Show me my site brief"
```

au

```
"What do you know about my site?"
```

Agent atakuonyesha maelezo yako ya tovuti yaliyohifadhiwa.

## Kubadilisha Baada ya Onboarding

Baada ya kukamilisha onboarding ya Theme Builder, unaweza:

### Kutumia Design System Aesthetics Skill

Kuomba maboresho ya usanifu:

```
"Refine the typography to be more modern"
```

au

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** inakuongoza kupitia masasisho ya usanifu yanayolenga.

### Kuhariri theme.json Moja kwa Moja

Kwa watumiaji walio na ujuzi zaidi, hariri `/wp-content/themes/[theme-name]/theme.json` ili kurekebisha:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Kuunda Custom Block Templates

Tumia WordPress block editor kuunda templates maalum kwa:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Kulinganisha: Zamani vs. Mpya Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Kutatua Matatizo (Troubleshooting)

**Mchakato wa onboarding haukamilika**
- Anzisha upya mchakato: "Start the Theme Builder onboarding"
- Thibitisha kwamba usakinishaji wako wa WordPress uko upya
- Thibitisha kwamba Setup Assistant agent imewashwa

**site_brief yangu haitumiki**
- Thibitisha kwamba agent ana ufikiaji wa kumbukumbu (memory)
- Muombe agent "recall my site brief"
- Thibitisha kwamba kumbukumbu imewashwa katika mipangilio yako

**Theme iliyoanzishwa hailingani na mapendeleo yangu**
- Tumia Design System Aesthetics skill ili kuiboresha
- Muombe agent "regenerate the theme with [specific changes]"
- Hariri theme.json moja kwa moja kwa udhibiti sahihi

## Hatua Zijayo

Baada ya kukamilisha Theme Builder onboarding:

1. **Thibitisha tovuti yako**: Tembelea tovuti yako ili kuona theme mpya
2. **Boresha usanifu**: Tumia Design System Aesthetics skill kwa marekebisho
3. **Ongeza maudhui**: Anza kujenga maudhui ya tovuti yako
4. **Gundua uwezo**: Jifunze kuhusu uwezo mwingine wa agent kama vile scaffold-block-theme na activate-theme
