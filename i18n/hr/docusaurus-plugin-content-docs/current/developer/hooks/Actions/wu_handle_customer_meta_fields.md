---
id: wu_handle_customer_meta_fields
title: Radnja - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Radnja: wu_handle_customer_meta_fields

Omogućuje programerima dodataka spremanje meta podataka na različite načine ako im je potrebno.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $meta_repository | `array` | Popis meta polja, strukturiranih kao ključ =&gt; vrijednost. |
| $customer | `\Customer` | Objekt korisnika Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa naplate. |

### Od verzije

- 2.0.0
### Izvor

Definirano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) u retku 1211
