---
id: secure_auth_cookie
title: Филтер - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Филтер: secure_auth_cookie

Филтрира да ли auth колачић треба да се шаље само преко HTTPS.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Да ли колачић треба да се шаље само преко HTTPS. |
| $user_id | `int` | ID корисника. |

### Од верзије {#since}

- 3.1.0
### Извор {#source}

Дефинисано у [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) у реду 80
