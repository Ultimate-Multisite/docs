---
id: set_logged_in_cookie
title: Акција - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Дејство: set_logged_in_cookie

Се активира веднаш пред да се постави колачето за автентикација на најавен корисник.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Вредноста на колачето за најавен корисник. |
| $expire | `int` | Времето кога истекува грејс-периодот за најава како UNIX timestamp. Стандардно е 12 часа по времето на истекување на колачето. |
| $expiration | `int` | Времето кога истекува колачето за автентикација на најавен корисник како UNIX timestamp. Стандардно е 14 дена од сега. |
| $user_id | `int` | ID на корисник. |
| $scheme | `string` | Шема за автентикација. Стандардно 'logged_in'. |
| $token | `string` | Токен за сесија на корисникот што ќе се користи за ова колаче. |

### Од {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Извор {#source}

Дефинирано во [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) на линија 141
