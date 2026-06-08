---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Дозволяє розробникам плагінів зберігати метадані різними способами, якщо це необхідно.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Список метаполів у форматі ключ => значення. |
| $customer | `\Customer` | Об'єкт клієнта Ultimate Multisite. |
| $checkout | `\Checkout` | Клас оформлення замовлення. |

### Since

- 2.0.0
### Source

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) на рядку 1211
