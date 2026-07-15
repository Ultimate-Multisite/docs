---
id: secure_logged_in_cookie
title: Филтер - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Филтер: secure_logged_in_cookie

Филтрира да ли колачић за пријављеног корисника треба да се шаље само преко HTTPS-а.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Да ли колачић за пријављеног корисника треба да се шаље само преко HTTPS-а. |
| $user_id | `int` | ID корисника. |
| $secure | `bool` | Да ли колачић за аутентификацију треба да се шаље само преко HTTPS-а. |

### Од верзије {#since}

- 3.1.0
### Извор {#source}

Дефинисано у [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) у реду 91
