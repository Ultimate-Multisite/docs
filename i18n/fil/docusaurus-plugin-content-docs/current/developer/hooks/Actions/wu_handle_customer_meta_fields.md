---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Pinapayagan nito ang mga developer ng plugin na mag-save ng metadata sa iba't ibang paraan kung kailangan nila.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Ang listahan ng mga meta field, naka-structure na key => value. |
| $customer | `\Customer` | Ang customer object ng Ultimate Multisite. |
| $checkout | `\Checkout` | Ang checkout class. |

### Since {#since}

- 2.0.0
### Source {#source}

Nakatakda sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) sa linya 1211
