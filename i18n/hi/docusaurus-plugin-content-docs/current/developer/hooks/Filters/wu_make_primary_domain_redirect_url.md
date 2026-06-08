---
id: wu_make_primary_domain_redirect_url
title: फ़िल्टर - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

जब किसी डोमेन को प्राइमरी बनाया जाता है, तो रीडायरेक्ट URL को फ़िल्टर करता है।

यह डेवलपर्स को यह कस्टमाइज़ करने की अनुमति देता है कि डोमेन को प्राइमरी सेट करने के बाद उपयोगकर्ताओं को कहाँ रीडायरेक्ट किया जाएगा। डिफ़ॉल्ट रूप से, यह मुख्य साइट पर वर्तमान URL पर, या संशोधित की जा रही साइट के एडमिन URL पर रीडायरेक्ट करता है।

## पैरामीटर्स

| Name | Type | विवरण |
|------|------|-------------|
| $redirect_url | `string` | डिफ़ॉल्ट रीडायरेक्ट URL। यह या तो वर्तमान URL होगा (यदि मुख्य साइट है) या वर्तमान साइट का एडमिन URL होगा। |
| $current_site | `int` | उस साइट का ID जिसका डोमेन प्राइमरी बनाया जा रहा है। |
| $domain | `\Domain` | वह डोमेन ऑब्जेक्ट जिसे प्राइमरी बनाया गया था। |
| $old_primary_domains | `array` | उन डोमेन IDs का ऐरे जो पहले प्राइमरी थे। |

### कब से
- 2.0.0
### स्रोत

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## रिटर्न करता है
फ़िल्टर किया गया रीडायरेक्ट URL।
