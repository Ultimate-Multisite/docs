---
id: set_logged_in_cookie
title: Igikorwa - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Igikorwa: set_logged_in_cookie

Gitangira ako kanya mbere y’uko cookie y’iyemeza ry’uwinjiye ishyirwaho.

## Ibipimo

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $logged_in_cookie | `string` | Agaciro ka cookie y’uwinjiye. |
| $expire | `int` | Igihe umwanya w’inyongera wo kwinjira urangirira nka UNIX timestamp. Mburabuzi ni amasaha 12 nyuma y’igihe cookie izarangirira. |
| $expiration | `int` | Igihe cookie y’iyemeza ry’uwinjiye izarangirira nka UNIX timestamp. Mburabuzi ni iminsi 14 uhereye ubu. |
| $user_id | `int` | ID y’umukoresha. |
| $scheme | `string` | Uburyo bw’iyemeza. Mburabuzi 'logged_in'. |
| $token | `string` | Token y’isomo ry’umukoresha izakoreshwa kuri iyi cookie. |

### Kuva

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Inkomoko

Byasobanuwe muri [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ku murongo 141
