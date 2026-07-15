---
id: wu_handle_user_meta_fields
title: Toiming - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Võimaldab lisandmooduli arendajatel salvestada kasutaja metaandmeid erinevatel viisidel, kui nad seda vajavad.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $meta_repository | `array` | The list of meta fields, key =&gt; value structured. |
| $user | `\WP_User` | The WordPress user object. |
| $customer | `\Customer` | The Ultimate Multisite customer object. |
| $checkout | `\Checkout` | The checkout class. |

### Alates {#since}

- 2.0.4
### Allikas {#source}

Määratletud failis [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) real 1244
