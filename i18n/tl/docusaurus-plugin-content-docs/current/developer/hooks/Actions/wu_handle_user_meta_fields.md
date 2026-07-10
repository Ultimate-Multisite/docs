---
id: wu_handle_user_meta_fields
title: Aksyon - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksiyon: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Payagan ang mga developer ng plugin na mag-save ng user meta data sa iba't ibang paraan kung kailangan nila.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $meta_repository | `array` | Ang listahan ng mga meta field, nakaayos na key =&gt; value. |
| $user | `\WP_User` | Ang WordPress user object. |
| $customer | `\Customer` | Ang Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Ang checkout class. |

### Mula noong {#since}

- 2.0.4
### Pinagmulan {#source}

Tinukoy sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) sa linya 1244
