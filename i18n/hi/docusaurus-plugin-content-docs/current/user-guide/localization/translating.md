---
title: Ultimate Multisite का अनुवाद
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Ultimate Multisite का अनुवाद करना

Ultimate Multisite अंग्रेज़ी में विकसित किया गया है, लेकिन यह plugin पूरी तरह से अनुवाद योग्य है और हम अनुवाद में योगदान का स्वागत करते हैं।

## Core Plugin के अनुवाद

Core Ultimate Multisite plugin का अनुवाद आधिकारिक **WordPress.org translation platform** के माध्यम से किया जाता है:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

यह WordPress समुदाय का मानक अनुवाद सिस्टम है। जब अनुवाद एक निश्चित स्वीकृति सीमा तक पहुँच जाते हैं, तो वे WordPress plugin updates के ज़रिए स्वचालित रूप से सभी Ultimate Multisite उपयोगकर्ताओं को वितरित कर दिए जाते हैं।

**हमें आपकी मदद चाहिए!** अगर आप अंग्रेज़ी के अलावा कोई अन्य भाषा जानते हैं, तो कृपया अनुवाद में योगदान देने पर विचार करें। कुछ strings का अनुवाद करना भी मददगार होता है। शुरू करने के लिए:

1. [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/) पर जाएँ
2. अपनी भाषा चुनें
3. "Contribute Translation" पर क्लिक करें
4. आपको एक मुफ़्त WordPress.org अकाउंट की ज़रूरत होगी

अगर आप अपनी भाषा के लिए translation editor बनना चाहते हैं (अनुवादों को स्वीकृत करने में सक्षम), तो [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions) के माध्यम से संपर्क करें।

## Addon के अनुवाद

Addon plugins का अनुवाद अलग से यहाँ किया जाता है:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Addon के अनुवाद वर्तमान में शुरुआती बिंदु के रूप में AI द्वारा बनाए गए हैं। ये सभी समर्थित भाषाओं को कवर करते हैं, लेकिन इनमें अजीब वाक्य रचना या गलतियाँ हो सकती हैं। हम मानव अनुवादकों का स्वागत करते हैं जो इन्हें समीक्षा करके अधिक स्वाभाविक और सटीक बनाने के लिए सुझाव दें।

## Local अनुवाद

अगर आप upstream में योगदान करने के बजाय अपने प्रोजेक्ट के लिए locally अनुवाद बनाना चाहते हैं, तो दो विकल्प हैं:

### Poedit का उपयोग करना

आप `.pot` फ़ाइल का अनुवाद करने के लिए desktop application **[Poedit](https://poedit.net)** का उपयोग कर सकते हैं:

1. [poedit.net](https://poedit.net) से Poedit डाउनलोड करें
2. `wp-content/plugins/ultimate-multisite/lang/` से `.pot` फ़ाइल खोलें
3. Poedit इंटरफ़ेस में strings का अनुवाद करें
4. Save करें -- Poedit `.po` और `.mo` फ़ाइलें बना देगा
5. Output फ़ाइलों को `lang` फ़ोल्डर में रखें

### Loco Translate का उपयोग करना

**[Loco Translate](https://wordpress.org/plugins/loco-translate/)** WordPress plugin आपको बिना किसी desktop tool के सीधे admin panel से अनुवाद करने देता है। यह आपके लिए अनुवाद फ़ाइलों को बनाने और compile करने का काम संभाल लेता है।
