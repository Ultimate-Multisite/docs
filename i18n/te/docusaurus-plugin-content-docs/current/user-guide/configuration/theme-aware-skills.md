---
title: థీమ్-అవేర్ స్కిల్స్
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills {#theme-aware-skills}

Superdav AI Agent v1.10.0 లో నాలుగు కొత్త theme-aware built-in skills అందుబాటులోకి వచ్చాయి. ఇవి మీ యాక్టివ్ WordPress themeకి ఆటోమేటిక్‌గా అడాప్ట్ అవుతాయి. ఈ skills మీ theme యొక్క ఆర్కిటెక్చర్ మరియు ఫీచర్‌లకు అనుగుణంగా ప్రత్యేకమైన గైడెన్స్ మరియు సామర్థ్యాలను అందిస్తాయి.

## Theme-Aware Skills అంటే ఏమిటి? {#what-are-theme-aware-skills}

Theme-aware skills అంటే pre-configured knowledge bases మరియు tool sets. మీ సైట్‌లో ప్రస్తుతం యాక్టివ్ ఉన్న WordPress theme ఆధారంగా AI assistant వీటిని ఆటోమేటిక్‌గా ఎంచుకుంటుంది. మీరు theme మార్చినప్పుడు, assistant అందుబాటులో ఉన్న skills కూడా ఆటోమేటిక్‌గా అప్‌డేట్ అవుతాయి — దీనికి మాన్యువల్ కాన్ఫిగరేషన్ అవసరం లేదు.

ప్రతి skill లో ఈ విషయాలు ఉంటాయి:

- **Theme-specific documentation** — themeని ఎలా ఉపయోగించాలి మరియు కస్టమైజ్ చేయాలి అనే దానిపై గైడెన్స్
- **Block and pattern references** — అందుబాటులో ఉన్న blocks, patterns మరియు డిజైన్ ఆప్షన్స్
- **Customization examples** — సాధారణ పనుల కోసం code snippets మరియు configuration patterns
- **Best practices** — theme యొక్క ఆర్కిటెక్చర్ మరియు వర్క్‌ఫ్లో కోసం సిఫార్సులు

## అందుబాటులో ఉన్న Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes {#block-themes}

**ఎవరికి వర్తిస్తుంది:** WordPress block-based (Full Site Editing) ఆర్కిటెక్చర్ ఉపయోగించే themes.

Block Themes skill ఈ క్రింది వాటిపై గైడెన్స్ అందిస్తుంది:

- block editor ఉపయోగించి templatesని సృష్టించడం మరియు ఎడిట్ చేయడం
- block patterns మరియు reusable blocks తో పని చేయడం
- global styles మరియు theme.json సెట్టింగ్‌లను కస్టమైజ్ చేయడం
- theme blocks మరియు variations ఉపయోగించడం
- మీ సైట్ కోసం కస్టమ్ block patternsని నిర్మించడం

**ఎప్పుడు ఆటోమేటిక్‌గా యాక్టివేట్ అవుతుంది:** మీ యాక్టివ్ theme ఒక block theme అయినప్పుడు (ఇది `block-templates` ఫీచర్‌కు మద్దతు ఇస్తుంది).

### Classic Themes {#classic-themes}

**ఎవరికి వర్తిస్తుంది:** PHP templates మరియు classic editor ఉపయోగించే సాంప్రదాయ WordPress themes.

Classic Themes skill ఈ క్రింది వాటిపై గైడెన్స్ అందిస్తుంది:

- PHP template files మరియు hooks తో పని చేయడం
- Customizer ద్వారా theme appearanceని కస్టమైజ్ చేయడం
- widget areas మరియు sidebars ఉపయోగించడం
- CSS మార్పులు మరియు child theme development
- theme hierarchy మరియు template tags అర్థం చేసుకోవడం

**ఎప్పుడు ఆటోమేటిక్‌గా యాక్టివేట్ అవుతుంది:** మీ యాక్టివ్ theme ఒక classic (non-block) theme అయినప్పుడు.

### Kadence Blocks {#kadence-blocks}

**ఎవరికి వర్తిస్తుంది:** advanced block-based design కోసం Kadence Blocks plugin ఉపయోగించే సైట్‌లు.

Kadence Blocks skill ఈ క్రింది వాటిపై గైడెన్స్ అందిస్తుంది:

- Kadence యొక్క advanced block library (Hero, Testimonials, Pricing, etc.) ఉపయోగించడం
- Kadence block settings మరియు responsive optionsని కాన్ఫిగర్ చేయడం
- Kadence యొక్క grid మరియు container blocks తో కస్టమ్ లేఅవుట్‌లను నిర్మించడం
- మీ theme తో Kadence blocksని integrate చేయడం
- Kadence యొక్క design system మరియు presetsని ఉపయోగించుకోవడం

**ఎప్పుడు ఆటోమేటిక్‌గా యాక్టివేట్ అవుతుంది:** మీ సైట్‌లో Kadence Blocks plugin యాక్టివ్ అయినప్పుడు.

### Kadence Theme {#kadence-theme}

**ఎవరికి వర్తిస్తుంది:** block-based design మరియు కస్టమైజేషన్ కోసం Kadence theme ఉపయోగించే సైట్‌లు.

Kadence Theme skill ఈ క్రింది వాటిపై గైడెన్స్ అందిస్తుంది:

- global styles మరియు theme.json ద్వారా Kadence themeని కస్టమైజ్ చేయడం
- Kadence యొక్క built-in block patterns మరియు templates ఉపయోగించడం
- Kadence theme settings మరియు optionsని కాన్ఫిగర్ చేయడం
- Kadence యొక్క design system తో కస్టమ్ డిజైన్‌లను నిర్మించడం
- ప్రముఖ plugins మరియు tools తో Kadenceని integrate చేయడం

**ఎప్పుడు ఆటోమేటిక్‌గా యాక్టివేట్ అవుతుంది:** Kadence theme మీ యాక్టివ్ theme అయినప్పుడు.

## Skills ఎలా ఎంపిక చేయబడతాయి {#how-skills-are-selected}

assistant ప్రతి సందేశంలో మీ యాక్టివ్ theme మరియు installed pluginsని ఆటోమేటిక్‌గా గుర్తిస్తుంది. ఒక సరిపోయే theme-aware skill అందుబాటులో ఉంటే, అది ఆటోమేటిక్‌గా assistant యొక్క context లో లోడ్ అవుతుంది. మీరు skillsని మాన్యువల్‌గా ఎనేబుల్ చేయవలసిన లేదా మార్చవలసిన అవసరం లేదు.

### Multiple Skills {#multiple-skills}

మీ సైట్‌కు బహుళ skills వర్తిస్తే (ఉదాహరణకు, మీకు Kadence Blocks మరియు Kadence Theme రెండూ యాక్టివ్ ఉంటే), assistant అన్ని వర్తించే skills యాక్సెస్ చేయగలదు మరియు వాటి నుండి గైడెన్స్‌ను రిఫరెన్స్ చేయగలదు.

### Switching Themes {#switching-themes}

మీరు మీ యాక్టివ్ themeని మార్చినప్పుడు, తదుపరి సందేశంలో assistant అందుబాటులో ఉన్న skills ఆటోమేటిక్‌గా అప్‌డేట్ అవుతాయి. ఉదాహరణకు:

1. మీరు **Block Themes** skill యాక్టివ్‌గా ఉన్న block themeని వాడుతున్నారు.
2. మీరు ఒక classic themeకి మారుతారు.
3. మీ తదుపరి సందేశంలో, **Classic Themes** skill ఆటోమేటిక్‌గా లోడ్ అవుతుంది, మరియు **Block Themes** skill అందుబాటులో ఉండదు.

## Theme-Aware Skillsని ఉపయోగించడం {#using-theme-aware-skills}

theme-aware skillని ఉపయోగించుకోవడానికి, మీరు కేవలం చాట్ ఇంటర్‌ఫేస్‌లో ఏమి చేయాలనుకుంటున్నారో వివరించండి. assistant ఆ సందర్భానికి తగిన skill యొక్క గైడెన్స్‌ను ఆటోమేటిక్‌గా రిఫరెన్స్ చేస్తుంది.

### Example Prompts {#example-prompts}

**Block Themes కోసం:**
> "Create a hero section with a background image and centered text using block patterns."

**Classic Themes కోసం:**
> "Add a custom widget area to the sidebar using a child theme."

**Kadence Blocks కోసం:**
> "Build a testimonials section using the Kadence Testimonials block."

**Kadence Theme కోసం:**
> "Customize the header layout and navigation menu styling."

మీ యాక్టివ్ theme మరియు pluginsకి అనుగుణంగా theme-specific గైడెన్స్ మరియు code ఉదాహరణలను assistant అందిస్తుంది.

:::note
Theme-aware skills Superdav AI Agent v1.10.0 మరియు ఆ తర్వాత వెర్షన్లలో ఆటోమేటిక్‌గా అందుబాటులో ఉంటాయి. దీనికి అదనపు సెటప్ లేదా కాన్ఫిగరేషన్ అవసరం లేదు.
:::
