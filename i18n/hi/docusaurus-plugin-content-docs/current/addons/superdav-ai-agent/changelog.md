---
title: चेंजलॉग
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Theme Builder अब नेमस्पेस-सुरक्षित सैनिटाइजेशन के साथ कस्टम लोगो SVG बना और एम्बेड कर सकता है।
- **Photo upload in discovery interview** — थीम बिल्डर डिस्कवरी इंटरव्यू में अब अधिक समृद्ध डिज़ाइन संदर्भ के लिए फोटो अपलोड करने का चरण शामिल है।
- **Validate Palette Contrast ability** — थीम पर लागू करने से पहले WCAG अनुपालन के लिए रंग जोड़े की जाँच करें।
- **Hospitality menus** — थीम बिल्डर अब हॉस्पिटैलिटी व्यवसायों के लिए संरचित खाद्य और पेय मेनू पेज बना सकता है।
- **Desktop and mobile preview rendering** — डिज़ाइन दिशा चुनने के दौरान डेस्कटॉप और मोबाइल उपकरणों पर अपने डिज़ाइन का पूर्वावलोकन करें।
- **Navigation label parameter** — 'Create Menu' क्षमता अब पेज शीर्षक से अलग एक विशिष्ट `navigation_label` का समर्थन करती है।
- **Tier 1 tool availability** — sd-ai-agent/site-scrape अब एक Tier 1 टूल है जो थीम बिल्डर में डिफ़ॉल्ट रूप से उपलब्ध है।

### Fixed

- **AI Client cache** — अब क्रॉस-रिक्वेस्ट पर निरंतरता के लिए ट्रांजिएंट्स (transients) द्वारा समर्थित है, जिससे लंबे समय तक चलने वाले एजेंट कार्यों पर डेटा हानि रुकती है।
- **Plugin row action links** — स्पष्टता के लिए ठीक किया गया और नाम बदला गया।

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — Brave Search के साथ समृद्ध इंटरनेट सर्च परिणामों के लिए Tavily को एक सर्च प्रोवाइडर के रूप में जोड़ें।
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, और Kadence Theme skill guides अब प्लगइन के साथ आते हैं।
- **Site builder contact form ability** — चैट इंटरफ़ेस से सीधे किसी भी पेज पर एक संपर्क फ़ॉर्म जोड़ें।

### Improved

- **WooCommerce integration refactored** — अब बेहतर विश्वसनीयता और संगतता के लिए नेटिव WooCommerce APIs का उपयोग करता है।
- **Provider list refreshes automatically** — जब कोई भी प्लगइन सक्रिय या निष्क्रिय किया जाता है।

### Fixed

- **navigate-to ability** — कुछ एडमिन पेजों पर अनंत रीलोड लूप (infinite reload loop) को ठीक किया गया।
- **list-posts ability** — अब श्रेणी (category) और टैग नामों को सही ढंग से स्लग्ज़ (slugs) में हल करता है।
- **WP-CLI commands** — पिछले रीफैक्टर के बाद गुम हुए नेमस्पेस एलियास (namespace aliases) को बहाल किया गया।
- **Event automation** — उन साइटों को शालीनता से संभालता है जहाँ ऑटोमेशन टेबल अभी तक नहीं बनाई गई हैं।
- **memory-save ability** — अब सिस्टम इंस्ट्रक्शन बिल्डर में सही नेमस्पेस प्रीफ़िक्स का उपयोग करता है।
- **Scalar tool results** — अब AI को वापस किए जाने से पहले सही ढंग से रैप (wrap) किया जाता है।
- **Usage statistics** — अब पुराने संस्करणों से अपग्रेड करते समय लेगेसी एबिलिटी की कुंजी प्रारूप (legacy ability key format) को सही ढंग से संभालता है।
