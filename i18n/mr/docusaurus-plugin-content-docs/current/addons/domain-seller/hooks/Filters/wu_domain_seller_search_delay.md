---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

डोमेन शोध (domain search) चा डीबाउंस विलंब (debounce delay) मिलिसेकंदांमध्ये (milliseconds) फिल्टर करतो.

धीम्या कनेक्शनवर API कॉल कमी करण्यासाठी या मूल्यामध्ये वाढ करा.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | डीबाउंस विलंब मिलिसेकंदांमध्ये. डीफॉल्ट ५००. |

### Since {#since}

- 2.1.0
### Source {#source}

Defined in [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) at line 854
