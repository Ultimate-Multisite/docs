---
title: Taarifa ya Kuondoa Hali ya Jengo la Tovuti
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Taarifa ya Kuondoa Hali ya Kuunda Tovuti (Site Builder Mode)

**Hali ya Kuunda Tovuti (Site Builder mode) imefutwa katika Superdav AI Agent v1.12.0.** Ikiwa ulikuwa unatumia Site Builder mode, unapaswa kuhama kwenda **agent Msaidizi wa Kuweka (Setup Assistant agent)** kwa ajili ya kuunda mandhari (theme) na kuweka tovuti.

## Nini Kilotokea? {#what-happened}

### Site Builder Mode (Ya Zamani) {#site-builder-mode-legacy}

Site Builder mode ilikuwa kiolesura kinachotegemea hatua (wizard-based interface) kwa ajili ya:

- Kuunda tovuti kutoka kwa templates
- Kuweka mipangilio ya msingi
- Kuchagua mandhari (theme)
- Kuweka maudhui ya awali

### Nini Kilochukua Nafasi Yake? {#what-replaced-it}

**Setup Assistant agent** sasa inashughulikia utendaji wote wa Site Builder kwa kutumia:

- Kuwekaji kwa mwongozo zaidi, unaotokana na agent
- Chaguo bora za kubadilisha mandhari
- Kuunganishwa na onboarding ya Theme Builder
- Kumbukumbu ya tovuti ya kudumu (persistent site_brief memory) kwa vikao vya baadaye

## Ikiwa Ulikuwa Unatumia Site Builder Mode {#if-you-were-using-site-builder-mode}

### Tovuti Zako Ziko Salama {#your-sites-are-safe}

- Tovuti zilizopo zilizoundwa kwa Site Builder mode bado zinafanya kazi
- Hakuna kupotea kwa data au kukatika kwa tovuti
- Unaweza kuendelea kusimamia tovuti zako kwa kawaida

### Hama kwenda Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Kwa kuweka tovuti mpya au kubadilisha mandhari, tumia Setup Assistant agent:

```
"Help me set up a new site"
```

au

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent inatoa utendaji ule ule lakini kwa uwezo zaidi wa kubadilika.

## Kulinganisha: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Kipengele | Site Builder (Imefutwa) | Setup Assistant (Mpya) |
|---------|----------------------|----------------------|
| Njia ya kuweka | Fomu ya hatua (Wizard form) | Mazungumzo ya agent |
| Kuchagua mandhari | Templates zilizopangwa | Uzalishaji wa kipekee |
| Kubadilisha | Chaguo chache | Mfumo kamili wa muundo (Full design system) |
| Site brief | Haikusimangiwa | Kumbukumbu ya kudumu |
| Vikao vya baadaye | Kuweka upya mipangilio | Kutumia site_brief iliyohifadhiwa |
| Uwezo wa kubadilika | Mchakato thabiti | Mazungumzo yanayobadilika |

## Kuhama kwenda Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Kwa Tovuti Mpya {#for-new-sites}

Badala ya kutumia Site Builder mode:

1. Omba: "Help me set up a new site"
2. Setup Assistant agent itakuongoza kupitia:
   - Lengo na malengo ya tovuti
   - Wateja walengwa
   - Utambulisho wa chapa (Brand identity)
   - Uzalishaji wa mandhari
   - Mipangilio ya awali

### Kwa Tovuti Zilizopo {#for-existing-sites}

Ikiwa una tovuti iliyopo kutoka Site Builder mode:

1. Unaweza kuendelea kutumia kama ilivyo
2. Ili kuboresha mandhari, omba: "Redesign my site"
3. Setup Assistant agent itakusaidia kuunda mandhari jipya
4. Data yako ya tovuti haibadiliki

### Kwa Mabadiliko ya Mandhari {#for-theme-changes}

Badala ya kuchagua mandhari kwa Site Builder mode:

1. Omba: "Change my theme"
2. Setup Assistant agent itafanya yafuatayo:
   - Kuuliza kuhusu mapendeleo yako ya muundo
   - Kuzalisha mandhari ya kipekee
   - Kuifanya iwe hai kwenye tovuti yako

## Tofauti Muhimu {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Chagua template
2. Chagua mandhari
3. Weka mipangilio ya msingi
4. Tayari
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Eleza lengo la tovuti yako
2. Bainisha wateja walengwa wako
3. Chagua mapendeleo ya muundo
4. Agent inazalisha mandhari ya kipekee
5. Agent inafanya mandhari iwe hai
6. Site brief inahifadhiwa kwa vikao vya baadaye
```

## Faida za Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Inayobadilika Zaidi {#more-flexible}

- Eleza tovuti yako kwa lugha ya kawaida
- Pata mapendekezo ya kipekee
- Inabadilika kulingana na mahitaji yako maalum

### Kubadilisha Bora {#better-customization}

- Uzalishaji wa mandhari ya kipekee
- Maamuzi ya mfumo wa muundo (Design system decisions)
- Tokens za muundo zinazoendelea (Persistent design tokens)

### Kumbukumbu ya Kudumu {#persistent-memory}

- Site_brief yako inahifadhiwa
- Agents za baadaye zinaelewa tovuti yako
- Hakuna haja ya kurudia taarifa za kuweka mipangilio

### Mchakato Uliounganishwa {#integrated-workflow}

- Onboarding ya Theme Builder
- Stadi ya Aesthetics ya Design System
- Udhibiti wa Uwezo wa Kuonekana (Ability Visibility controls)
- Yote yanafanya kazi pamoja bila kukatizwa

## Kutatua Matatizo {#troubleshooting}

### Siwezi kupata Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode imefutwa. Tumia Setup Assistant agent badala yake:

```
"Help me set up a new site"
```

### Nataka kuunda upya tovuti kutoka Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Unaweza kuifanya upya kwa kutumia Setup Assistant agent:

1. Omba: "Help me set up a new site"
2. Eleza lengo na muundo wa tovuti yako ya awali
3. Agent itazalisha mandhari inayofanana
4. Site_brief yako itahifadhiwa kwa marejeo ya baadaye

### Tovuti yangu ya Site Builder iliyopo haifanyi kazi {#my-existing-site-builder-site-isnt-working}

Tovuti zilizopo zilizoundwa kwa Site Builder mode bado zinafanya kazi. Ikiwa unakumbana na matatizo:

1. Thibitisha kwamba mandhari yako bado ni hai
2. Thibitisha kwamba plugins zako zimefunguliwa
3. Angalia kumbukumbu za makosa za WordPress
4. Wasiliana na usaidizi ikiwa matatizo yanaendelea

### Je, bado naweza kutumia templates zangu za Site Builder za zamani? {#can-i-still-use-my-old-site-builder-templates}

Templates za Site Builder hazipo tena. Hata hivyo:

- Tovuti zako zilizopo zinaendelea kufanya kazi
- Unaweza kuunda upya tovuti zinazofanana kwa kutumia Setup Assistant agent
- Setup Assistant agent inatoa chaguo zaidi za kubadilisha

## Hatua Zijazo {#next-steps}

1. **Kwa tovuti mpya**: Tumia Setup Assistant agent
2. **Kwa tovuti zilizopo**: Endelea kutumia kama zilivyo
3. **Kwa mabadiliko ya mandhari**: Omba msaada kutoka kwa Setup Assistant agent
4. **Kwa kuboresha muundo**: Tumia stadi ya Design System Aesthetics

## Mada Zinazohusiana {#related-topics}

- **Theme Builder Onboarding**: Kuwekaji kwa mwongozo wa mandhari maalum
- **Setup Assistant Agent**: Kuweka tovuti kwa mwongozo wa agent
- **Site Specification Skill**: Kubainisha malengo na wateja walengwa wa tovuti yako
- **Design System Aesthetics Skill**: Kuboresha utambulisho wa kuonekana wa tovuti yako
