---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

ਇਹ ਐਕਸ਼ਨ plugin developers ਨੂੰ ਇਹ ਆਜ਼ਾਦੀ ਦਿੰਦਾ ਹੈ ਕਿ ਉਹ ਲੋੜ ਪੈਣ 'ਤੇ meta data ਨੂੰ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਨਾਲ ਸੇਵ ਕਰ ਸਕਣ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta fields ਦੀ ਸੂਚੀ, ਜੋ key => value ਦੇ ਢਾਂਚੇ ਵਿੱਚ ਹੋਵੇ। |
| $customer | `\Customer` | Ultimate Multisite ਦਾ customer object। |
| $checkout | `\Checkout` | checkout class। |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ਵਿੱਚ ਲਾਈਨ 1211 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
