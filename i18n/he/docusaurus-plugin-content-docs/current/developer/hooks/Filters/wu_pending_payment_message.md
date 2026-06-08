---
id: wu_pending_payment_message
title: מסנן - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# מסנן: wu_pending_payment_message

מאפשר למשתמש לשנות את ההודעה לגבי התשלומים הממתינים.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ההודעה שצריך להציג. |
| $customer | `\WP_Ultimo\Models\Customer` | הלקוח הנוכחי. |
| $pending_payments | `array` | רשימה של תשלומים ממתינים. |

### מאז

- 2.0.19
### מקור

מוגדר ב-[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) בשורה 244
