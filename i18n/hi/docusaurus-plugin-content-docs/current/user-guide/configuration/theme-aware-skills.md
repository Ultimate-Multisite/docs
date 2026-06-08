---
title: थीम-जागरूक कौशल
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills (थीम-जागरूक स्किल्स)

Superdav AI Agent v1.10.0 में चार नई थीम-जागरूक (theme-aware) बिल्ट-इन स्किल्स शामिल हैं जो स्वचालित रूप से आपके सक्रिय WordPress थीम के अनुसार ढल जाती हैं। ये स्किल्स आपके थीम की आर्किटेक्चर और फीचर्स के हिसाब से विशेष मार्गदर्शन और क्षमताएं प्रदान करती हैं।

## What Are Theme-Aware Skills? (थीम-जागरूक स्किल्स क्या हैं?)

थीम-जागरूक स्किल्स पहले से कॉन्फ़िगर किए गए नॉलेज बेस और टूल सेट होते हैं जिन्हें AI असिस्टेंट स्वचालित रूप से आपके साइट पर वर्तमान में सक्रिय WordPress थीम के आधार पर चुनता है। जब आप थीम बदलते हैं, तो असिस्टेंट की उपलब्ध स्किल्स अपने आप अपडेट हो जाती हैं — इसके लिए किसी मैन्युअल कॉन्फ़िगरेशन की ज़रूरत नहीं होती।

हर स्किल में शामिल हैं:

- **Theme-specific documentation** — थीम का उपयोग करने और उसे कस्टमाइज़ करने पर मार्गदर्शन
- **Block and pattern references** — उपलब्ध ब्लॉक्स, पैटर्न और डिज़ाइन विकल्प
- **Customization examples** — सामान्य कार्यों के लिए कोड स्निपेट और कॉन्फ़िगरेशन पैटर्न
- **Best practices** — थीम की आर्किटेक्चर और वर्कफ़्लो के लिए सुझाव

## Available Theme-Aware Skills (उपलब्ध थीम-जागरूक स्किल्स)

### Block Themes (ब्लॉक थीम्स)

**Applies to:** Themes that use the WordPress block-based (Full Site Editing) architecture.
(लागू होता है: वे थीम्स जो WordPress की ब्लॉक-आधारित (Full Site Editing) आर्किटेक्चर का उपयोग करती हैं।)

The Block Themes skill provides guidance on:
(ब्लॉक थीम्स स्किल निम्नलिखित पर मार्गदर्शन प्रदान करता है:)

- Creating and editing templates using the block editor (ब्लॉक एडिटर का उपयोग करके टेम्पलेट बनाना और एडिट करना)
- Working with block patterns and reusable blocks (ब्लॉक पैटर्न और रियूजेबल ब्लॉक्स के साथ काम करना)
- Customizing global styles and theme.json settings (ग्लोबल स्टाइल और theme.json सेटिंग्स को कस्टमाइज़ करना)
- Using theme blocks and variations (थीम ब्लॉक्स और वेरिएशंस का उपयोग करना)
- Building custom block patterns for your site (अपनी साइट के लिए कस्टम ब्लॉक पैटर्न बनाना)

**Automatically activated when:** Your active theme is a block theme (supports `block-templates` feature).
(स्वचालित रूप से सक्रिय होता है जब: आपका सक्रिय थीम एक ब्लॉक थीम हो (जो `block-templates` फीचर को सपोर्ट करता हो)।)

### Classic Themes (क्लासिक थीम्स)

**Applies to:** Traditional WordPress themes that use PHP templates and the classic editor.
(लागू होता है: पारंपरिक WordPress थीम्स जो PHP टेम्पलेट्स और क्लासिक एडिटर का उपयोग करती हैं।)

The Classic Themes skill provides guidance on:
(क्लासिक थीम्स स्किल निम्नलिखित पर मार्गदर्शन प्रदान करता है:)

- Working with PHP template files and hooks (PHP टेम्पलेट फ़ाइलों और हुक्स के साथ काम करना)
- Customizing theme appearance via the Customizer (कस्टमाइज़र के माध्यम से थीम का रूप बदलना)
- Using widget areas and sidebars (विजेट एरिया और साइडबार का उपयोग करना)
- Modifying CSS and child theme development (CSS को मॉडिफाई करना और चाइल्ड थीम डेवलपमेंट)
- Understanding theme hierarchy and template tags (थीम हायरार्की और टेम्पलेट टैग को समझना)

**Automatically activated when:** Your active theme is a classic (non-block) theme.
(स्वचालित रूप से सक्रिय होता है जब: आपका सक्रिय थीम एक क्लासिक (गैर-ब्लॉक) थीम हो।)

### Kadence Blocks (काडेंस ब्लॉक्स)

**Applies to:** Sites using the Kadence Blocks plugin for advanced block-based design.
(लागू होता है: वे साइटें जो एडवांस्ड ब्लॉक-आधारित डिज़ाइन के लिए Kadence Blocks plugin का उपयोग करती हैं।)

The Kadence Blocks skill provides guidance on:
(काडेंस ब्लॉक्स स्किल निम्नलिखित पर मार्गदर्शन प्रदान करता है:)

- Using Kadence's advanced block library (Hero, Testimonials, Pricing, etc.) (काडेंस की एडवांस्ड ब्लॉक लाइब्रेरी का उपयोग करना (Hero, Testimonials, Pricing, आदि।))
- Configuring Kadence block settings and responsive options (काडेंस ब्लॉक सेटिंग्स और रिस्पॉन्सिव विकल्पों को कॉन्फ़िगर करना)
- Building custom layouts with Kadence's grid and container blocks (काडेंस के ग्रिड और कंटेनर ब्लॉक्स के साथ कस्टम लेआउट बनाना)
- Integrating Kadence blocks with your theme (अपने थीम के साथ काडेंस ब्लॉक्स को इंटीग्रेट करना)
- Leveraging Kadence's design system and presets (काडेंस के डिज़ाइन सिस्टम और प्रीसेट का लाभ उठाना)

**Automatically activated when:** The Kadence Blocks plugin is active on your site.
(स्वचालित रूप से सक्रिय होता है जब: Kadence Blocks plugin आपकी साइट पर सक्रिय हो।)

### Kadence Theme (काडेंस थीम)

**Applies to:** Sites using the Kadence theme for block-based design and customization.
(लागू होता है: वे साइटें जो ब्लॉक-आधारित डिज़ाइन और कस्टमाइज़ेशन के लिए Kadence थीम का उपयोग करती हैं।)

The Kadence Theme skill provides guidance on:
(काडेंस थीम स्किल निम्नलिखित पर मार्गदर्शन प्रदान करता है:)

- Customizing the Kadence theme via global styles and theme.json (ग्लोबल स्टाइल और theme.json के माध्यम से काडेंस थीम को कस्टमाइज़ करना)
- Using Kadence's built-in block patterns and templates (काडेंस के बिल्ट-इन ब्लॉक पैटर्न और टेम्पलेट्स का उपयोग करना)
- Configuring Kadence theme settings and options (काडेंस थीम सेटिंग्स और विकल्पों को कॉन्फ़िगर करना)
- Building custom designs with Kadence's design system (काडेंस के डिज़ाइन सिस्टम के साथ कस्टम डिज़ाइन बनाना)
- Integrating Kadence with popular plugins and tools (लोकप्रिय प्लगइन्स और टूल्स के साथ काडेंस को इंटीग्रेट करना)

**Automatically activated when:** The Kadence theme is your active theme.
(स्वचालित रूप से सक्रिय होता है जब: काडेंस थीम आपका सक्रिय थीम हो।)

## How Skills Are Selected (स्किल्स कैसे चुनी जाती हैं)

असिस्टेंट स्वचालित रूप से प्रत्येक मैसेज पर आपके सक्रिय थीम और इंस्टॉल किए गए प्लगइन्स का पता लगाता है। यदि कोई मैचिंग थीम-जागरूक स्किल उपलब्ध है, तो उसे स्वचालित रूप से असिस्टेंट के कॉन्टेक्स्ट में लोड कर दिया जाता है। आपको स्किल्स को मैन्युअल रूप से इनेबल या स्विच करने की ज़रूरत नहीं है।

### Multiple Skills (कई स्किल्स)

यदि आपकी साइट पर कई स्किल्स लागू होती हैं (उदाहरण के लिए, यदि आपके पास Kadence Blocks और Kadence Theme दोनों सक्रिय हैं), तो असिस्टेंट सभी लागू स्किल्स तक पहुंच रखता है और प्रत्येक से मार्गदर्शन का संदर्भ ले सकता है।

### Switching Themes (थीम बदलना)

जब आप अपना सक्रिय थीम बदलते हैं, तो अगले मैसेज पर असिस्टेंट की उपलब्ध स्किल्स स्वचालित रूप से अपडेट हो जाती हैं। उदाहरण के लिए:

1. आप **Block Themes** स्किल के साथ एक ब्लॉक थीम का उपयोग कर रहे हैं।
2. आप एक क्लासिक थीम पर स्विच करते हैं।
3. आपके अगले मैसेज पर, **Classic Themes** स्किल स्वचालित रूप से लोड हो जाता है, और **Block Themes** स्किल अब उपलब्ध नहीं होता है।

## Using Theme-Aware Skills (थीम-जागरूक स्किल्स का उपयोग करना)

किसी थीम-जागरूक स्किल का लाभ उठाने के लिए, बस चैट इंटरफ़ेस में बताएं कि आप क्या करना चाहते हैं। असिस्टेंट स्वचालित रूप से उपयुक्त स्किल के मार्गदर्शन का संदर्भ लेगा।

### Example Prompts (उदाहरण प्रॉम्प्ट्स)

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling."

असिस्टेंट आपके सक्रिय थीम और प्लगइन्स के अनुसार थीम-विशिष्ट मार्गदर्शन और कोड उदाहरण प्रदान करेगा।

:::note
Theme-aware skills Superdav AI Agent v1.10.0 और उसके बाद के संस्करणों में स्वचालित रूप से उपलब्ध हैं। इसके लिए किसी अतिरिक्त सेटअप या कॉन्फ़िगरेशन की आवश्यकता नहीं है।
:::
