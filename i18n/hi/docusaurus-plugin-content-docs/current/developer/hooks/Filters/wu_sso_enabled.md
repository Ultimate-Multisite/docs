---
id: wu_sso_enabled
title: फ़िल्टर - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# फ़िल्टर: wu_sso_enabled {#filter-wussoenabled}

क्रॉस-डोमेन सिंगल-साइन-ऑन (single-sign-on) की क्षमता को सक्षम/अक्षम करना।

इस मान को फ़िल्टर करके आप सिंगल-साइन-ऑन को पूरी तरह से बंद कर सकते हैं, या इसके बजाय इसे सशर्त रूप से (conditionally) सक्षम कर सकते हैं।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $enabled | `bool` | क्या SSO सक्षम होना चाहिए? ऑन के लिए True, ऑफ के लिए False जैसा। |

### कब से {#since}

- 2.0.11
### स्रोत {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) में लाइन 110 पर परिभाषित।

## रिटर्न करता है {#returns}
यह बताता है कि SSO सक्षम है या नहीं।
