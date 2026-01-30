---
id: wu_pending_payment_message
title: "Filter - wu_pending_payment_message"
sidebar_label: "wu_pending_payment_message"
---

# Filter: wu_pending_payment_message

Allow user to change the message about the pending payments.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | The message to print. |
| $customer | `\WP_Ultimo\Models\Customer` | The current customer. |
| $pending_payments | `array` | A list with pending payments. |

### Since

- 2.0.19
### Source

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244

