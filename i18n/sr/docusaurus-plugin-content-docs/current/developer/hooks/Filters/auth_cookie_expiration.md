---
id: auth_cookie_expiration
title: Филтер - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Филтер: auth_cookie_expiration

Филтрира трајање периода истека колачића за аутентификацију.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Трајање периода истека у секундама. |
| $user_id | `int` | ID корисника. |
| $remember | `bool` | Да ли треба запамтити пријаву корисника. Подразумевано false. |

### Од верзије {#since}

- 2.8.0
### Извор {#source}

Дефинисано у [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) у реду 52
