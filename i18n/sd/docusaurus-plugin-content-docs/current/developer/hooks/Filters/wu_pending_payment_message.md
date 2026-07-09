---
id: wu_pending_payment_message
title: فلٽر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

استعمال ڪندڙ کي pending payments بابت پيغام تبديل ڪرڻ جي اجازت ڏئي ٿو.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ڇاپڻ لاءِ پيغام. |
| $customer | `\WP_Ultimo\Models\Customer` | موجوده customer. |
| $pending_payments | `array` | pending payments سان گڏ هڪ فهرست. |

### Since

- 2.0.19
### Source

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ۾ line 244 تي بيان ٿيل.
