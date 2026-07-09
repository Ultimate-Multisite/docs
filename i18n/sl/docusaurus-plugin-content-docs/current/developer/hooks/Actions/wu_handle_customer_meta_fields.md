---
id: wu_handle_customer_meta_fields
title: Dejanje - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Dejanje: wu_handle_customer_meta_fields

Omogočite razvijalcem pluginov, da po potrebi shranjujejo meta podatke na različne načine.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $meta_repository | `array` | Seznam meta polj, strukturiran kot key =&gt; value. |
| $customer | `\Customer` | Objekt stranke Ultimate Multisite. |
| $checkout | `\Checkout` | Razred blagajne. |

### Od različice

- 2.0.0
### Vir

Definirano v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) v vrstici 1211
