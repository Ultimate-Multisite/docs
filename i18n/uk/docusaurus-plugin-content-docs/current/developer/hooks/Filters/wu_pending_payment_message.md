---
id: wu_pending_payment_message
title: Фільтр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Фільтр: wu_pending_payment_message

Дозволяє користувачеві змінити повідомлення про очікувані платежі.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Повідомлення, яке буде виведено. |
| $customer | `\WP_Ultimo\Models\Customer` | Поточний клієнт. |
| $pending_payments | `array` | Список очікуваних платежів. |

### Починаючи з

- 2.0.19
### Джерело

Визначено в [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) на рядку 244
