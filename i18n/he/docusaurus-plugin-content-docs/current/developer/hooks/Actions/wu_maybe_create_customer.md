---
id: wu_maybe_create_customer
title: פעולה - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

מאפשר למפתחי תוספים לבצע פעולות נוספות כאשר הלקוח נוצר.

כאן אנו מוסיפים את ה-hooks להוספת הלקוח למשתמש באתר הראשי, לדוגמה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $customer | `\Customer` | הלקוח שנוצר אולי. |
| $checkout | `\Checkout` | מחלקת ה-checkout הנוכחית. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) בשורה 1156
