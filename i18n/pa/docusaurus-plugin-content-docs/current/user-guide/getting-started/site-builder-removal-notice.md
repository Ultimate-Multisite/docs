---
title: ਸਾਈਟ ਬਿਲਡਰ ਮੋਡ ਹਟਾਉਣ ਦੀ ਸੂਚਨਾ
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode ਹਟਾਉਣ ਬਾਰੇ ਨੋਟਿਸ {#site-builder-mode-removal-notice}

**Superdav AI Agent v1.12.0 ਵਿੱਚ Site Builder mode ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ।** ਜੇ ਤੁਸੀਂ Site Builder mode ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਸੀ, ਤਾਂ theme ਬਣਾਉਣ ਅਤੇ site setup ਲਈ ਤੁਹਾਨੂੰ **Setup Assistant agent** ਦੀ ਵਰਤੋਂ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।

## ਕੀ ਹੋਇਆ? {#what-happened}

### Site Builder Mode (ਪੁਰਾਣਾ) {#site-builder-mode-legacy}

Site Builder mode ਇੱਕ wizard-based interface ਸੀ ਜੋ ਇਹ ਕੰਮ ਕਰਦਾ ਸੀ:

- Templates ਤੋਂ sites ਬਣਾਉਣਾ
- Basic settings configure ਕਰਨਾ
- ਇੱਕ theme ਚੁਣਨਾ
- ਸ਼ੁਰੂਆਤੀ content set up ਕਰਨਾ

### ਇਸਦੀ ਥਾਂ ਕੀ ਆਇਆ? {#what-replaced-it}

**Setup Assistant agent** ਹੁਣ Site Builder ਦੀ ਸਾਰੀ functionality handle ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਇਹ ਸ਼ਾਮਲ ਹਨ:

- ਵਧੇਰੇ flexible, agent-guided setup
- ਬਿਹਤਰ theme customization options
- Theme Builder onboarding ਨਾਲ integration
- ਭਵਿੱਖ ਦੇ sessions ਲਈ ਸਥਾਈ site_brief memory

## ਜੇ ਤੁਸੀਂ Site Builder Mode ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਸੀ {#if-you-were-using-site-builder-mode}

### ਤੁਹਾਡੀਆਂ Sites ਸੁਰੱਖ ਹਨ {#your-sites-are-safe}

- Site Builder mode ਨਾਲ ਬਣੀਆਂ ਮੌਜੂਦਾ sites ਕੰਮ ਕਰਨਾ ਜਾਰੀ ਰੱਖਣਗੀਆਂ
- ਕੋਈ data loss ਜਾਂ site disruption ਨਹੀਂ ਹੋਵੇਗਾ
- ਤੁਸੀਂ ਆਪਣੀਆਂ sites ਨੂੰ ਆਮ ਤੌਰ 'ਤੇ manage ਕਰਨਾ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ

### Setup Assistant Agent 'ਤੇ Migrate ਕਰੋ {#migrate-to-setup-assistant-agent}

ਨਵੀਆਂ sites set up ਕਰਨ ਜਾਂ theme ਬਦਲਣ ਲਈ, Setup Assistant agent ਦੀ ਵਰਤੋਂ ਕਰੋ:

```
"Help me set up a new site"
```

ਜਾਂ

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent ਵਧੇਰੇ flexibility ਨਾਲ ਉਹੀ functionality ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

## ਤੁਲਨਾ: Site Builder ਬਨਾਮ Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (ਹਟਾ ਦਿੱਤਾ ਗਿਆ) | Setup Assistant (ਨਵਾਂ) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Predefined templates | Custom generation |
| Customization | Limited options | Full design system |
| Site brief | Not stored | Persistent memory |
| Future sessions | Repeat setup | Use stored site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Setup Assistant Agent 'ਤੇ Migrate ਕਰਨਾ {#migrating-to-setup-assistant-agent}

### ਨਵੀਆਂ Sites ਲਈ {#for-new-sites}

Site Builder mode ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਬਜਾਏ:

1. Request ਕਰੋ: "Help me set up a new site"
2. Setup Assistant agent ਤੁਹਾਨੂੰ ਇਹਨਾਂ ਰਾਹੀਂ guide ਕਰੇਗਾ:
   - Site ਦਾ purpose ਅਤੇ goals
   - Target audience
   - Brand identity
   - Theme generation
   - Initial configuration

### ਮੌਜੂਦਾ Sites ਲਈ {#for-existing-sites}

ਜੇ ਤੁਹਾਡੇ ਕੋਲ Site Builder mode ਤੋਂ ਕੋਈ ਮੌਜੂਦਾ site ਹੈ:

1. ਤੁਸੀਂ ਇਸਨੂੰ ਜਿਵੇਂ ਹੈ, ਉਸ ਤਰ੍ਹਾਂ ਵਰਤਣਾ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ
2. Theme update ਕਰਨ ਲਈ, request ਕਰੋ: "Redesign my site"
3. Setup Assistant agent ਨੂੰ ਨਵਾਂ theme ਬਣਾਉਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨੀ ਪਵੇਗੀ
4. ਤੁਹਾਡੇ site data ਬਦਲੇਗਾ ਨਹੀਂ

### Theme ਬਦਲਣ ਲਈ {#for-theme-changes}

Site Builder mode ਦੀ theme selection ਦੀ ਬਜਾਏ:

1. Request ਕਰੋ: "Change my theme"
2. Setup Assistant agent ਇਹ ਕਰੇਗਾ:
   - ਤੁਹਾਡੀਆਂ design preferences ਬਾਰੇ ਪੁੱਛੇਗਾ
   - ਇੱਕ custom theme generate ਕਰੇਗਾ
   - ਇਸਨੂੰ ਤੁਹਾਡੀ site 'ਤੇ activate ਕਰੇਗਾ

## ਮੁੱਖ ਅੰਤਰ {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Setup Assistant Agent ਦੇ ਫਾਇਦੇ {#benefits-of-setup-assistant-agent}

### ਵਧੇਰੇ Flexible {#more-flexible}

- ਆਪਣੀ site ਨੂੰ natural language ਵਿੱਚ describe ਕਰੋ
- Custom recommendations ਪ੍ਰਾਪਤ ਕਰੋ
- ਤੁਹਾਡੀਆਂ ਖਾਸ ਲੋੜਾਂ ਅਨੁਸਾਰ adapt ਹੋ ਜਾਵੇ

### ਬਿਹਤਰ Customization {#better-customization}

- Custom theme generation
- Design system decisions
- Persistent design tokens

### Persistent Memory {#persistent-memory}

- ਤੁਹਾਡਾ site_brief ਸਟੋਰ ਹੋ ਜਾਂਦਾ ਹੈ
- ਭਵਿੱਖ ਦੇ agents ਤੁਹਾਡੀ site ਨੂੰ ਸਮਝਦੇ ਹਨ
- setup ਜਾਣਕਾਰੀ ਨੂੰ ਦੁਹਰਾਉਣ ਦੀ ਲੋੜ ਨਹੀਂ

### Integrated Workflow {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- ਸਭ ਕੁਝ ਇੱਕ ਸజాਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

## Troubleshooting {#troubleshooting}

### ਮੈਨੂੰ Site Builder mode ਨਹੀਂ ਮਿਲ ਰਿਹਾ {#i-cant-find-site-builder-mode}

Site Builder mode ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ। ਇਸਦੀ ਬਜਾਏ Setup Assistant agent ਦੀ ਵਰਤੋਂ ਕਰੋ:

```
"Help me set up a new site"
```

### ਮੈਨੂੰ Site Builder ਤੋਂ site ਬਣਾਉਣੀ ਹੈ {#i-want-to-recreate-a-site-from-site-builder}

ਤੁਸੀਂ ਇਸਨੂੰ Setup Assistant agent ਨਾਲ ਬਣਾ ਸਕਦੇ ਹੋ:

1. Request ਕਰੋ: "Help me set up a new site"
2. ਆਪਣੀ ਮੂਲ site ਦਾ purpose ਅਤੇ design describe ਕਰੋ
3. agent ਇੱਕ ਮਿਲਦਾ-ਜੁਲਦਾ theme generate ਕਰੇਗਾ
4. ਤੁਹਾਡਾ site_brief ਭਵਿੱਖ ਦੇ reference ਲਈ ਸਟੋਰ ਹੋ ਜਾਵੇਗਾ

### ਮੇਰੀ ਮੌਜੂਦਾ Site Builder site ਕੰਮ ਨਹੀਂ ਕਰ ਰਹੀ {#my-existing-site-builder-site-isnt-working}

Site Builder mode ਨਾਲ ਬਣੀਆਂ ਮੌਜੂਦਾ sites ਕੰਮ ਕਰਨਾ ਜਾਰੀ ਰੱਖਣਗੀਆਂ। ਜੇ ਤੁਹਾਨੂੰ ਕੋਈ ਸਮੱਸਿਆ ਆ ਰਹੀ ਹੈ:

1. ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡਾ theme ਅਜੇ active ਹੈ ਜਾਂ ਨਹੀਂ
2. ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ plugins enable ਹਨ
3. WordPress error logs ਦੀ ਜਾਂਚ ਕਰੋ
4. ਜੇ ਸਮੱਸਿਆ ਜਾਰੀ ਰਹਿੰਦੀ ਹੈ ਤਾਂ support ਨਾਲ ਸੰਪਰਕ ਕਰੋ

### ਕੀ ਮੈਂ ਆਪਣੇ ਪੁਰਾਣੇ Site Builder templates ਵਰਤ ਸਕਦਾ ਹਾਂ? {#can-i-still-use-my-old-site-builder-templates}

Site Builder templates ਹੁਣ ਉਪਲਬਧ ਨਹੀਂ ਹਨ। ਹਾਲਾਂਕਿ:

- ਤੁਹਾਡੀਆਂ ਮੌਜੂਦਾ sites ਕੰਮ ਕਰਨਾ ਜਾਰੀ ਰੱਖਣਗੀਆਂ
- ਤੁਸੀਂ Setup Assistant agent ਨਾਲ ਮਿਲਦੇ-ਜੁਲਦੇ sites ਬਣਾ ਸਕਦੇ ਹੋ
- Setup Assistant agent ਵਧੇਰੇ customization options ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ

## ਅਗਲੇ ਕਦਮ {#next-steps}

1. **ਨਵੀਆਂ sites ਲਈ**: Setup Assistant agent ਦੀ ਵਰਤੋਂ ਕਰੋ
2. **ਮੌਜੂਦਾ sites ਲਈ**: ਵਰਤਣਾ ਜਾਰੀ ਰੱਖੋ
3. **Theme ਬਦਲਣ ਲਈ**: Setup Assistant agent ਤੋਂ ਮਦਦ ਮੰਗੋ
4. **Design refine ਕਰਨ ਲਈ**: Design System Aesthetics skill ਦੀ ਵਰਤੋਂ ਕਰੋ

## ਸੰਬੰਧਿਤ ਵਿਸ਼ੇ {#related-topics}

- **Theme Builder Onboarding**: Custom themes ਲਈ guided setup
- **Setup Assistant Agent**: Agent-guided site setup
- **Site Specification Skill**: ਆਪਣੀ site ਦੇ goals ਅਤੇ audience define ਕਰਨਾ
- **Design System Aesthetics Skill**: ਆਪਣੀ site ਦੀ visual identity refine ਕਰਨਾ
