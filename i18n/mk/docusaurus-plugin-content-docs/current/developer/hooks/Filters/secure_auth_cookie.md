---
id: secure_auth_cookie
title: Филтер - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Филтер: secure_auth_cookie

Филтрира дали auth колачето треба да се испраќа само преку HTTPS.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $secure | `bool` | Дали колачето треба да се испраќа само преку HTTPS. |
| $user_id | `int` | ID на корисник. |

### Од

- 3.1.0
### Извор

Дефинирано во [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) на линија 80
