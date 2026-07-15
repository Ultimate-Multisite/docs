---
id: set_auth_cookie
title: Aktioun - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Gëtt direkt ausgeléist, ier den Authentifikatiouns-Cookie gesat gëtt.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $auth_cookie | `string` | Wäert vum Authentifikatiouns-Cookie. |
| $expire | `int` | D'Zäit, zu där d'Karenzzäit fir de Login als UNIX-Zäitstempel ofleeft. Standard ass 12 Stonnen no der Oflafzäit vum Cookie. |
| $expiration | `int` | D'Zäit, zu där den Authentifikatiouns-Cookie als UNIX-Zäitstempel ofleeft. Standard ass 14 Deeg vun elo un. |
| $user_id | `int` | User-ID. |
| $scheme | `string` | Authentifikatiounsschema. Wäerter enthalen 'auth' oder 'secure_auth'. |
| $token | `string` | Sessiounstoken vum User, dee fir dëse Cookie benotzt gëtt. |

### Zanter {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Quell {#source}

Definéiert an [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) op der Linn 124
