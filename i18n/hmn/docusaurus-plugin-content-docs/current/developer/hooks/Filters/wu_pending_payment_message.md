---
id: wu_pending_payment_message
title: Lim - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Cia tus neeg siv hloov cov lus hais txog cov kev them nyiaj uas tseem tos.

## Cov Parameter

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Cov lus uas yuav luam tawm. |
| $customer | `\WP_Ultimo\Models\Customer` | Tus customer tam sim no. |
| $pending_payments | `array` | Ib daim ntawv teev cov kev them nyiaj uas tseem tos. |

### Txij thaum

- 2.0.19
### Qhov chaw los

Txhais nyob hauv [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ntawm kab 244
