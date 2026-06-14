---
title: Ho lula le Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flow a Tlalelelo ea Theme Builder

Superdav AI Agent v1.12.0 e ntse le **flow ea onboarding ea Theme Builder** ea ho thusa hau ho fetola theme e tšoa (custom block theme) mme a re kae sa setso se se sehle. Sena se fetola mode ea Site Builder e ntlha le maemo a leboho, a tšoa le ho thusa le agent.

## Flow ea Onboarding ea Theme Builder ke eng?

Flow ea onboarding ea Theme Builder ke wizard ea setso e tsamaea e e tseba:

- E re kae sa fana ka tsela (mmele, typography, layout)
- E se sehle litšomo tsa hau tsa site
- E fetola theme e tšoa e ntse le ho ba le leboho la hau
- E tsamaisa theme automatically ha e fetole

Flow ea hau e fana ka **Setup Assistant agent**, e tseba mofuta oa dipotso le e fetola theme ea hau ka tsela e ntlha.

## Ho Qala Flow ea Theme Builder

### Setso sa ho Qala (First-Run Setup)

Ha u qala Superdav AI Agent haholo le setso se sehle sa WordPress, o tla bona:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Sa utloi **"Build a custom theme"** ho fana ka flow ea onboarding ea Theme Builder.

### Ho Baola Leho (Manual Activation)

U ka qala flow ea onboarding ea Theme Builder haholo le nako fa u hloka:

```
"Start the Theme Builder onboarding"
```

me

```
"Help me create a custom theme"
```

## Steps ea Onboarding

### Step 1: Ho Baola Mofuta (Mode Selection)

Setup Assistant agent e tseba ka mofuta oa hau:

```
How would you like to build your theme?
- Guided (Ke tla bua le dipotso mme ke tla fetola ho hau)
- Hands-on (Ke tla u bonela litšomo le u tšoa)
```

**Guided mode** e tsamaisa ba batho ba bohlokoa; agent e fetola litšomo tsa design ka tsela ea setso le mofuta oa hau.

### Step 2: Setso sa Site (Site Specification)

O tla bua ka site ea hau:

- **Tsela ya lekhotlo**: E-commerce, blog, portfolio, SaaS, ntlha.
- **Mofuta o fetang**: Boipuo ba hau ba fana kae?
- **Mofuta wa brand (Brand colors)**: Mofuta o matla le o zwe (or "Ke a re na le bone").
- **Tsela (Tone)**: Le tsela ya professional, e fetang, e ntlha, e le le le le le.

Le mofuta o fetang o fana kae ho feteng ka le **site_brief** memory ea hau, seo ba agents ba tla li hlalosa ka tsamaiso tse ding.

### Step 3: Mabonso a Setso (Design System Decisions)

Agent o tla u hlalosa ka tsela e fanaeng ea mofuta oa design token:

- **Typography**: Leano la font (serif, sans-serif, monospace) le maikutlo a sefetso.
- **Color palette**: Mofuta wa matla, o zwe, o fetang, le o ntlha.
- **Spacing**: Layouts e le le le le le le, e le le le le le le.
- **Motion**: Animations le transitions (ho feta ho batla).

### Step 4: Ho Fetang Le Theme (Theme Generation)

Agent oa Setup Assistant o tla u fetola theme ea hau e fetang ka:

- `theme.json` e fetang le mofuta o fetang oa design token oa hau hantle
- Templates tsa block ho layouts e le le le le le le, (homepage, blog, contact)
- Styles tsa block e fetang le mofuta o fetang oa design system ea hau
- Metadata ea theme le diketso tsa WordPress

### Step 5: Ho Fetola Le Ho Ba Hlalosa (Activation and Verification)

Theme e tla fetolwa ka ho feteng, u tla bona:

```
✓ Theme ea hau e fetang ke le!
  Leano la theme: [Site Name] Theme
  Mofuta o matla: [Primary] / [Secondary]
  Typography: [Font Family]

  Leha ho feta ka site ea hau ho bona design e fetang.
```

U ka fetola kae site ea hau ho bona hore theme e feteng e fetolwa ka bonako.

## Mokhoa oa Site le Site_brief Memory

Ka tsela ya setso, agent o tla tsamaetsa mofuta oa hau ka **site_brief** memory category. Le tla ba le:

- Tsela ya site le maikutlo a e fetang
- Mofuta o fetang
- Mofuta wa brand le tsela (tone)
- Maikutlo a design
- Ho tsamaiso ea content

### Kea ba le Site_brief Ee Fetang

Ka tsamaiso tse ding, agents ba tla hlalosa site_brief ea hau ho:

- Maintain design consistency across changes
- Suggest features aligned with your site's purpose
- Provide context-aware recommendations
- Avoid repeating setup questions

### Melihat Site Brief Aapao

Aap kaet u le:

```
"Show me my site brief"
```

ka le

```
"What do you know about my site?"
```

Agent o tla go ntlha sisa la aapao.

## Go Dirha Le Baikanyong (After Onboarding)

Ha o fetolela onboarding la Theme Builder, o ka:

### Use the Design System Aesthetics Skill

Tlhoka liphutso tsa design:

```
"Refine the typography to be more modern"
```

ka le

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** o tla go ntlha ka liphutso tsa design tse di fetang.

### Edit theme.json Directly

Ba le ba le thata, ba ka fetola `/wp-content/themes/[theme-name]/theme.json` ho fetola:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Create Custom Block Templates

Use WordPress block editor ho fetola templates tse di fetang:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Comparison: Old vs. New Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Go Nna Le Dikarolo (Troubleshooting)

**Onboarding flow ha o fetolele**
- Letheloa flow: "Start the Theme Builder onboarding"
- Ntshoa ka le kaetso la WordPress la aapao
- Ntshoa ka le kaetso ya Setup Assistant e ntse e tsamaea

**Site_brief ea hau haholo ha a fetahilwa**
- Re ke le fa monyetla o na le khale (memory)
- Hlalosa monyetla ho bolella "reka site brief ea ka"
- Re le fa monyetla o nts'aetso (settings)

**Theme e fetangileng se fetahileng le litšepetso tsa ka**
- Usa monyetla oa Design System Aesthetics ho fetola ho fetahala
- Hlalosa monyetla ho bolella "reka theme le [fetohang tse ka]"
- Leha theme.json ho fetola ka khale ho le le khale

## Setso sa Ho Fetola

Ha o fetolele hore Theme Builder a fetolele:

1. **Re ke le fa site ea hau**: Le tla bona theme e fetileng ka ho lela site ea hau
2. **Fetola design**: Usa monyetla oa Design System Aesthetics ho fetola ho fetahala
3. **Re ka ba le litšepetso**: Ho haholo hore uqala ho ba le litšepetso tsa site ea hau
4. **Hlola bohlokoa**: Leha ho bona bohlokoa ba letsoalo le tse ling joalo ka scaffold-block-theme le activate-theme
