---
id: wu_pending_payment_message
title: مرشح - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Allow user to change the message about the pending payments.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | الرسالة التي سيتم طباعتها. |
| $customer | `\WP_Ultimo\Models\Customer` | العميل الحالي. |
| $pending_payments | `array` | قائمة بالمدفوعات المعلقة. |

### Since

- 2.0.19

### Source

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
