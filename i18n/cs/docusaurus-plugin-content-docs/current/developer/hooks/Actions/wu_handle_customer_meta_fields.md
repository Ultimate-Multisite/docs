---
id: wu_handle_customer_meta_fields
title: Akce - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Akce: wu_handle_customer_meta_fields

Umožňuje vývojářům pluginů ukládat meta údaje různými způsoby, pokud to potřebují.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $meta_repository | `array` | Seznam meta polí ve struktuře klíč => hodnota. |
| $customer | `\Customer` | Objekt zákazníka Ultimate Multisite. |
| $checkout | `\Checkout` | Třída pro pokladnu. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) na řádku 1211
