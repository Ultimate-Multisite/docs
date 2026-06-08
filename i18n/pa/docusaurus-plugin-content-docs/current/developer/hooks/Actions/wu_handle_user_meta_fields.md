---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

ਇਹ ਪਲੱਗਇਨ ਡਿਵੈਲਪਰ ਨੂੰ ਲੋੜ ਪੈਣ 'ਤੇ ਯੂਜ਼ਰ ਮੀਟਾ ਡਾਟਾ ਨੂੰ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਨਾਲ ਸੇਵ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ (Parameters)

| Name | Type | ਵਰਣਨ (Description) |
|------|------|-------------|
| $meta_repository | `array` | ਮੀਟਾ ਫੀਲਡਾਂ ਦੀ ਸੂਚੀ, ਜੋ ਕਿ key => value ਢਾਂਚੇ ਵਿੱਚ ਹੋਵੇ। |
| $user | `\WP_User` | WordPress ਯੂਜ਼ਰ ਆਬਜੈਕਟ। |
| $customer | `\Customer` | Ultimate Multisite ਕਸਟਮਰ ਆਬਜੈਕਟ। |
| $checkout | `\Checkout` | ਚੈੱਕਆਉਟ ਕਲਾਸ। |

### Since

- 2.0.4
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
