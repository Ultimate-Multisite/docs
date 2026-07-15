---
title: थीम बिल्डर ऑनबोर्डिंग फ्लो
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 एक गाइडेड **Theme Builder onboarding flow** पेश करता है जो आपको अपने शुरुआती सेटअप के दौरान एक कस्टम ब्लॉक थीम बनाने में मदद करता है। यह पुराने Site Builder मोड की जगह एक अधिक लचीला, agent-assisted तरीका है।

## Theme Builder Onboarding Flow क्या है? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow एक इंटरैक्टिव सेटअप विज़ार्ड है जो:

- डिज़ाइन संबंधी फैसलों (रंग, टाइपोग्राफी, लेआउट) के माध्यम से आपका मार्गदर्शन करता है
- आपकी साइट की विज़ुअल पहचान (visual identity) की प्राथमिकताओं को कैप्चर करता है
- आपकी ज़रूरतों के हिसाब से एक कस्टम ब्लॉक थीम जनरेट करता है
- पूरा होने पर थीम को स्वचालित रूप से सक्रिय (activate) करता है

यह flow **Setup Assistant agent** द्वारा संचालित होता है, जो स्पष्टीकरण वाले सवाल पूछता है और आपकी थीम को धीरे-धीरे बनाता है।

## Theme Builder Onboarding शुरू करना {#starting-the-theme-builder-onboarding}

### पहली बार सेटअप (First-Run Setup) {#first-run-setup}

जब आप पहली बार किसी नई WordPress इंस्टॉलेशन पर Superdav AI Agent लॉन्च करेंगे, तो आपको यह दिखाई देगा:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow में प्रवेश करने के लिए **"Build a custom theme"** का चयन करें।

### मैन्युअल एक्टिवेशन (Manual Activation) {#manual-activation}

आप किसी भी समय Theme Builder onboarding शुरू कर सकते हैं, बस यह अनुरोध करके:

```
"Start the Theme Builder onboarding"
```

या

```
"Help me create a custom theme"
```

## Onboarding के चरण (The Onboarding Steps) {#the-onboarding-steps}

### चरण 1: मोड का चयन (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent आपसे आपकी पसंद के बारे में पूछता है:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

अधिकांश उपयोगकर्ताओं के लिए **Guided mode** अनुशंसित है; agent आपके उद्योग और लक्ष्यों के आधार पर डिज़ाइन सुझाव देता है।

### चरण 2: साइट का विवरण (Site Specification) {#step-2-site-specification}

आपसे आपकी साइट के बारे में पूछा जाएगा:

- **Site purpose**: ई-कॉमर्स, ब्लॉग, पोर्टफोलियो, SaaS, आदि।
- **Target audience**: आपके विज़िटर कौन हैं?
- **Brand colors**: प्राथमिक और द्वितीयक रंग (या "मुझे यकीन नहीं है")
- **Tone**: पेशेवर, रचनात्मक, चंचल, न्यूनतम, आदि।

यह जानकारी आपकी **site_brief** मेमोरी में स्टोर की जाती है, जिसका उपयोग agents भविष्य के सेशन में संदर्भ के लिए करते हैं।

### चरण 3: डिज़ाइन सिस्टम के निर्णय (Design System Decisions) {#step-3-design-system-decisions}

agent आपको डिज़ाइन टोकन (design token) के चयन के माध्यम से मार्गदर्शन करता है:

- **Typography**: फ़ॉन्ट परिवार (serif, sans-serif, monospace) और साइज़ स्केल
- **Color palette**: प्राथमिक, द्वितीयक, एक्सेंट, और न्यूट्रल रंग
- **Spacing**: कॉम्पैक्ट, सामान्य, या विशाल लेआउट
- **Motion**: एनिमेशन और ट्रांज़िशन (यदि वांछित हो)

### चरण 4: थीम जनरेशन (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent निम्नलिखित के साथ आपकी कस्टम ब्लॉक थीम का ढांचा (scaffold) तैयार करता है:

- `theme.json` जिसमें आपके सभी डिज़ाइन टोकन शामिल होते हैं
- सामान्य लेआउट के लिए ब्लॉक टेम्पलेट (होमपेज, ब्लॉग, संपर्क)
- आपके डिज़ाइन सिस्टम से मेल खाने वाली कस्टम ब्लॉक स्टाइल
- थीम मेटाडेटा और WordPress सपोर्ट घोषणाएँ

### चरण 5: एक्टिवेशन और सत्यापन (Activation and Verification) {#step-5-activation-and-verification}

थीम स्वचालित रूप से सक्रिय हो जाती है, और आपको यह दिखाई देगा:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

इसके बाद आप यह सत्यापित करने के लिए अपनी साइट पर जा सकते हैं कि थीम सही ढंग से प्रदर्शित हो रही है।

## Site Specification और site_brief Memory {#site-specification-and-sitebrief-memory}

ऑनबोर्डिंग के दौरान, agent आपकी साइट के विवरण को एक **site_brief** मेमोरी कैटेगरी में कैप्चर करता है। इसमें शामिल हैं:

- साइट का उद्देश्य और लक्ष्य
- लक्षित दर्शक (Target audience)
- ब्रांड रंग और टोन
- डिज़ाइन प्राथमिकताएँ
- सामग्री की संरचना (Content structure)

### site_brief क्यों महत्वपूर्ण है {#why-sitebrief-matters}

भविष्य के सेशन में, agents साइट_brief का संदर्भ लेते हैं ताकि:

- बदलावों के दौरान डिज़ाइन में निरंतरता बनी रहे
- साइट के उद्देश्य के अनुरूप सुविधाओं का सुझाव दिया जा सके
- संदर्भ-जागरूक सिफारिशें प्रदान की जा सकें
- सेटअप के सवालों को दोहराने से बचा जा सके

### अपने site_brief को देखना {#viewing-your-sitebrief}

आप agent से पूछ सकते हैं:

```
"Show me my site brief"
```

या

```
"What do you know about my site?"
```

agent आपके संग्रहीत साइट विवरण को प्रदर्शित करेगा।

## Onboarding के बाद कस्टमाइज़ करना (Customizing After Onboarding) {#customizing-after-onboarding}

Theme Builder onboarding पूरा होने के बाद, आप:

### Design System Aesthetics Skill का उपयोग करें {#use-the-design-system-aesthetics-skill}

डिज़ाइन सुधार का अनुरोध करें:

```
"Refine the typography to be more modern"
```

या

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** आपको लक्षित डिज़ाइन अपडेट के माध्यम से मार्गदर्शन करता है।

### theme.json को सीधे एडिट करें {#edit-themejson-directly}

एडवांस उपयोगकर्ताओं के लिए, कलर टोकन, टाइपोग्राफी स्केल, स्पेसिंग वैल्यू, बॉर्डर और शैडो परिभाषाओं को समायोजित करने के लिए `/wp-content/themes/[theme-name]/theme.json` को एडिट करें:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### कस्टम ब्लॉक टेम्पलेट बनाएँ {#create-custom-block-templates}

निम्नलिखित के लिए कस्टम टेम्पलेट बनाने के लिए WordPress ब्लॉक एडिटर का उपयोग करें:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## तुलना: पुराना बनाम नया Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## समस्या निवारण (Troubleshooting) {#troubleshooting}

**onboarding flow पूरा नहीं हुआ**
- flow को फिर से शुरू करें: "Start the Theme Builder onboarding"
- जांच लें कि आपकी WordPress इंस्टॉलेशन अपडेटेड है
- सत्यापित करें कि Setup Assistant agent सक्षम (enabled) है

**मेरा site_brief उपयोग नहीं हो रहा है**
- पुष्टि करें कि agent के पास मेमोरी तक पहुंच है
- agent से पूछें "recall my site brief"
- जांच लें कि सेटिंग्स में मेमोरी सक्षम है

**जनरेट की गई थीम मेरी प्राथमिकताओं से मेल नहीं खाती**
- इसे सुधारने के लिए Design System Aesthetics skill का उपयोग करें
- agent से पूछें "regenerate the theme with [specific changes]"
- सटीक नियंत्रण के लिए theme.json को सीधे एडिट करें

## अगले कदम (Next Steps) {#next-steps}

Theme Builder onboarding पूरा करने के बाद:

1. **अपनी साइट सत्यापित करें**: नई थीम देखने के लिए अपनी साइट पर जाएँ
2. **डिज़ाइन को सुधारें**: समायोजन के लिए Design System Aesthetics skill का उपयोग करें
3. **सामग्री जोड़ें**: अपनी साइट की सामग्री बनाना शुरू करें
4. **क्षमताओं का पता लगाएं**: scaffold-block-theme और activate-theme जैसी अन्य agent क्षमताओं के बारे में जानें
