---
id: wu_pending_payment_message
title: Филтер - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Филтер: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Му дозволува на корисникот да ја промени пораката за плаќањата во тек.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $message | `string` | Пораката што треба да се прикаже. |
| $customer | `\WP_Ultimo\Models\Customer` | Тековниот клиент. |
| $pending_payments | `array` | Список со плаќања во тек. |

### Од верзија {#since}

- 2.0.19
### Извор {#source}

Дефинирано во [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) на линија 244
