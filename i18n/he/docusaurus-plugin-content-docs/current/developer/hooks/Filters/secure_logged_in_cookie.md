---
id: secure_logged_in_cookie
title: פילטר - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# מסנן: secure_logged_in_cookie

קובע אם קוביית ההתחברות (logged in cookie) צריכה להישלח רק דרך HTTPS.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | קובע אם קוביית ההתחברות צריכה להישלח רק דרך HTTPS. |
| $user_id | `int` | מזהה המשתמש. |
| $secure | `bool` | קובע אם קוביית האימות (auth cookie) צריכה להישלח רק דרך HTTPS. |

### מאז {#since}

- 3.1.0
### מקור {#source}

מוגדר ב-[inc/sso/auth-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) בשורה 91
