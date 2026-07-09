---
id: wu_handle_customer_meta_fields
title: Ação - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Ação: wu_handle_customer_meta_fields

Permite que programadores de extensões guardem metadados de formas diferentes, se precisarem.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $meta_repository | `array` | A lista de campos meta, estruturada como key =&gt; value. |
| $customer | `\Customer` | O objeto de cliente do Ultimate Multisite. |
| $checkout | `\Checkout` | A classe de finalização de compra. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) na linha 1211
