---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Pinapayagan nito ang user na baguhin ang mensahe na ipapakita tungkol sa mga pending payments.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Ang mensaheng ipi-print. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang kasalukuyang customer. |
| $pending_payments | `array` | Isang listahan ng mga pending payments. |

### Since {#since}

- 2.0.19
### Source {#source}

Tinukoy sa [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) sa linya 244
