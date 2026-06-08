---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

यह फ़िल्टर फ्रंट-एंड साइट साइनअप के लिए उपलब्ध भाषाओं की सूची को फ़िल्टर करता है।

इस हुक को एक खाली ऐरे (empty array) पास करने से साइनअप फॉर्म पर सेटिंग का आउटपुट अक्षम हो जाएगा, और साइट बनाते समय डिफ़ॉल्ट भाषा का उपयोग किया जाएगा। जो भाषाएँ पहले से इंस्टॉल नहीं हैं, उन्हें हटा दिया जाएगा।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | उपलब्ध भाषाएँ। |

### Since

- 4.4.0
### Source

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
