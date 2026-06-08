---
id: wu_handle_user_meta_fields
title: Aksyon - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Pinapayagan nito ang mga developer ng plugin na i-save ang user meta data sa iba't ibang paraan kung kailangan nila.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $meta_repository | `array` | Ang listahan ng mga meta field, naka-istrukturang key => value. |
| $user | `\WP_User` | Ang user object ng WordPress. |
| $customer | `\Customer` | Ang customer object ng Ultimate Multisite. |
| $checkout | `\Checkout` | Ang class ng checkout. |

### Mula pa noong

- 2.0.4
### Pinagmulan

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
