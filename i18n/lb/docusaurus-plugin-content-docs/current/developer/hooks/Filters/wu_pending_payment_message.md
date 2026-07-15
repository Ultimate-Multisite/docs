---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Erlaabt de Benotzer, d'Noriicht iwwer déi ausstoend Bezuelungen z'änneren.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $message | `string` | D'Noriicht, déi ausgi gëtt. |
| $customer | `\WP_Ultimo\Models\Customer` | Den aktuelle Client. |
| $pending_payments | `array` | Eng Lëscht mat ausstoende Bezuelungen. |

### Zënter {#since}

- 2.0.19
### Quell {#source}

Definéiert an [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) op der Linn 244
