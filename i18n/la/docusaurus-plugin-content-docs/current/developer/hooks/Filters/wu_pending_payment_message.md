---
id: wu_pending_payment_message
title: Filtrum - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtrum: wu_pending_payment_message

Sine usorem nuntium de solutionibus pendentibus mutare.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $message | `string` | Nuntius imprimendus. |
| $customer | `\WP_Ultimo\Models\Customer` | Emptor praesens. |
| $pending_payments | `array` | Index cum solutionibus pendentibus. |

### Ex quo {#since}

- 2.0.19
### Fons {#source}

Definitum in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ad lineam 244
