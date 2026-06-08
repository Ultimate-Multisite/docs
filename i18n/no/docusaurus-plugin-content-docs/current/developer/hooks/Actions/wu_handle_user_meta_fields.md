---
id: wu_handle_user_meta_fields
title: Handling - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Lar plugin-utviklere lagre brukermetadata på forskjellige måter hvis de trenger det.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $meta_repository | `array` | En liste over meta-felt, strukturert som nøkkel => verdi. |
| $user | `\WP_User` | WordPress-brukerobjektet. |
| $customer | `\Customer` | Ultimate Multisite-kundeobjektet. |
| $checkout | `\Checkout` | Kassenklassen. |

### Siden

- 2.0.4
### Kilde

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) på linje 1244
