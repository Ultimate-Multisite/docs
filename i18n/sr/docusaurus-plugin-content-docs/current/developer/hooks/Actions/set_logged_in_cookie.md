---
id: set_logged_in_cookie
title: Радња - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Радња: set_logged_in_cookie {#action-setloggedincookie}

Окида се непосредно пре него што се постави колачић за аутентификацију пријављеног корисника.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $logged_in_cookie | `string` | Вредност колачића пријављеног корисника. |
| $expire | `int` | Време када истиче грејс период пријаве као UNIX временска ознака. Подразумевано је 12 сати након времена истека колачића. |
| $expiration | `int` | Време када колачић за аутентификацију пријављеног корисника истиче као UNIX временска ознака. Подразумевано је 14 дана од сада. |
| $user_id | `int` | ID корисника. |
| $scheme | `string` | Шема аутентификације. Подразумевано 'logged_in'. |
| $token | `string` | Токен сесије корисника који се користи за овај колачић. |

### Од верзије {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Извор {#source}

Дефинисано у [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) у реду 141
