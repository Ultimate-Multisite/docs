---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Ger pluginutvecklare möjlighet att spara metadata på olika sätt vid behov.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $meta_repository | `array` | En lista över metadatafält, strukturerad som nyckel => värde. |
| $customer | `\Customer` | Ultimate Multisite-kundobjektet. |
| $checkout | `\Checkout` | Checkout-klassen. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) på rad 1211
