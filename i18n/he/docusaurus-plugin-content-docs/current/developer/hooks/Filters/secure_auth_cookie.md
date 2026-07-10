---
id: secure_auth_cookie
title: מסנן - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# מסנן: secure_auth_cookie {#filter-secureauthcookie}

מסנן האם קוקי האימות (auth cookie) צריך להישלח רק דרך HTTPS.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $secure | `bool` | האם הקוקי צריך להישלח רק דרך HTTPS. |
| $user_id | `int` | מזהה המשתמש. |

### מאז {#since}

- 3.1.0
### מקור {#source}

מוגדר ב-[inc/sso/auth-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) בשורה 80
