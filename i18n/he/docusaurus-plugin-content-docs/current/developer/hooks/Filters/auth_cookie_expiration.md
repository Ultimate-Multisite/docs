---
id: auth_cookie_expiration
title: פילטר - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# מסנן: auth_cookie_expiration

מסנן את משך תקופת התפוגה של קוביית האימות.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $length | `int` | משך תקופת התפוגה בשניות. |
| $user_id | `int` | מזהה משתמש. |
| $remember | `bool` | האם לזכור את כניסת המשתמש. ברירת מחדל: false. |

### מאז {#since}

- 2.8.0
### מקור {#source}

מוגדר ב-[inc/sso/auth-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) בשורה 52
