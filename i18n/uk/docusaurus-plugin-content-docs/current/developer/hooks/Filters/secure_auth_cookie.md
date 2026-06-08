---
id: secure_auth_cookie
title: Фільтр - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Фільтр: secure_auth_cookie

Визначає, чи має кукі автентифікації передаватися лише через HTTPS.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $secure | `bool` | Чи має кукі передаватися лише через HTTPS. |
| $user_id | `int` | Ідентифікатор користувача. |

### З версії

- 3.1.0
### Джерело

Визначено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) на рядку 80
