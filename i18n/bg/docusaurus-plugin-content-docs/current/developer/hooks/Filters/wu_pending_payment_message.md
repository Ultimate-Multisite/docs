---
id: wu_pending_payment_message
title: Филтър - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Филтър: wu_pending_payment_message

Позволява на потребителя да промени съобщението, което се показва за изчакваните плащания.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $message | `string` | Съобщението, което се изписва. |
| $customer | `\WP_Ultimo\Models\Customer` | Текущият потребител/клиент. |
| $pending_payments | `array` | Списък с изчаквани плащания. |

### От версия {#since}

- 2.0.19
### Източник {#source}

Дефиниран в [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) на линия 244
