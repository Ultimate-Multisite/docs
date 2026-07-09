---
id: wu_pending_payment_message
title: سۈزگۈچ - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# سۈزگۈچ: wu_pending_payment_message

ئىشلەتكۈچىگە كۈتۈۋاتقان ھەق تۆلەشلەر ھەققىدىكى ئۇچۇرنى ئۆزگەرتىشكە يول قويىدۇ.

## پارامېتىرلار

| نامى | تۈرى | چۈشەندۈرۈشى |
|------|------|-------------|
| $message | `string` | چىقىرىلىدىغان ئۇچۇر. |
| $customer | `\WP_Ultimo\Models\Customer` | نۆۋەتتىكى خېرىدار. |
| $pending_payments | `array` | كۈتۈۋاتقان ھەق تۆلەشلەر تىزىملىكى. |

### باشلاپ

- 2.0.19
### مەنبە

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) دا 244-قۇردا ئېنىقلانغان.
