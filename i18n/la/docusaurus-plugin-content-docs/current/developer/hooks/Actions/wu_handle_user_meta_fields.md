---
id: wu_handle_user_meta_fields
title: Actio - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Actio: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Sine elaboratoribus plugin ut data meta usoris variis modis servent, si opus habeant.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $meta_repository | `array` | Index camporum meta, forma key =&gt; value structus. |
| $user | `\WP_User` | Obiectum usoris WordPress. |
| $customer | `\Customer` | Obiectum emptoris Ultimate Multisite. |
| $checkout | `\Checkout` | Classis checkout. |

### Ex {#since}

- 2.0.4
### Fons {#source}

Definitum in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ad lineam 1244
