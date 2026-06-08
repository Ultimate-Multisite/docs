---
id: set_auth_cookie
title: פעולה - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# פעולה: set_auth_cookie

מופעל מיד לפני שקוביית האימות מוגדרת.

## פרמטרים

| Name | Type | תיאור |
|------|------|-------------|
| $auth_cookie | `string` | ערך קוביית האימות. |
| $expire | `int` | הזמן שבו תקופת ההמתנה לכניסה פגה, כחותמת זמן יוניקס. ברירת המחדל היא 12 שעות לאחר תוקף הקובייה. |
| $expiration | `int` | הזמן שבו קוביית האימות פגה, כחותמת זמן יוניקס. ברירת המחדל היא 14 ימים מהיום. |
| $user_id | `int` | מזהה המשתמש. |
| $scheme | `string` | סכמת האימות. ערכים כוללים 'auth' או 'secure_auth'. |
| $token | `string` | אסימון המשתמש שמשמש לקובייה הזו. |

### מאז

- 2.5.0
- 4.9.0: הוסף הפרמטר <code>$token</code>.
### מקור

מוגדר ב-[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) בשורה 124
