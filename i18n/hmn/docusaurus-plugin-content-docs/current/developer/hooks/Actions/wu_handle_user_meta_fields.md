---
id: wu_handle_user_meta_fields
title: Kev nqis tes - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Tso cai rau cov plugin developers khaws user meta cov ntaub ntawv raws ntau txoj kev yog lawv xav tau.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Daim npe ntawm cov meta fields, muaj qauv key =&gt; value. |
| $user | `\WP_User` | WordPress user object. |
| $customer | `\Customer` | Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Checkout class. |

### Since

- 2.0.4
### Source

Teev tseg hauv [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ntawm kab 1244
