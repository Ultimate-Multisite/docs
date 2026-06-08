---
id: wu_handle_customer_meta_fields
title: Akcija - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Akcija: wu_handle_customer_meta_fields

Omogućava programerima pluginova da sačuvaju meta podatke na različite načine, ako je potrebno.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $meta_repository | `array` | Lista meta polja, strukturirana kao ključ => vrijednost. |
| $customer | `\Customer` | Objekat klijenta Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa za naplatu (checkout). |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) na liniji 1211
