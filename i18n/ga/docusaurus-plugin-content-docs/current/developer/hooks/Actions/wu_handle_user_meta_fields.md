---
id: wu_handle_user_meta_fields
title: Gníomh - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Gníomh: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Lig d’fhorbróirí plugin meiteashonraí úsáideora a shábháil ar bhealaí éagsúla más gá dóibh.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $meta_repository | `array` | Liosta na réimsí meiteashonraí, struchtúrtha mar key =&gt; value. |
| $user | `\WP_User` | Oibiacht úsáideora WordPress. |
| $customer | `\Customer` | Oibiacht custaiméara Ultimate Multisite. |
| $checkout | `\Checkout` | An aicme checkout. |

### Ó {#since}

- 2.0.4
### Foinse {#source}

Sainithe in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ag líne 1244
