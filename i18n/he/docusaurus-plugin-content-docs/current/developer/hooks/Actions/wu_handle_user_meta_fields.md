---
id: wu_handle_user_meta_fields
title: פעולה - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# פעולה: wu_handle_user_meta_fields

מאפשר למפתחי תוספים לשמור נתוני מטא משתמשים בדרכים שונות, אם הם נדרשים לכך.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $meta_repository | `array` | רשימה של שדות מטא, מובנה בצורת מפתח => ערך. |
| $user | `\WP_User` | אובייקט המשתמש של WordPress. |
| $customer | `\Customer` | אובייקט הלקוח של Ultimate Multisite. |
| $checkout | `\Checkout` | מחלקת ה-checkout. |

### מאז

- 2.0.4
### מקור

מוגדר ב[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) בשורה 1244
