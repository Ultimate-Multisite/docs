---
id: secure_auth_cookie
title: Филтър - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Филтър: secure_auth_cookie

Този филтър определя дали cookie-то за автентикация трябва да се изпраща само през HTTPS.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $secure | `bool` | Дали cookie-то трябва да се изпраща само през HTTPS. |
| $user_id | `int` | ID на потребителя. |

### От версия

- 3.1.0
### Източник

Дефиниран в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) на ред 80
