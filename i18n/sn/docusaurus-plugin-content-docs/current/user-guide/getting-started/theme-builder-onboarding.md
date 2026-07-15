---
title: Mavhiki ekupedzisira ku Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flow yaKuti Kune Theme Builder

Superdav AI Agent v1.12.0 inoratira **Theme Builder onboarding flow** inotora nzira yakagadzirwa inotenderera kuti ndikubatsire kuita theme custom chakanaka panguva unenge uri kuitanisa. Izvi zvinobata chine Site Builder mode ya zamu, zvichipa uye chinoratidza nzira yakagadzirwa nekuita zvikonzero dzakubatsirwa neagent.

## Theme Builder Onboarding Flow Ichi Chi? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow ndiyo wizard inotenderera kuti:

- Inokubatsira kuita maoraro ekurasa (colors, typography, layout)
- Inoita chakanaka zvinhu zvinoreva mweya wako wesite
- Inogona kuita theme custom inotegedzwa nekukumbira kwako
- Inokupa theme automatically kana iye yakakoma

Flow iyi inobatsirwa ne**Setup Assistant agent**, inotora maonero ekutanga uye inogadzira theme yako zvichapfiri.

## Kufamba Kuita Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Setup ya Chinhu Chitungamukira (First-Run Setup) {#first-run-setup}

Kana uri kuitanisa Superdav AI Agent panguva unenge uri kuita WordPress wechinhu chinobva, uchaona:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Chine **"Build a custom theme"** kuti uingire Theme Builder onboarding flow.

### Kufamba NeKutanga (Manual Activation) {#manual-activation}

Unogona kuitangura Theme Builder onboarding panguva yakanaka nekuita:

```
"Start the Theme Builder onboarding"
```

kana

```
"Help me create a custom theme"
```

## Steps ya Onboarding {#the-onboarding-steps}

### Step 1: Kuchinjira Mode (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent inoda kunzwisisa chako:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** inoratidzorwa kune vanhu vashoma; agent inopa zvinoreva kuita design nekuti unoda uye zvakakosha dzako.

### Step 2: Kuratidza Zvinoreva Site (Site Specification) {#step-2-site-specification}

Uchazvigadzirwa nezve site yako:

- **Chineiro ya chishona**: E-commerce, blogu, portfolio, SaaS, nhe.
- **Vakuru vanotenderwa**: Vanhu vachifamba?
- **Mavenera ekubva**: Mavenera akachengetedzi (Primary and secondary colors) kana "handikudzi".
- **Tone**: Kufanana nevanhu vakachengetedzi, kune chivimbo, kune kufamba kwakakwana, nhe.

Nequru iyi inotorekerwa mu memory ya **site_brief** yako, inozivikanwa na agents mu sessions dzine kuenda mberi.

### Step 3: Zvibvunzo zveDesign System {#step-3-design-system-decisions}

Agent ineita kutaura nezvechokwadi chedesign tokens (zvinoreva zvinhu zvinotorekerwa):

- **Typography**: Font family (serif, sans-serif, monospace) uye kuita size scale
- **Color palette**: Mavenera akachengetedzi, akachengetedzi ekutanga (accent), uye mavenera akachengetedzi.
- **Spacing**: Layouts dzakakwana, dzinogona, kana dzine matareku.
- **Motion**: Animations uye transitions (kana unoda).

### Step 4: Kuita Theme Generation {#step-4-theme-generation}

Setup Assistant agent inokupa chivimbo checustom block theme ne:

- `theme.json` inotorekerwa zvose zvedesign tokens yako
- Block templates dzinogona kuita layouts dzakakosha (homepage, blog, contact)
- Custom block styles dzine kugona kunge dzichingana nedesign system yako
- Metadata ya theme uye zvinoreva kuti WordPress inokubatsira

### Step 5: Kuita Activation uye Verification {#step-5-activation-and-verification}

Theme inogadzirwa nekuti inotora automatically, uye uchaona izvi:

```
✓ Theme yako yakachengetedzi inoratidza!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Tsvaga site yako kuona design yenyu yakachengetedzi.
```

Uchipa nguva uyu kuenda munzvimbo yako kuti uone theme inoratidza zvakanaka.

## Site Specification uye Memory ya site_brief {#site-specification-and-sitebrief-memory}

Panguva ya kune onboarding, agent inagadzira specification ya site yako mu category ya **site_brief** memory. Izvi zvinosanganisira:

- Chineiro chesite uye zvakakosha
- Vakuru vanotenderwa
- Mavenera akachengetedzi uye tone (tone)
- Zvibvunzo zvedesign
- Structure ya content

### Ndiwo chii site_brief chinotorekerwa? {#why-sitebrief-matters}

Mu sessions dzine kuenda mberi, agents inotorekerwa mu site_brief yako kuti:

### Kuona Site Brief yako {#viewing-your-sitebrief}

Unogona kuomba kwa ajili ya agent:

```
"Show me my site brief"
```

au

```
"What do you know about my site?"
```

Agent idziweleka specification yako ya site iliyohifadhiwa.

## Kurekebisha Baada ya Kuunduliwa (Onboarding) {#customizing-after-onboarding}

Baada ya kukamilika onboarding ya Theme Builder, unogona:

### Kutumia Ujuzi wa Aesthetics wa Design System {#use-the-design-system-aesthetics-skill}

Omba marekebisho ya muonekano:

```
"Refine the typography to be more modern"
```

au

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** idziweleka wewe kupitia marekebisho madogo ya muonekano.

### Kuhariri theme.json Moja kwa Moja {#edit-themejson-directly}

Kwa watumiaji wenye ujuzi zaidi, hariri `/wp-content/themes/[theme-name]/theme.json` ili kubadilisha:

- Color tokens (maelezo ya rangi)
- Typography scales (vipengele vya fonti)
- Spacing values (viwango vya nafasi)
- Border and shadow definitions (maelezo ya mipaka na kivuli)

### Kuunda Custom Block Templates {#create-custom-block-templates}

Tumia WordPress block editor kuunda templates maalum kwa ajili ya:

- Homepage layouts (mpangilio wa kurasa za nyumbani)
- Blog post pages (kurasa za chapisho la blogu)
- Product pages (kurasa za bidhaa)
- Contact forms (fomu za mawasiliano)

## Ulinganisho: Zamani dhidi ya Mpya Onboarding {#comparison-old-vs-new-onboarding}

| Kipengele | Site Builder (Zamani) | Theme Builder (Mpya) |
|---------|----------------------|-------------------|
| Jinsi ya Kuanzisha | Fomu inayotegemea Wizard | Mazungumzo yanayoongozwa na Agent |
| Kuunda Theme | Templates zilizokosewa | Scaffolding maalum |
| Design tokens | Kuandika kwa mkono | Maamuzi yanayongozwa |
| Urahisi (Flexibility) | Chaguo za kubaki | Kubadilika

### Matatizo Yanayoweza Kutokea (Troubleshooting) {#troubleshooting}

**Onboarding haukamiliki**
- Rudisha mchakato: "Start the Theme Builder onboarding"
- Angalia kama usakinishaji wako wa WordPress una update ya hivi punde
- Thibitisha kwamba Setup Assistant agent imewashwa

**My site_brief haishandisi**
- Chika kuti agent inenge akaita access ku memory (memory)
- Chika kwa agent kuti "recall my site brief" (kufamba/kuona upfunguzo ya site yangu)
- Chika kuti memory inenge yakabva (enabled) mu settings dzako

**Theme inotorewa haichangii nemazano angu**
- Shandisa skill ya Design System Aesthetics kuti urefine iye
- Chika kwa agent kuti "regenerate the theme with [specific changes]" (kugadzirisa theme ne[matanho anokudzidzera])
- Edit theme.json nekugadzirisa zvakare kune chokwadi

## Zvinhu Zvinotevera (Next Steps) {#next-steps}

Panguva uyuwo wakanza onboarding we Theme Builder:

1. **Chinjeni site yako**: Ndinonzi iye kuti uve ne theme yakachengetedza
2. **Refine design**: Shandisa skill ya Design System Aesthetics kuti urefine zvinhu
3. **Add content**: Simba kuita content yenyika yako
4. **Explore abilities**: Ziva nezvezvine zvinogona kutorewa zvakare zvinhu zvakasiyana neagent chete, zvakaitwa i scaffold-block-theme uye activate-theme
