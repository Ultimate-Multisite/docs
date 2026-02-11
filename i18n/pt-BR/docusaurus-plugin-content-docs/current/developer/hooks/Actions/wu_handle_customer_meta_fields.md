---
id: wu_handle_customer_meta_fields
title: Ação - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Permite que desenvolvedores de plugins salvem metadados de maneiras diferentes, se necessário.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | A lista de campos meta, estruturada como chave =&gt; valor. |
| $customer | `\Customer` | O objeto cliente do Ultimate Multisite. |
| $checkout | `\Checkout` | A classe de checkout. |

### Since

- 2.0.0
### Source

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) na linha 1211
