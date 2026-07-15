---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

फ्रंट-एंड साइट साइनअपसाठी उपलब्ध भाषांच्या यादीला फिल्टर (Filter) करते.

या हुकला (hook) रिकामी ॲरे (empty array) पास केल्यास, साइनअप फॉर्मवर सेटिंगचे आउटपुट अक्षम होईल आणि साइट तयार करताना डीफॉल्ट भाषा वापरली जाईल. जी भाषा आधीच इन्स्टॉल केलेली नाही, त्या काढून टाकल्या जातील.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | उपलब्ध भाषा. |

### Since {#since}

- 4.4.0
### Source {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) मध्ये लाइन 117 वर परिभाषित केले आहे.
