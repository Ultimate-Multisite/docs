---
id: set_auth_cookie
title: Дејство - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Дејство: set_auth_cookie

Се активира веднаш пред да се постави колачето за автентикација.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Вредност на колачето за автентикација. |
| $expire | `int` | Времето кога истекува грејс-периодот за најавување како UNIX временска ознака. Стандардно е 12 часа по времето на истекување на колачето. |
| $expiration | `int` | Времето кога истекува колачето за автентикација како UNIX временска ознака. Стандардно е 14 дена од сега. |
| $user_id | `int` | ID на корисник. |
| $scheme | `string` | Шема за автентикација. Вредностите вклучуваат 'auth' или 'secure_auth'. |
| $token | `string` | Сесиски токен на корисникот што ќе се користи за ова колаче. |

### Од

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Извор

Дефинирано во [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) на линија 124
