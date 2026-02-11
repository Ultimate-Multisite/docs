---
id: wu_pending_payment_message
title: Фильтр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Позволяет пользователю изменить сообщение о ожидающих платежах.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Сообщение, которое будет выведено. |
| $customer | `\WP_Ultimo\Models\Customer` | Текущий клиент. |
| $pending_payments | `array` | Список ожидающих платежей. |

### Since

- 2.0.19

### Source

Определено в [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) на строке 244
