---
id: wu_handle_user_meta_fields
title: Radnja - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Omogućuje developerima plugina spremanje korisničkih meta podataka na različite načine ako im je to potrebno.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $meta_repository | `array` | Popis meta polja, strukturiran kao key =&gt; value. |
| $user | `\WP_User` | Objekt korisnika WordPress. |
| $customer | `\Customer` | Objekt klijenta Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa checkout. |

### Od verzije

- 2.0.4
### Izvor

Definirano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) u retku 1244
