---
title: Ho lona le lona la ho fihla haholo
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Lihloboho Ho Morero Ho Site Builder Mode

**Site Builder mode ha a tsela Superdav AI Agent v1.12.0.** Ha u le ba u na le Site Builder mode, u ka na le **Setup Assistant agent** ho ho fana ea ho fetola theme le ho set up site.

## Engo E Ntšoa? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Site Builder mode ke interface e ntse e tsoang ka wizard e tsoang ka:

- Ho fetola sites ho tlo ka templates
- Ho setela litlhahlo la bohlokoa
- Ho ba le theme
- Ho setela litiro tsa pele

### Engo E Fetang? {#what-replaced-it}

**Setup Assistant agent** ke ea e fetang e setse e fana ka:

- Setelao sefane le ho hlokomela, ho setela ka agent
- Boitshwaro joalo jalo haholo ho fetola theme
- Ho ba le ho fetola le Theme Builder onboarding
- Memory e ntse e tsamaea ea site_brief ho tsela tsa ho feta

## Ha U Na Le U Na Site Builder Mode {#if-you-were-using-site-builder-mode}

### Sites ea U E Safe {#your-sites-are-safe}

- Sites e fetsang ka Site Builder mode e tsamaea ho ba le sebope
- Ha na ho lela la data kapa ho fetola bohlokoa sa site
- U ka tsela ho tsamaea ho hlalosa sites ea u ka bona ka nako.

### Fetola Ho Ba Le Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Ho setela sites tse ntlha kapa ho fetola theme, u sebelisa Setup Assistant agent:

```
"Help me set up a new site"
```

kapa

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent e fana le bohlokoa ba leboho le ho hlokomela.

## Ho Batla Ho Ba Le Setup Assistant Agent {#comparison-site-builder-vs-setup-assistant}

### Ho Sites Tse Ntlha {#migrating-to-setup-assistant-agent}

A reka go feta le mo sebo sa Site Builder:

1. Ho fana: "O ka thusa ho set up sebo e ntlha" (Help me set up a new site)
2. Agent ea Setup Assistant o tla u rata ho hlalosa:
   - Leano la sebo le litlhoko tsa sebo
   - Morero oa ba lehlakanya
   - Boitshwaro ba brand
   - Ho fetola theme (Theme generation)
   - Ho setela hore e tla fana

### Ho le Site e lula {#for-new-sites}

Ho feta ha u na le site e lula ho sebo sa Site Builder:

1. U ka haholo ho sebelisa sebo se se fapaneng
2. Ho fetola theme, fana: "Fetola design ea sebo sa ka" (Redesign my site)
3. Agent ea Setup Assistant o tla u thusa ho hlalosa theme e ntlha
4. Data ea sebo ea hau e tla tsamaea

### Ho fetola Theme {#for-existing-sites}

Ho feta ho sebelisa bohlokoa ba selection ea theme sa Site Builder:

1. Fana: "Fetola theme ea ka" (Change my theme)
2. Agent ea Setup Assistant o tla:
   - Ho bua ka litlhoko tsa hau tsa design
   - Ho hlalosa theme e ntlha (Generate a custom theme)
   - Ho setela e le fana ka sebo sa hau

## Litlhoko tse fapaneng {#for-theme-changes}

### Site Builder Mode {#key-differences}

```
1. Ho ba le template
2. Ho ba le theme
3. Ho setela litlhoko tsa bohlokoa
4. Ho feta (Done)
```

### Setup Assistant Agent {#site-builder-mode}

```
1. Ho hlalosa leano la sebo ea hau
2. Ho hlalosa morero oa ba lehlakanya
3. Ho ba le litlhoko tsa design
4. Agent o tla hlalosa theme e ntlha (Generates custom theme)
5. Agent o tla setela theme
6. Site brief e tla fana ho tsela ea sessions tse ntlha
```

## Litlhoko tsa Setup Assistant Agent {#setup-assistant-agent}

### Ho ba le bohlokoa {#benefits-of-setup-assistant-agent}

- Ho hlalosa sebo sa hau ka lapa la leng (Describe your site in natural language)
- Ho feta litlhoko tse fetang (Get custom recommendations)
- Ho fana le litlhoko tsa hau tse ntlha (Adapt to your specific needs)

### Ho ba le customization e ntle {#more-flexible}

- Ho hlalosa theme e ntlha (Custom theme generation)
- Litlhoko tsa design system (Design system decisions)
- Design tokens tse tsamaea (Persistent design tokens)

### Memory e tsamaea {#better-customization}

- Your site_brief e tla fana (Your site_brief is stored)
- Agents tse ntlha li tla tseba sebo sa hau (Future agents understand your site)
- Ha ho hlalosa information ea setup ka lapa lepa (No need to repeat setup information)

### Workflow e fetang {#persistent-memory}

- Onboarding ea Theme Builder (Theme Builder onboarding)
- Litlhoko tsa Aesthetics ea Design System (Design System Aesthetics skill)
- Boitshwaro ba Ho Ba Le Visibility controls (Ability Visibility controls)
- Ka leka ka sebo sa hau ka lapa lepa (All work together seamlessly)

## Ho hlalosa problems (Troubleshooting) {#integrated-workflow}

### Ha ke ka hapa Site Builder mode {#troubleshooting}

Site Builder mode e fetileng. Ho sebelisa Setup Assistant agent:

"Bopola ho fana ka set up seboetse"

### Ke batla ke ke le site seboetse se Site Builder se fetola {#i-cant-find-site-builder-mode}

O ka u le fetola ka Set up Assistant agent a fetola:

1. Hoho: "Bopola ho fana ka set up seboetse"
2. Ropa le tsela le lona la site e fetola e fetola
3. Agent o tla fetola theme e fetola e fetola
4. O site_brief o tla fetola ho fetola ho feta

### Le site e fetola sa seboetse seboetse sefetola {#i-want-to-recreate-a-site-from-site-builder}

Le site e fetola seboetse sefetola se fetola sefetola se fetola. Ho fana ka lona litlhoko:

1. Re le sefetola ea theme ea hau
2. Re fetola hore plugins ea hau e fetola
3. Re fetola logs ea WordPress
4. Re fetola le support ha ho fetola

### Ke fetola ka seboetse sa hau sefetola? {#my-existing-site-builder-site-isnt-working}

Site Builder templates a tsena. Leha ho le:

- Sites ea hau e fetola e fetola sefetola
- O fetola sites e fetola sefetola le Set up Assistant agent
- Set up Assistant agent o fetola litlhoko tse fapaneng tsa ho fetola

## Litlhoko tsa ho fetola {#can-i-still-use-my-old-site-builder-templates}

1. **Ho ba le sites tse ntlha**: Fetola ka Set up Assistant agent
2. **Ho ba le sites e fetola**: Ho fetola ho fetola seboetse sa hau
3. **Ho fetola theme**: Ho fetola le Set up Assistant agent
4. **Ho fetola lona la design**: Ho fetola Design System Aesthetics skill

## Litlhoko tse fapaneng {#next-steps}

- **Theme Builder Onboarding**: Fetola ea ho ba le theme e fetola
- **Setup Assistant Agent**: Setup site efetola ka agent
- **Site Specification Skill**: Fetola litlhoko tsa site ea hau le batho ba tla fetola
- **Design System Aesthetics Skill**: Ho fetola lona la tsela ea design ea hau
