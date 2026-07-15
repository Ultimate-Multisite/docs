---
title: Tohu Whakamutunga Mo Mode Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Whakamutunga Mode Tākaro Aotūroa (Site Builder Mode Removal Notice)

**He whakatika ki te whakamahi Site Builder mode i Superdav AI Agent v1.12.0.** Ko koe, ko te mea i roto i te Site Builder mode, kia mau ki te **Setup Assistant agent** mō te whakawātea o theme me te whakarite o te waka (site setup).

## He aha te hua? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Ko te Site Builder mode he interface-based wizard mo:

- Whakapehe i ngā site noa mai template
- Whakamahi ngā whakaritenga taketake
- Whakarite theme
- Whakawātea i te mea nui o te mōhaka (initial content)

### He aha te whakamaoritanga i i roto? {#what-replaced-it}

Ko te **Setup Assistant agent** e whaiakitanga i ngā mahi katoa o Site Builder mode me:

- Whakamahi whakamārama, ā, e whaiakitanga ai te agent
- Whakaritenga theme mō te whakatika (customization) mōhiamo atu
- Whakawhanake ana ki te Theme Builder onboarding
- Memory site_brief mō ngā sessioni pōuri i roto i ngā sessioni hou

## Ko koe i runga i Site Builder Mode? {#if-you-were-using-site-builder-mode}

### Ngā site mo koe ātaahua (Your Sites Are Safe) {#your-sites-are-safe}

- Ngā site e whakatika i te Site Builder mode kia kaha atu i te mahi
- He kore utu o ngā data, he kore whakawātea i te site
- Ko koe e taea ai te whakamaoritanga i ngā site mo te mahi i te pai

### Whakamutunga ki te Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Mō te whakarite site hou kia whakatika theme, whakamahi te Setup Assistant agent:

```
"Help me set up a new site"
```

kia

```
"Start the Theme Builder onboarding"
```

Ko te Setup Assistant agent e whaiakitanga i ngā mahi pēnei i te pai atu.

## Whakamārama: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Whakamutunga) | Setup Assistant (Māori Hou) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Predefined templates | Custom generation |
| Customization | Limited options | Full design system |
| Site brief | Not stored | Persistent memory |
| Future sessions | Repeat setup | Use stored site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Whakamutunga ki te Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Mō Ngā Site Hou {#for-new-sites}

Instead of using Site Builder mode:

1. Taonga: "Taki i te wāhi hou" (Help me set up a new site)
2. Ka whaiakitanga o te Setup Assistant agent i runga i:
   - Te wāinga me ngā mahi o te wāhi (Site purpose and goals)
   - Ngā mea e tika ana ki te whakamahi i te wāhi (Target audience)
   - Te whānau o te brand (Brand identity)
   - Whakawhitenga theme (Theme generation)
   - Te whaiaro ingoa (Initial configuration)

### Mō Ngā Wāhi Eke (For Existing Sites) {#for-existing-sites}

Ko koe e taea ai te whakamahi i tō wāhi eke i runga i te mea i roto i te Site Builder mode:

1. Ko koe e taea ai te whakamahi i a ia i te mea i roto i te mea i roto i te Site Builder mode
2. Hei whai whakaora te theme, taonga: "Whakaaro ahau i tō wāhi" (Redesign my site)
3. Ka tū i te Setup Assistant agent hei tauira ki te whakamahi i te theme hou
4. Ko ngā āhuatanga o te wāhi eke ka pēnei i te mea i roto i te Site Builder mode

### Mō Ngā Whakaaro Theme (For Theme Changes) {#for-theme-changes}

Instead of te whaiwhero o te site builder mode mō te selection o theme:

1. Taonga: "Chara ahau i tō theme" (Change my theme)
2. Ka whaiakitanga o te Setup Assistant agent hei:
   - Whakawātea i ngā āhuatanga o te kaitiakitanga (Ask about your design preferences)
   - Whakawhitenga theme hou (Generate a custom theme)
   - Whakawhanaungatanga i a ia i tō wāhi (Activate it on your site)

## Ngā Whakamārama Whakamua (Key Differences) {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Whakarite te template
2. Whakarite te theme
3. Whakarite ngā āhuatanga ingoa
4. Whakare
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Whakawātea i te wāinga o tō wāhi
2. Whakawātea i ngā mea e tika ana ki te whakamahi i te wāhi (Define your target audience)
3. Whakarite ngā whaiaro o te whakairo (Choose design preferences)
4. Ka whaiakitanga o te Agent hei whakatō theme hou (Agent generates custom theme)
5. Ka whaiakitanga o te Agent hei whakahirahira i te theme (Agent activates theme)
6. Ko te whakamārama o te wāhi eke ka pēnei i ngā wāhi hou (Site brief stored for future sessions)
```

## Ngā Manawa o te Setup Assistant Agent (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Whakamahi Whakamua (More Flexible) {#more-flexible}

- Whakawātea i tō wāhi i reo whānui (Describe your site in natural language)
- Whakarite ngā whakamārama hou e tika ana (Get custom recommendations)
- Whakaahua ki ngā pēhea koe e tino pai ana (Adapt to your specific needs)

### Whakamahi Whakairo Whakamua (Better Customization) {#better-customization}

- Whakawhitenga theme hou (Custom theme generation)
- Whakawhiti i ngā whakataunga o te whānau whakairo (Design system decisions)
- Ngā token o te whakairo e pēnei i te mea i roto i te wāhi (Persistent design tokens)

### Manawa Whakamutaha (Persistent Memory) {#persistent-memory}

- Ko tō site_brief e pēnei i te mea i roto i te wāhi (Your site_brief is stored)
- Ka whai whakaaro ai ngā agent hou i tō wāhi (Future agents understand your site)
- Ae, ka taea te whakamahi i ngā whakamārama o te wāhi eke i runga i te mea i roto i te wāhi (No need to repeat setup information)

### Whakawhanaungatanga o te Mahi (Integrated Workflow) {#integrated-workflow}

- Whakarite i te theme builder (Theme Builder onboarding)
- Te mahi o te whakatauwhakaaro o te whānau whakairo (Design System Aesthetics skill)
- Ngā āhuatanga o te whakahoki (Ability Visibility controls)
- Ka whakatika ngā katoa i tō pūrākau (All work together seamlessly)

## Whakamutaha (Troubleshooting) {#troubleshooting}

### Ka taea e au i whakawhiti i te Site Builder mode {#i-cant-find-site-builder-mode}

Ko te Site Builder mode ka whai whakaora. Whai whakamahi i te Setup Assistant agent i tētahi wāhi:

"Māori i tōku wāhi hou whai whakaaro"

### I te pēke ahau i te wāhi hou mai Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Ko koe e taea ai te whakamaoritanga i te wāhi ahino ki te whakamahi i te Setup Assistant agent:

1. Whakawhiti kōrero: "Tōku wāhi hou i te whakauru"
2. Aroha: Whakawhanaungatanga o tō wāhi ahino me te mātakitaki ahau
3. Ko te agent i whakamaoritanga i te theme ki pēke ahau
4. Ko tō site_brief e whai ake ana mō whakamahi i roto i te wāhi hou

### Ka pēke ahau i te wāhi ahino ahau e whai anga? {#my-existing-site-builder-site-isnt-working}

Ka pēke ahau i ngā wāhi ahino e whakamaoritanga me te mode Site Builder ka pēke ahau. Ko koe e pēke ahau i ngā mea nui:

1. He tino whakamana ko tō theme e pēke ahau
2. Whakawhiti kōrero ko tō plugins e pēke ahau
3. Pēke ahau i ngā error logs o WordPress
4. Whakawhiti kōrero ki te whaiutu ahau he pēke ka pēke

### Ka taea hoki ahau te whakamahi i ngā template Site Builder ko tūroa? {#can-i-still-use-my-old-site-builder-templates}

Ka nui ake, ka pēke ahau i ngā template Site Builder. Engari:

- Ko ngā wāhi ahino e koe e whai anga ka pēke ahau
- Ka taea ai ki a koe te whakamaoritanga i ngā wāhi ahino ki te whakamahi i te Setup Assistant agent
- Ko te Setup Assistant agent e hiahia ana i ngā optiona Whakamaoritanga mō tō mahi

## Ngā mahi e pēke mai i runga i te mahi {#next-steps}

1. **Mō ngā wāhi hou**: Whai i te Setup Assistant agent
2. **Mō ngā wāhi ahino e koe e whai anga**: Whai i te whakamahi i ahau i te mea e pēke ahau
3. **Mō whakawhiti theme**: Aroha mō tauira i te Setup Assistant agent
4. **Mō whakamaoritanga o te hākinakina**: Whai i te Design System Aesthetics skill

## Ngā wāhi whai whenua {#related-topics}

- **Theme Builder Onboarding**: Whakahaere whakamahi mō ngā theme whai anga
- **Setup Assistant Agent**: Setup site e pēke mai i te agent
- **Site Specification Skill**: Whakawhiti kōrero i ngā whakaaro o tō wāhi ahino me tō aua
- **Design System Aesthetics Skill**: Whakamaoritanga i tō whaiwharawhai o tō wāhi ahino
