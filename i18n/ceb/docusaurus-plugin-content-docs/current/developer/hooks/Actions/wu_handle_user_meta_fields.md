---
id: wu_handle_user_meta_fields
title: Aksyon - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksyon: wu_handle_user_meta_fields

Tugoti ang mga developer sa plugin nga magtipig sa user meta data sa lain-laing paagi kung kinahanglan nila.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $meta_repository | `array` | Ang lista sa meta fields, key =&gt; value nga istruktura. |
| $user | `\WP_User` | Ang WordPress user object. |
| $customer | `\Customer` | Ang Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Ang checkout class. |

### Sukad {#since}

- 2.0.4
### Tinubdan {#source}

Gihubit sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) sa linya 1244
