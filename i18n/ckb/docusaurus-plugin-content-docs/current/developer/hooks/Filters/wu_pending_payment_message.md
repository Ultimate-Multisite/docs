---
id: wu_pending_payment_message
title: پاڵێوەر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# فلتەر: wu_pending_payment_message

ڕێگە بە بەکارهێنەر دەدات کە پەیامەکە دەربارەی پارەدانە چاوەڕوانەکان بگۆڕێت.

## پارامێتەرەکان

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ئەو پەیامەی کە چاپ دەکرێت. |
| $customer | `\WP_Ultimo\Models\Customer` | کڕیاری ئێستا. |
| $pending_payments | `array` | لیستێک بە پارەدانە چاوەڕوانەکان. |

### لە وەشانی

- 2.0.19
### سەرچاوە

پێناسەکراوە لە [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) لە هێڵی 244
