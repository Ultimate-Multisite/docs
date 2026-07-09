---
id: wu_pending_payment_message
title: فلټر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

کاروونکي ته اجازه ورکړئ چې د پاتې تادیاتو په اړه پیغام بدل کړي.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | هغه پیغام چې چاپ شي. |
| $customer | `\WP_Ultimo\Models\Customer` | اوسنی پیرودونکی. |
| $pending_payments | `array` | د پاتې تادیاتو سره یو لېست. |

### Since {#since}

- 2.0.19
### Source {#source}

په [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) کې په ۲۴۴ کرښه تعریف شوی.
