---
id: set_auth_cookie
title: Actio - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Actio: set_auth_cookie {#action-setauthcookie}

Incenditur statim antequam crustulum authenticationis constituatur.

## Parametri {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $auth_cookie | `string` | Valor crustuli authenticationis. |
| $expire | `int` | Tempus quo spatium gratiae login exspirat ut nota temporis UNIX. Praedefinitum est 12 horae post tempus exspirationis crustuli. |
| $expiration | `int` | Tempus quo crustulum authenticationis exspirat ut nota temporis UNIX. Praedefinitum est 14 dies ab hoc tempore. |
| $user_id | `int` | ID usoris. |
| $scheme | `string` | Schema authenticationis. Valores includunt 'auth' vel 'secure_auth'. |
| $token | `string` | Signum sessionis usoris quod ad hoc crustulum adhibeatur. |

### Ex quo {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Fons {#source}

Definitum in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ad lineam 124
