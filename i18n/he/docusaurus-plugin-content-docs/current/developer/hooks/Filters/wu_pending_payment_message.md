---
id: wu_pending_payment_message
title: מסנן - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# מסנן: wu_pending_payment_message {#filter-wupendingpaymentmessage}

מאפשר למשתמש לשנות את ההודעה לגבי התשלומים הממתינים.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ההודעה שצריך להציג. |
| $customer | `\WP_Ultimo\Models\Customer` | הלקוח הנוכחי. |
| $pending_payments | `array` | רשימה של תשלומים ממתינים. |

### מאז {#since}

- 2.0.19
### מקור {#source}

מוגדר ב-[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) בשורה 244
