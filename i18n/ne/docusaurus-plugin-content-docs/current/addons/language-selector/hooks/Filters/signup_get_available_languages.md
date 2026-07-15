---
id: signup_get_available_languages
title: फिल्टर - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# फिल्टर: signup_get_available_languages

front-end साइट साइनअपहरूका लागि उपलब्ध भाषाहरूको सूची फिल्टर गर्छ।

यस hook मा खाली array पास गर्दा साइनअप फारममा सेटिङको आउटपुट अक्षम हुनेछ, र साइट सिर्जना गर्दा पूर्वनिर्धारित भाषा प्रयोग हुनेछ। पहिले नै स्थापना नभएका भाषाहरू हटाइनेछन्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $available_languages | `array` | उपलब्ध भाषाहरू। |

### देखि {#since}

- 4.4.0
### स्रोत {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) मा पङ्क्ति 117 मा परिभाषित गरिएको छ।
