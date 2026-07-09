---
id: wu_pending_payment_message
title: فلٽر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

استعمال ڪندڙ کي رهيل ادائيگين بابت پيغام تبديل ڪرڻ جي اجازت ڏيو.

## پيراميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $message | `string` | ڇاپڻ لاءِ پيغام. |
| $customer | `\WP_Ultimo\Models\Customer` | موجوده گراهڪ. |
| $pending_payments | `array` | رهيل ادائيگين سان هڪ فهرست. |

### کان وٺي

- 2.0.19
### ذريعو

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ۾ قطار 244 تي بيان ٿيل.
