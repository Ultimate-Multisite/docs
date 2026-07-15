---
id: wu_pending_payment_message
title: Филтер - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Филтер: wu_pending_payment_message

Омогућава кориснику да промени поруку о плаћањима на чекању.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $message | `string` | Порука за приказ. |
| $customer | `\WP_Ultimo\Models\Customer` | Тренутни корисник. |
| $pending_payments | `array` | Листа са плаћањима на чекању. |

### Од верзије {#since}

- 2.0.19
### Извор {#source}

Дефинисано у [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) у реду 244
