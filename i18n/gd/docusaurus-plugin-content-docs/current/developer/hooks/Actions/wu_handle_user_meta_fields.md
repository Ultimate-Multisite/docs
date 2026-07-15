---
id: wu_handle_user_meta_fields
title: Gnìomh - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Gnìomh: wu_handle_user_meta_fields

Leig le luchd-leasachaidh plugin dàta meta cleachdaiche a shàbhaladh ann an diofar dhòighean ma tha feum aca air.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $meta_repository | `array` | Liosta nan raointean meta, air a structaradh mar key =&gt; value. |
| $user | `\WP_User` | Oibseact cleachdaiche WordPress. |
| $customer | `\Customer` | Oibseact teachdaiche Ultimate Multisite. |
| $checkout | `\Checkout` | An clas checkout. |

### Bho {#since}

- 2.0.4
### Tùs {#source}

Air a mhìneachadh ann an [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) aig loidhne 1244
