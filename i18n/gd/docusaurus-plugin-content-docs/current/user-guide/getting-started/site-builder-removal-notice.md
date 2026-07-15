---
title: An t-uisge a' chluarachadh mod an t-uisge site
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Notice Removal Mode Site Builder

**Tha mode Site Builder tha wedi a' chlàradh (removed) yn Superdav AI Agent v1.12.0.** Tha thu air a' th'annach Site Builder mode, rinn a' chlàradh do:

- Creachadh sitean a' chlàradh (templates)
- A' chlàradh setadhasan beag
- A' chlàradh theme
- A' chlàradh curthach de chuidine

## Còmhnaidh Cheannach? {#what-happened}

### Site Builder Mode (Latha) {#site-builder-mode-legacy}

Site Builder mode bha a' chlàradh-based interface airson:

- Creachadh sitean a' chlàradh (templates)
- A' chlàradh setadhasan beag
- A' chlàradh theme
- A' chlàradh curthach de chuidine

### Còmhnaidh a' Chlàradh? {#what-replaced-it}

Tha **Setup Assistant agent** a' chlàradh e cheannachdaidhean Site Builder gu:

- Setadhasan a tha fòcas air an agent
- Opciones a chanachdaidhean theme a tha leasachda
- Co-fhreagairt le Theme Builder onboarding
- Memrie site_brief a tha sealltain airson sgeulainn a tha a' chlàradh

## Tha Thu a' Chlàradh Site Builder Mode? {#if-you-were-using-site-builder-mode}

### Tha Earaidir a' Chlàradh Thuaidh {#your-sites-are-safe}

- Tha sitean a tha a' chlàradh wedi' fàs le Site Builder mode a' chlàradh
- Tha seachdaidhean data (data loss) no sgeulainn sitea
- Is eadar thu a' chlàradh sitean gu nàdarraidh

### Cheannach do Setup Assistant Agent {#migrate-to-setup-assistant-agent}

 airson setadhasan sitean ùra no tharrachais theme, usa a' chlàradh Setup Assistant:

```
"Help me set up a new site"
```

no

```
"Start the Theme Builder onboarding"
```

Tha an agent Setup Assistant a' chlàradh e cheannachdaidhean a tha leasachda.

## A' Chlàradh: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (A' chlàradh) | Setup Assistant (Nàrr) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Templates a tha a' chlàradh | Creachadh a tha a' chlàradh |
| Customization | Opciones leasachda | System de-sinneadh gu latha |
| Site brief | Bha a' chlàradh sealltain | Memrie persistent (persistent memory) |
| Future sessions | Setadhasan a tha a' chlàradh | Aig an site_brief a tha sealltain |
| Flexibility | Workflow fìr | Cheannach a tha a' chlàradh |

## Cheannachadh do Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### airson Sitean ùra {#for-new-sites}

An tàinig Site Builder mode a' chluas:

1. Coimhead: "Help me set up a new site" (Help mi a silleadh ùr)
2. Bidh an Aistear a' Chlàradh (Setup Assistant agent) a' chlàradh dhutha gu:
   - Amas a' sith agus a' gnìomhachais (Site purpose and goals)
   - An t-àiteann a' sgrùdadh (Target audience)
   - An t-àiteann brand (Brand identity)
   - Gaineadh theam (Theme generation)
   - Coimhneachadh am fhaighinn (Initial configuration)

### Do Chunnich Sitean a' Chlàradh (For Existing Sites) {#for-existing-sites}

Tha thu a' chunnich site a' chlàradh a' chlàradh:

1. Is eadar a' chunnich a' sgaidh a' chlàradh a' chlàradh
2. Gu bhith a' atharrachadh theam, coimhead: "Redesign my site" (Ath-atharrachadh mo site)
3. Bidh an Aistear a' Chlàradh a' chlàradh a' chlàradh a' chlàradh a' th'ann a' theam ùr a' sgaidh
4. Tha data a' chunnich a' chlàradh a' chlàradh a' chlàradh a' chlàradh

### Do Atharrachaid Theam (For Theme Changes) {#for-theme-changes}

An tàinig theam a' chluas Site Builder mode:

1. Coimhead: "Change my theme" (Ath-atharrachadh mo theam)
2. Bidh an Aistear a' Chlàradh a' chlàradh dhutha:
   - A' chlàradh air do chàrachadh design (Ask about your design preferences)
   - Gaineadh theam ùr (Generate a custom theme)
   - Ath-atharrachadh an t-àiteann ar do site (Activate it on your site)

## Fhaighinn a' Chlàradh (Key Differences) {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Coimhead template
2. Sealltainn theam
3. Coimhneachadh setadh beag
4. Ceannach
```

### Aistear a' Chlàradh (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Bheann do chunnich site a' gnìomhachais a' sgaidh
2. Sealltainn an t-àiteann a' sgrùdadh
3. Coimhead fhaighinn design
4. Aistear a' chlàradh gaineas theam ùr
5. Aistear a' chlàradh atharrachadh theam
6. Tha brief a' chunnich site a' chlàradh a' chlàradh airson seann-fhaighinn
```

## Fhaighinn a' Chlàradh an Aistear a' Chlàradh (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### A' chlàradh a' chlàradh {#more-flexible}

- Bheann do chunnich site a' sgaidh air ghràdh-fhaighinn (Describe your site in natural language)
- Gaineas seachdairean ùra (Get custom recommendations)
- Ath-atharrachadh gu do chàrachadh a tha thu a' sgaidh (Adapt to your specific needs)

### Ath-atharrachadh a chanachaidh {#better-customization}

- Gaineadh theam ùr (Custom theme generation)
- Coimhneachadh beann design system (Design system decisions)
- Token design persistent (Persistent design tokens)

### Coimhneachadh seann-fhaighinn (Persistent Memory) {#persistent-memory}

- Tha an `site_brief` a' chunnich site a' chlàradh a' chlàradh
- Bidh aistearan a chanachaidh a' chunnich site a' ghràdh
- Cha bhith fhaighinn am fhaighinn setadh air tairgseilltean

### Fhaighinn a' Chlàradh a' chluas (Integrated Workflow) {#integrated-workflow}

- Onboarding the Theme Builder (Theme Builder onboarding)
- Skill Design System Aesthetics (Design System Aesthetics skill)
- Cha bhith eadar-dhealaidh de chluas (Ability Visibility controls)
- Tha gach seachd a' chlàradh a' chlàradh gu fhaighinn

## Fhaighinn a' Chlàradh an tairgseilltean (Troubleshooting) {#troubleshooting}

### Cha chaidh mi Site Builder mode a fhashailh (I can't find Site Builder mode) {#i-cant-find-site-builder-mode}

Tha Site Builder mode a' chluas. Bheann aistear a' Chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

"Help me a new site aistatadh a' chùin"

### Tha mi a' chùin sith a' cridheachadh a' chùin {#i-want-to-recreate-a-site-from-site-builder}

Is e gu bheil thu a' chùin a' cridheachadh a' chùin a' leat:

1. Craidhinn: "Help me set up a new site"
2. Bliadh an t-sith a tha thu a' chùin agus design a chuidich
3. Bhaidh an agent a thabhairt sith a' chùin a' chuidich
4. Baidh an `site_brief` agad airson fhaighinn a' chùin a dhuan

### Tha mo sith Site Builder a' chùin seachda? {#my-existing-site-builder-site-isnt-working}

Tha sith a cridheachadh le mode Site Builder a tha ag obair gu sònraichte. Mar sin, os a tha thu a' ghaoth nan earrachda:

1. Comharr an t-theme a tha thu a' chuidich
2. Bliadh a' chùin a tha thu a' chuidich
3. Comharr na logairri (error logs) de WordPress
4. Comharr cuideachd le fòcas os tha na deaghda agad

### Can mi thig a' chùin mo templaiche Site Builder a' chùin? {#can-i-still-use-my-old-site-builder-templates}

Tha templaiche Site Builder a' chuidich a' chùin. Ach:

- Tha sith a cridheachadh agad ag obair gu sònraichte
- Is e gu bheil thu a' chùin a' cridheachadh a' chùin a' leat a' chùin
- Baidh an agent a thabhairt fhaighinn a' chùin a dhuan

## Tha am fhaighinn a' chùin {#next-steps}

1. ** airson sith ùra**: Bheir a' chùin a' Setup Assistant agent
2. ** airson sith a tha agad**: Comharr a' obair gu sònraichte mar a tha e
3. ** airson mothachadh tempaiche**: Craidhinn fhaighinn a' chùin a Setup Assistant agent
4. ** airson atharrachadh design**: Bheir a' chùin Skill Design System Aesthetics

## Tònaiche a' leòidh {#related-topics}

- **Theme Builder Onboarding**: Fhaighinn a' chùin a' cridheachadh templaiche a chuidich
- **Setup Assistant Agent**: Setup site a' chùin de agent
- **Site Specification Skill**: Bliadh na stiùiriche sith agad agus an t-àiteann agad
- **Design System Aesthetics Skill**: Atharrachadh an t-àiteann design sith agad
