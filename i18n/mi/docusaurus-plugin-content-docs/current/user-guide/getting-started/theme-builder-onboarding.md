---
title: Whakaaro Whakamahi Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Whakaritenga Onboarding o te Theme Builder

Ko Superdav AI Agent v1.12.0 e whaihi i **whakaritenga onboarding o te Theme Builder** (Theme Builder onboarding flow) he whakatau ahue, e tino mārama ana, e tohu ana ki te whakamahi i tō mahi i te whakauru i roto i te whakatūatanga wakamārama. Ko ko te mea e whaihi ana i te mode Site Builder o te parata (legacy), me te whakamahi he whakatau mō, e tino whaihohonotanga ai ki te agent.

## He aha te Whakaritenga Onboarding o te Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Ko te whakaritenga onboarding o te Theme Builder he whakatau ā-interactive (interactive setup wizard) e:

- Whakatutaku i a koe i ngā whakatau mō te tapu (colors), te whakamārama (typography), me te hāinga (layout).
- Whakamāua i ngā tino pai o te whakaahua o tō waka (site's visual identity preferences).
- Whakawhanaunga i he theme block custom, e whaihohonotanga ana ki ngā pēke o tō mahi.
- Whakawhanaunga i te theme anō automatically i roto i te mea kua whakatou.

Ko te whakaritenga ko whakamahinga i te **Setup Assistant agent**, e whaihi i ngā āhuatanga mō te whakahau, me te whakamaoritanga i tō theme i roto i te mea e whakatū ana i te wakamārama i roto i te mea kua whakatou.

## Whakarātanga i te Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Whakawhiti Wā (First-Run Setup) {#first-run-setup}

I te wā koe e whakatū i tō Superdav AI Agent i te pēke WordPress hou, ka whakaatu ana koe:

```
Kia ora ki a Superdav AI Agent!

He aha te mea e tino pai ana koe te whakamahi?
1. Whakawhanaunga theme custom (Theme Builder)
2. Whai i theme e ko mahinga anō
3. Whakawātea te whakaritenga mō kinei
```

Whakatū **"Build a custom theme"** ki te whakire i te whakaritenga onboarding o te Theme Builder.

### Whakawhanaunga Manawa (Manual Activation) {#manual-activation}

Ko koe ka taea hoki te whaihi i te whakaritenga onboarding o te Theme Builder i ngā wā, i te mea ko koe e whaihi ana:

```
"Start the Theme Builder onboarding"
```

me te

```
"Help me create a custom theme"
```

## Ngā Whakatau Onboarding (The Onboarding Steps) {#the-onboarding-steps}

### Te Whakatau Mode (Mode Selection) {#step-1-mode-selection}

Ko te Setup Assistant agent ka whaihi i tō pēke:

```
He aha te mea e tino pai ana koe te whakamahi?
- Whakatutaku (Ka e whakamāua ahau ngā āhuatanga me ka whakamaoritanga ahau i a koe)
- Whakawhanaunga Manawa (Ka e whakaatu ahau i ngā whakatau me ka whakatū koe)
```

**Mode Whakatutaku (Guided mode)** he tino whakamāua ana mō te tauira nui o ngā mea; ko te agent e whaihi i ngā whakatau mō te tapu i runga i tō mahi me ngā pēke.

### Te Whakawhanaunga o te Waka (Site Specification) {#step-2-site-specification}

Ka e whakamāua ahau i ngā āhuatanga mō tō waka:

- **Whakaaro o te wāhi**: E-commerce, blog, portfolio, SaaS, etc.
- **Ngā mea e hiahia ana i a koe (Target audience)**: He aha ngā mea e hiahia ana i a koutou manuhiri?
- **Ngā rangi o te whānau (Brand colors)**: Ngā rangi nui me ngā rangi pēri (or "I'm not sure")
- **Te reo (Tone)**: Professional, creative, playful, minimal, etc.

Ko tēnei mōhioinga e whakawhanake ana i te **site_brief** o koe, i te mea e whai ake nei ngā agents e whakamahi i i roto i ngā wā pēri.

### Te Wiki 3: Whakawhanaungatanga System Design (Design System Decisions) {#step-3-design-system-decisions}

Ko te agent e whaiakitanga ana i a koutou i runga i te pōwhiri o te design tokens:

- **Te Reo (Typography)**: Whānau o te font (serif, sans-serif, monospace) me te mōhioinga o te size
- **Ngā Rangi (Color palette)**: Ngā rangi nui, ngā rangi pēri, ngā rangi whai tikanga (accent), me ngā rangi whakahua (neutral colors)
- **Te Wā (Spacing)**: Layouts e paku, normal, te whero (spacious)
- **Te Whakamahinga (Motion)**: Ngā whakamārama me ngā whakawhanatanga (animations and transitions) (he tino hiahia ana i a koe)

### Te Wiki 4: Whakapeete o te Theme (Theme Generation) {#step-4-theme-generation}

Ko te Setup Assistant agent e whakatō ai i tō custom block theme me:

- `theme.json` e whai ana i ngā design tokens katoa o koe
- Block templates mō ngā layout whānui (homepage, blog, contact)
- Ngā style o block e hiahia ana i te design system o koe
- Metadata o te theme me ngā whakatau o WordPress

### Te Wiki 5: Whakawhanaungatanga me Whakamārama (Activation and Verification) {#step-5-activation-and-verification}

Ko te theme e whakawhanake ana automatically, ā, ka whakaatu atu ki a koe:

```
✓ Ko tō custom theme i roto i te ao!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Pāinga i tō site kia whakaahua i te design hou.
```

I tēnei wā, e taea ai koe te pahi ki tō site kia whakaae ana ko te theme e whai tikanga ana.

## Te Whakahaere o te Site me te Memory (Site Specification and site_brief Memory) {#site-specification-and-sitebrief-memory}

I tō wā pōwhiri, ko te agent e whakatāua i tō whakamahi o te site i te category o **site_brief** memory. Ko koinei e whai ana i:

- Te whāngai o te wāhi me ngā mea e hiahia ana (Site purpose and goals)
- Ngā mea e hiahia ana i a koutou manuhiri (Target audience)
- Ngā rangi o te whānau me te reo (Brand colors and tone)
- Ngā whakaaro o te design (Design preferences)
- Te whāngai o te tikanga o te whakahou (Content structure)

### He aha te nui o te site_brief? {#why-sitebrief-matters}

I ngā wā pēri, ko ngā agents e whakamahi i tō site_brief kia:

- Aroha i te mātakitaki i te site_brief o koe
- Whai i te whakatau:

```
"Show me my site brief"
```

ata

```
"What do you know about my site?"
```

Ka whakaatu ai te agent i te whakamahi mo te whakapūmau o te site (site specification) kua ipotahia.

## Whakawātea i te whakatika i arahi (Customizing After Onboarding) {#viewing-your-sitebrief}

Iha i te whakatō i te Theme Builder, he tino pai ana koe ki:

### Whai i te Kōrero o te Design System Aesthetics Skill {#customizing-after-onboarding}

Whakamārama atu i ngā whakaaro whakamahi design:

```
"Refine the typography to be more modern"
```

ata

```
"Adjust the color palette to be warmer"
```

Ka tūmanako ai te **Design System Aesthetics skill** ki te whakamana i ngā whakawhiti whakaaro o design.

### Whakawātea i te theme.json Rongo {#use-the-design-system-aesthetics-skill}

Mō ngā onua whai tino mātanga, whakatika i `/wp-content/themes/[theme-name]/theme.json` kia whakahou:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Whakawātea i te Custom Block Templates {#edit-themejson-directly}

Whai i te WordPress block editor hei whakamaoritanga mō mga template whiriwhiri mo:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Whakamārama: Te Whakatū Ake (Comparison: Old vs. New Onboarding) {#create-custom-block-templates}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Kōrero whai ara o te agent |
| Theme generation | Templates pēnei i te tino | Whakawātea whiriwhiri mō te site |
| Design tokens | Whakawhiti manuahi | Whakawhiti whakaaro whai ara |
| Flexibility | Tāwhiti o ngā onua | Whakaahua whiriwhiri |
| Future updates | Eke i te whakamahinga | I ipotahia i te site_brief |

## Whakamutunga (Troubleshooting) {#comparison-old-vs-new-onboarding}

**Ka whakatū i te flow o te onboarding nei i te wāhi**
- Whakawhiti i te flow: "Start the Theme Builder onboarding"
- Kia tiaki i te mea he tino whakamua ai te installation o koe o WordPress
- Kia tiaki i te agent Setup Assistant kua kaha



**Ka whakamahia ahau i te my site_brief nei**
- Kia whakamārama ki a te agent he tino whai access ki te memory (aroha/māhi).
- Whakawātea ki a te agent kia "whakamutunga akua i te site brief" (recall my site brief).
- Kia tino kitea ko ka taea te whakatau i te memory i ngā settings o koe.

**He theme e whakarehia he āhuatanga kei te pēnei ana ki ahau**
- Whai i te skill Design System Aesthetics kia whakatipu i te mea.
- Whakawātea ki a te agent kia "whakamutunga akua i te theme me [specific changes]" (regenerate the theme with [specific changes]).
- Whakarite i te theme.json i runga i te wāhi, he tino whakamahi ana koe ki te whakahaere i te mea.

## Ngā mahi e kitea i roto i te whakatika (Next Steps) {#troubleshooting}

Iha i te whakatā i te Theme Builder:

1. **Kia whakapumau i tō site**: Whakawātea ki a tō site kia kite i te theme hou.
2. **Whakatipu i te design**: Whai i te skill Design System Aesthetics mō ngā whakamaoritanga.
3. **Whakawhanainga i te mea**: Whakarongo i te whakatō i te mea o tō site.
4. **Whakarongo i ngā kaha**: Whakarongo ki ngā kaha hou o te agent kua whai ake, engari he tino whakamahi ana koe i scaffold-block-theme me activate-theme.
