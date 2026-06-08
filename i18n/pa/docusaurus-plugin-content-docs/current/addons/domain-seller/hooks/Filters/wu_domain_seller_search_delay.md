---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

ਇਸ ਫਿਲਟਰ ਨਾਲ ਡੋਮੇਨ ਸਰਚ ਦੇ ਡੀਬਾਉਂਸ ਡਿਲੇ (debounce delay) ਨੂੰ ਮਿਲੀਸੈਕੰਡ ਵਿੱਚ ਫਿਲਟਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

ਜੇ ਕਨੈਕਸ਼ਨ ਹੌਲੀ ਹਨ, ਤਾਂ API ਕਾਲਾਂ ਘਟਾਉਣ ਲਈ ਇਸ ਵੈਲਿਊ ਨੂੰ ਵਧਾਓ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | ਮਿਲੀਸੈਕੰਡ ਵਿੱਚ ਡੀਬਾਉਂਸ ਡਿਲੇ। ਡਿਫਾਲਟ 500 ਹੈ। |

### Since

- 2.1.0
### Source

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ਵਿੱਚ ਲਾਈਨ 854 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
