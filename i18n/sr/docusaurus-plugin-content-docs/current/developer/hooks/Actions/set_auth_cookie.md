---
id: set_auth_cookie
title: Радња - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Покреће се непосредно пре него што се колачић за аутентификацију постави.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Вредност колачића за аутентификацију. |
| $expire | `int` | Време када истиче грејс период пријаве као UNIX временска ознака. Подразумевано је 12 сати након времена истека колачића. |
| $expiration | `int` | Време када колачић за аутентификацију истиче као UNIX временска ознака. Подразумевано је 14 дана од сада. |
| $user_id | `int` | ID корисника. |
| $scheme | `string` | Шема аутентификације. Вредности укључују 'auth' или 'secure_auth'. |
| $token | `string` | Токен сесије корисника који се користи за овај колачић. |

### Од верзије {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Извор {#source}

Дефинисано у [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) у реду 124
