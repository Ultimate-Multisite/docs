---
id: wu_sso_enabled
title: फिल्टर - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# फिल्टर: wu_sso_enabled {#filter-wussoenabled}

क्रस-डोमेन single-sign-on क्षमता सक्षम/अक्षम गर्नुहोस्।

single-sign-on पूर्ण रूपमा बन्द गर्न, वा यसको सट्टा सर्तअनुसार सक्षम गर्न यो मान फिल्टर गर्नुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $enabled | `bool` | SSO सक्षम हुनुपर्छ? सक्रिय गर्न True, निष्क्रिय गर्न false-ish। |

### देखि {#since}

- 2.0.11
### स्रोत {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) मा पंक्ति 110 मा परिभाषित


## फिर्ता गर्छ {#returns}
SSO सक्षम छ कि छैन।
