---
id: wu_handle_customer_meta_fields
title: Handling - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Lar plugin-utviklere lagre metadata på forskjellige måter hvis de trenger det.

## Parametere

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Listen over meta-felt, strukturert som nøkkel => verdi. |
| $customer | `\Customer` | Ultimate Multisite-kundeelementet. |
| $checkout | `\Checkout` | Checkout-klassen. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) på linje 1211
