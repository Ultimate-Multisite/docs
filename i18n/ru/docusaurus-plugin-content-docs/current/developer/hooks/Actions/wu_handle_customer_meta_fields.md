---
id: wu_handle_customer_meta_fields
title: Действие - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Позволяет разработчикам плагинов сохранять метаданные различными способами, если им это необходимо.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Список полей метаданных, структурированный как ключ => значение. |
| $customer | `\Customer` | Объект клиента Ultimate Multisite. |
| $checkout | `\Checkout` | Класс оформления заказа. |

### Since

- 2.0.0

### Source

Определено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) на строке 1211
