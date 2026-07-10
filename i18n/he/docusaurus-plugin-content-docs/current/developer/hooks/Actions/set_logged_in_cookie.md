---
id: set_logged_in_cookie
title: פעולה - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# פעולה: set_logged_in_cookie {#action-setloggedincookie}

מופעל מיד לפני שקוביית האימות (cookie) של המשתמש המחובר מוגדרת.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ערך קוקי המשתמש המחובר. |
| $expire | `int` | הזמן שבו תפוגת תקופת ההמתנה של ההתחברות, כחותמת זמן UNIX. ברירת המחדל היא 12 שעות לאחר תפוגת הקוקי. |
| $expiration | `int` | הזמן שבו קוקי האימות של המשתמש המחובר פג תוקף, כחותמת זמן UNIX. ברירת המחדל היא 14 ימים מהיום. |
| $user_id | `int` | מזהה משתמש. |
| $scheme | `string` | סכמת אימות. ברירת המחדל היא 'logged_in'. |
| $token | `string` | אסימון המשתמש (session token) שצריך להשתמש בו עבור קוקי זה. |

### מאז {#since}

- 2.6.0
- 4.9.0: נוסף הפרמטר <code>$token</code>.
### מקור {#source}

מוגדר ב[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) בשורה 141
