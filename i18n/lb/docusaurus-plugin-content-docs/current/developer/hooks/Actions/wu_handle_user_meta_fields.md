---
id: wu_handle_user_meta_fields
title: Aktioun - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Erlaabt Plugin-Entwéckler, Benotzer-Metadaten op verschidde Manéieren ze späicheren, wann se dat brauchen.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $meta_repository | `array` | D'Lëscht vun de Meta-Felder, strukturéiert als key =&gt; value. |
| $user | `\WP_User` | Den WordPress-Benotzerobjet. |
| $customer | `\Customer` | Den Ultimate Multisite-Clientobjet. |
| $checkout | `\Checkout` | D'Checkout-Klass. |

### Zënter {#since}

- 2.0.4
### Source {#source}

Definéiert an [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) op Linn 1244
