---
id: wu_domain_seller_search_delay
title: फ़िल्टर - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

यह फ़िल्टर मिलीसेकंड में डोमेन खोज के डीबाउंस विलंब (debounce delay) को नियंत्रित करता है।

धीमे कनेक्शन पर API कॉल को कम करने के लिए इस मान को बढ़ा दें।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | मिलीसेकंड में डीबाउंस विलंब। डिफ़ॉल्ट 500 है। |

### Since

- 2.1.0
### Source

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) में लाइन 854 पर परिभाषित है।
