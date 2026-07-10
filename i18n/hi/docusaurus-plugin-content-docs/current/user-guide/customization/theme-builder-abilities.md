---
title: थीम बिल्डर क्षमताएं
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold और Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 दो शक्तिशाली क्षमताओं (abilities) को पेश करता है जो आपको चैट इंटरफ़ेस से सीधे कस्टम ब्लॉक थीम (block themes) बनाने और तैनात (deploy) करने की अनुमति देती हैं।

## Overview {#overview}

**scaffold-block-theme** और **activate-theme** क्षमताओं से एजेंट निम्नलिखित कार्य कर सकते हैं:
- आपके द्वारा दिए गए विवरण के आधार पर पूरी, प्रोडक्शन-रेडी ब्लॉक थीम बनाना
- बिना किसी मैन्युअल हस्तक्षेप के स्वचालित रूप से आपकी साइट पर थीम सक्रिय (activate) करना
- निर्देशित डिज़ाइन निर्णयों के माध्यम से सुसंगत विज़ुअल पहचान (cohesive visual identities) बनाना

## Scaffold Block Theme {#scaffold-block-theme}

**scaffold-block-theme** क्षमता एक नई WordPress ब्लॉक थीम को एक पूरी थीम संरचना के साथ तैयार करती है, जिसमें शामिल हैं:

- डिज़ाइन टोकन के साथ `theme.json` कॉन्फ़िगरेशन
- सामान्य लेआउट के लिए ब्लॉक टेम्पलेट फ़ाइलें
- कस्टम ब्लॉक स्टाइल और वेरिएशन
- थीम मेटाडेटा और सपोर्ट घोषणाएँ

### How to Invoke {#how-to-invoke}

Superdav AI Agent के साथ अपनी चैट में, आप थीम जनरेशन का अनुरोध कर सकते हैं:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

एजेंट निम्नलिखित कार्य करेगा:
1. बातचीत के माध्यम से आपकी डिज़ाइन प्राथमिकताएँ एकत्र करना
2. पूरी थीम संरचना बनाना
3. सभी आवश्यक थीम फ़ाइलें बनाना
4. सक्रियण के लिए थीम को तैयार करना

### Expected Output {#expected-output}

जब यह क्षमता सफलतापूर्वक निष्पादित (execute) हो जाती है, तो आपको यह दिखाई देगा:

- पुष्टि कि थीम को scaffold कर दिया गया है
- थीम का नाम और स्थान
- लागू किए गए डिज़ाइन टोकन का सारांश (रंग, टाइपोग्राफी, रिक्ति)
- सक्रियण के लिए तैयार स्थिति

उदाहरण आउटपुट:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

**activate-theme** क्षमता आपकी साइट को एक नए scaffold किए गए या मौजूदा ब्लॉक थीम पर स्विच करती है।

### How to Invoke {#how-to-invoke-1}

थीम को scaffold करने के बाद, आप तुरंत इसे सक्रिय कर सकते हैं:

```
"Activate the Modern Agency theme"
```

या किसी भी मौजूदा थीम को सक्रिय कर सकते हैं:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output {#expected-output-1}

जब सक्रियण सफल होता है:

- सक्रिय थीम की पुष्टि
- पिछला थीम का नाम (संदर्भ के लिए)
- साइट URL जहाँ थीम अब लाइव है
- कोई भी थीम-विशिष्ट सेटअप नोट्स

उदाहरण आउटपुट:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold और Activate {#workflow-scaffold-and-activate}

एक सामान्य वर्कफ़्लो दोनों क्षमताओं को जोड़ता है:

1. **थीम जनरेशन का अनुरोध करें**: "मेरे SaaS लैंडिंग पेज के लिए एक ब्लॉक थीम बनाएं"
2. **एजेंट थीम को scaffold करता है**: फ़ाइलें और डिज़ाइन टोकन उत्पन्न करता है
3. **समीक्षा और सुधार**: यदि आवश्यक हो तो डिज़ाइन परिवर्तनों पर चर्चा करें
4. **सक्रिय करें**: "Activate the theme now"
5. **सत्यापित करें**: यह पुष्टि करने के लिए अपनी साइट पर जाएँ कि नया डिज़ाइन लाइव है

## Design Tokens और Customization {#design-tokens-and-customization}

scaffold की गई थीम निम्नलिखित के लिए WordPress डिज़ाइन टोकन (theme.json के माध्यम से) का उपयोग करती हैं:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius और width tokens
- **Shadows**: Elevation levels

ये टोकन `theme.json` में केंद्रीकृत (centralized) होते हैं, जिससे आप एक ही फ़ाइल से अपनी पूरी डिज़ाइन प्रणाली को समायोजित करना आसान हो जाता है।

## Limitations and Notes {#limitations-and-notes}

- थीम `/wp-content/themes/` में scaffold की जाती हैं और उन्हें WordPress नामकरण सम्मेलनों (naming conventions) का पालन करना चाहिए
- सक्रियण के लिए आपकी WordPress साइट पर उपयुक्त अनुमतियाँ (permissions) आवश्यक हैं
- थीम में कस्टम PHP कोड न्यूनतम होता है; जटिल कार्यक्षमता के लिए प्लगइन्स का उपयोग करें
- ब्लॉक थीम WordPress 5.9 और उसके बाद के संस्करणों के साथ सबसे अच्छा काम करती हैं

## Troubleshooting {#troubleshooting}

**Scaffolding के बाद थीम दिखाई नहीं देती**
- सत्यापित करें कि थीम डायरेक्टरी मौजूद है और उसमें उचित अनुमतियाँ हैं
- जांचें कि `theme.json` वैध JSON है
- सुनिश्चित करें कि थीम का नाम मौजूदा थीम से टकराता नहीं है

**Activation विफल हो जाती है**
- पुष्टि करें कि आपके पास एडमिनिस्ट्रेटर अनुमतियाँ हैं
- जांचें कि थीम डायरेक्टरी WordPress द्वारा पठनीय (readable) है
- विवरण के लिए WordPress त्रुटि लॉग (error logs) की समीक्षा करें

**Design tokens लागू नहीं हो रहे हैं**
- सत्यापित करें कि `theme.json` सिंटैक्स सही है
- किसी भी कैशिंग प्लगइन को साफ़ करें
- जांचें कि आपका WordPress संस्करण उन टोकन का समर्थन करता है जिनका आप उपयोग कर रहे हैं

## Next Steps {#next-steps}

अपनी थीम को सक्रिय करने के बाद, आप यह कर सकते हैं:
- टाइपोग्राफी, रंगों और रिक्ति को परिष्कृत करने के लिए **Design System Aesthetics skill** का उपयोग करें
- WordPress ब्लॉक एडिटर के माध्यम से व्यक्तिगत ब्लॉक स्टाइल को कस्टमाइज़ करें
- थीम की `style.css` फ़ाइल में कस्टम CSS जोड़ें
- विशिष्ट पेज प्रकारों के लिए कस्टम ब्लॉक टेम्पलेट बनाएं
