---
id: wu_pending_payment_message
title: Filtro - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Allow user to change the message about the pending payments.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Il messaggio da stampare. |
| $customer | `\WP_Ultimo\Models\Customer` | Il cliente attuale. |
| $pending_payments | `array` | Un elenco con pagamenti in sospeso. |

### Since

- 2.0.19
### Source

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
