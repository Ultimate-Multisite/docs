---
id: wu_handle_user_meta_fields
title: Acțiune - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Permite dezvoltatorilor de plugin să salveze datele meta ale utilizatorului în moduri diferite, dacă este necesar.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Lista câmpurilor meta, structurată ca cheie => valoare. |
| $user | `\WP_User` | Obiectul utilizator WordPress. |
| $customer | `\Customer` | Obiectul client Ultimate Multisite. |
| $checkout | `\Checkout` | Clasa de checkout. |

### Since

- 2.0.4
### Source

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) la linia 1244
