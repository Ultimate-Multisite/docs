---
title: థీమ్ బిల్డర్ ఆన్‌బోర్డింగ్ ప్రవాహం
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 అనేది ఒక గైడెడ్ **Theme Builder onboarding flow**ను పరిచయం చేసింది. ఇది మీరు మొదటిసారి సెటప్ చేసేటప్పుడు కస్టమ్ బ్లాక్ థీమ్‌ను సృష్టించడానికి మీకు సహాయపడుతుంది. ఇది పాత Site Builder మోడ్‌ను మరింత ఫ్లెక్సిబుల్, ఏజెంట్ సహాయంతో కూడిన విధానంతో భర్తీ చేస్తుంది.

## Theme Builder Onboarding Flow అంటే ఏమిటి?

Theme Builder onboarding flow అనేది ఒక ఇంటరాక్టివ్ సెటప్ విజర్డ్. ఇది ఈ క్రింది పనులు చేస్తుంది:

- డిజైన్ నిర్ణయాలలో మీకు మార్గనిర్దేశం చేస్తుంది (రంగులు, టైపోగ్రఫీ, లేఅవుట్)
- మీ సైట్ యొక్క విజువల్ ఐడెంటిటీ ప్రాధాన్యతలను సంగ్రహిస్తుంది
- మీ అవసరాలకు అనుగుణంగా కస్టమ్ బ్లాక్ థీమ్‌ను రూపొందిస్తుంది
- పూర్తయిన తర్వాత ఆ థీమ్‌ను ఆటోమేటిక్‌గా యాక్టివేట్ చేస్తుంది

ఈ ఫ్లో **Setup Assistant agent** ద్వారా నడుస్తుంది. ఇది స్పష్టతనిచ్చే ప్రశ్నలు అడిగి, మీ థీమ్‌ను క్రమంగా నిర్మిస్తుంది.

## Theme Builder Onboarding ప్రారంభించడం

### మొదటిసారి సెటప్ (First-Run Setup)

మీరు కొత్త WordPress ఇన్‌స్టాలేషన్‌లో Superdav AI Agentను మొదటిసారి రన్ చేసినప్పుడు, మీకు ఇది కనిపిస్తుంది:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flowలోకి ప్రవేశించడానికి **"Build a custom theme"** ఎంచుకోండి.

### మాన్యువల్ యాక్టివేషన్ (Manual Activation)

మీరు ఎప్పుడైనా ఈ Theme Builder onboardingను ప్రారంభించవచ్చు, ఈ విధంగా అడగడం ద్వారా:

```
"Start the Theme Builder onboarding"
```

లేదా

```
"Help me create a custom theme"
```

## Onboarding దశలు

### దశ 1: మోడ్ ఎంపిక (Mode Selection)

Setup Assistant agent మీ ప్రాధాన్యత గురించి అడుగుతుంది:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

చాలా మంది వినియోగదారులకు **Guided mode** సిఫార్సు చేయబడింది; ఏజెంట్ మీ పరిశ్రమ మరియు లక్ష్యాల ఆధారంగా డిజైన్ సిఫార్సులను చేస్తుంది.

### దశ 2: సైట్ వివరాలు (Site Specification)

మీ సైట్ గురించి మిమ్మల్ని అడుగుతారు:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, etc.
- **Target audience**: మీ సందర్శకులు ఎవరు?
- **Brand colors**: ప్రాథమిక మరియు ద్వితీయ రంగులు (లేదా "నాకు తెలియదు")
- **Tone**: ప్రొఫెషనల్, క్రియేటివ్, ప్లేఫుల్, మినిమల్, etc.

ఈ సమాచారం మీ **site_brief** మెమరీలో నిల్వ చేయబడుతుంది, దీనిని ఏజెంట్లు భవిష్యత్తు సెషన్‌లలో రిఫరెన్స్ చేస్తాయి.

### దశ 3: డిజైన్ సిస్టమ్ నిర్ణయాలు (Design System Decisions)

ఏజెంట్ డిజైన్ టోకెన్ ఎంపికల ద్వారా మీకు మార్గనిర్దేశం చేస్తుంది:

- **Typography**: ఫాంట్ ఫ్యామిలీ (serif, sans-serif, monospace) మరియు సైజ్ స్కేల్
- **Color palette**: ప్రాథమిక, ద్వితీయ, యాక్సెంట్ మరియు న్యూట్రల్ రంగులు
- **Spacing**: కాంపాక్ట్, నార్మల్ లేదా స్పేషియస్ లేఅవుట్‌లు
- **Motion**: యానిమేషన్లు మరియు ట్రాన్సిషన్లు (అవసరమైతే)

### దశ 4: థీమ్ జనరేషన్ (Theme Generation)

Setup Assistant agent కింది వాటితో మీ కస్టమ్ బ్లాక్ థీమ్‌ను స్కాఫోల్డ్ చేస్తుంది:

- అన్ని డిజైన్ టోకెన్లను కలిగి ఉన్న `theme.json`
- సాధారణ లేఅవుట్‌ల కోసం బ్లాక్ టెంప్లేట్‌లు (హోమ్‌పేజీ, బ్లాగ్, కాంటాక్ట్)
- మీ డిజైన్ సిస్టమ్‌కు సరిపోయే కస్టమ్ బ్లాక్ స్టైల్స్
- థీమ్ మెటాడేటా మరియు WordPress సపోర్ట్ డిక్లరేషన్లు

### దశ 5: యాక్టివేషన్ మరియు ధృవీకరణ (Activation and Verification)

థీమ్ ఆటోమేటిక్‌గా యాక్టివేట్ చేయబడుతుంది, మరియు మీకు ఇది కనిపిస్తుంది:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

అప్పుడు మీరు థీమ్ సరిగ్గా ప్రదర్శించబడుతుందో లేదో ధృవీకరించడానికి మీ సైట్‌ను సందర్శించవచ్చు.

## Site Specification మరియు site_brief మెమరీ

Onboarding సమయంలో, ఏజెంట్ మీ సైట్ యొక్క స్పెసిఫికేషన్‌ను ఒక **site_brief** మెమరీ కేటగిరీలో సంగ్రహిస్తుంది. ఇందులో ఇవి ఉంటాయి:

- సైట్ ఉద్దేశ్యం మరియు లక్ష్యాలు
- లక్ష్య ప్రేక్షకులు
- బ్రాండ్ రంగులు మరియు టోన్
- డిజైన్ ప్రాధాన్యతలు
- కంటెంట్ నిర్మాణం

### site_brief ఎందుకు ముఖ్యం (Why site_brief Matters)

భవిష్యత్తు సెషన్‌లలో, ఏజెంట్లు మీ site_briefను ఈ క్రింది వాటికి రిఫరెన్స్ చేస్తాయి:

- మార్పుల అంతటా డిజైన్ స్థిరత్వాన్ని నిర్వహించడానికి
- మీ సైట్ ఉద్దేశ్యానికి అనుగుణంగా ఫీచర్లను సూచించడానికి
- సందర్భానుసార సిఫార్సులను అందించడానికి
- సెటప్ ప్రశ్నలను పునరావృతం చేయకుండా ఉండటానికి

### మీ site_briefను వీక్షించడం (Viewing Your site_brief)

మీరు ఏజెంట్‌ను అడగవచ్చు:

```
"Show me my site brief"
```

లేదా

```
"What do you know about my site?"
```

ఏజెంట్ మీరు నిల్వ చేసిన సైట్ స్పెసిఫికేషన్‌ను ప్రదర్శిస్తుంది.

## Onboarding తర్వాత కస్టమైజేషన్ (Customizing After Onboarding)

Theme Builder onboarding పూర్తయిన తర్వాత, మీరు చేయగలిగేవి:

### Design System Aesthetics Skill ఉపయోగించడం

డిజైన్ మెరుగుదలలను అడగండి:

```
"Refine the typography to be more modern"
```

లేదా

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** లక్ష్యంగా చేసుకున్న డిజైన్ అప్‌డేట్‌ల ద్వారా మీకు మార్గనిర్దేశం చేస్తుంది.

### theme.json ను నేరుగా ఎడిట్ చేయడం (Edit theme.json Directly)

అధునాతన వినియోగదారుల కోసం, ఈ క్రింది వాటిని సర్దుబాటు చేయడానికి `/wp-content/themes/[theme-name]/theme.json` ను ఎడిట్ చేయండి:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### కస్టమ్ బ్లాక్ టెంప్లేట్‌లను సృష్టించడం (Create Custom Block Templates)

కింది వాటి కోసం కస్టమ్ టెంప్లేట్‌లను సృష్టించడానికి WordPress బ్లాక్ ఎడిటర్‌ను ఉపయోగించండి:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## పోలిక: పాత vs. కొత్త Onboarding (Comparison: Old vs. New Onboarding)

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ట్రబుల్‌షూటింగ్ (Troubleshooting)

**Onboarding flow పూర్తి కాలేదు**
- ఫ్లోను మళ్లీ ప్రారంభించండి: "Start the Theme Builder onboarding"
- మీ WordPress ఇన్‌స్టాలేషన్ అప్‌డేట్ అయిందో లేదో తనిఖీ చేయండి
- Setup Assistant agent ఎనేబుల్ చేయబడిందో లేదో ధృవీకరించండి

**నా site_brief ఉపయోగించబడడం లేదు**
- ఏజెంట్‌కు మెమరీ యాక్సెస్ ఉందో లేదో నిర్ధారించుకోండి
- ఏజెంట్‌ను "recall my site brief" అని అడగండి
- మీ సెట్టింగ్‌లలో మెమరీ ఎనేబుల్ చేయబడిందో లేదో తనిఖీ చేయండి

**రూపొందించిన థీమ్ నా ప్రాధాన్యతలకు సరిపోవడం లేదు**
- దీన్ని మెరుగుపరచడానికి Design System Aesthetics skill ఉపయోగించండి
- ఏజెంట్‌ను "regenerate the theme with [specific changes]" అని అడగండి
- ఖచ్చితమైన నియంత్రణ కోసం theme.json ను నేరుగా ఎడిట్ చేయండి

## తదుపరి దశలు (Next Steps)

Theme Builder onboarding పూర్తి చేసిన తర్వాత:

1. **మీ సైట్‌ను ధృవీకరించండి**: కొత్త థీమ్‌ను చూడటానికి మీ సైట్‌ను సందర్శించండి
2. **డిజైన్‌ను మెరుగుపరచండి**: సర్దుబాట్లకు Design System Aesthetics skill ఉపయోగించండి
3. **కంటెంట్‌ను జోడించండి**: మీ సైట్ కంటెంట్‌ను నిర్మించడం ప్రారంభించండి
4. **అపారమైన సామర్థ్యాలను అన్వేషించండి**: scaffold-block-theme మరియు activate-theme వంటి ఇతర ఏజెంట్ సామర్థ్యాల గురించి తెలుసుకోండి
