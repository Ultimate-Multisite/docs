---
id: set_logged_in_cookie
title: Actio - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Actio: set_logged_in_cookie

Fit statim antequam crustulum authenticationis in-sessionis statutum est.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $logged_in_cookie | `string` | Valor crustuli in-sessionis. |
| $expire | `int` | Tempus quo spatium gratiae initii sessionis exspirat ut UNIX timestamp. Praedefinitum est 12 horae post tempus exspirationis crustuli. |
| $expiration | `int` | Tempus quo crustulum authenticationis in-sessionis exspirat ut UNIX timestamp. Praedefinitum est 14 dies ab hoc tempore. |
| $user_id | `int` | ID usoris. |
| $scheme | `string` | Schema authenticationis. Praedefinitum 'logged_in'. |
| $token | `string` | Token sessionis usoris ad hoc crustulum adhibendum. |

### Ab

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Fons

Definitum in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ad lineam 141
