---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Acțiune: wu_handle_customer_meta_fields

Permite dezvoltatorilor de plugin să salveze date meta în moduri diferite, dacă este necesar.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $meta_repository | `array` | Lista câmpurilor meta, structurată ca cheie => valoare. |
| $customer | `\Customer` | Obiectul client Ultimate Multisite. |
| $checkout | `\Checkout` | Clasa de checkout. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) la linia 1211
