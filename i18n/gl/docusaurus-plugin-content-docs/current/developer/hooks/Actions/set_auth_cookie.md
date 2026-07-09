---
id: set_auth_cookie
title: Acción - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Acción: set_auth_cookie {#action-setauthcookie}

Dispárase inmediatamente antes de que se estableza a cookie de autenticación.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $auth_cookie | `string` | Valor da cookie de autenticación. |
| $expire | `int` | O momento no que expira o período de graza de inicio de sesión como unha marca temporal UNIX. O predeterminado é 12 horas despois da hora de expiración da cookie. |
| $expiration | `int` | O momento no que expira a cookie de autenticación como unha marca temporal UNIX. O predeterminado é 14 días a partir de agora. |
| $user_id | `int` | ID do usuario. |
| $scheme | `string` | Esquema de autenticación. Os valores inclúen 'auth' ou 'secure_auth'. |
| $token | `string` | Token de sesión do usuario que se usará para esta cookie. |

### Dende {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Fonte {#source}

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na liña 124
