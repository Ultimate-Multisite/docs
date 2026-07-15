---
id: set_auth_cookie
title: Acció - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aquesta funció: set_auth_cookie

S'executa immediatament abans que es estableixi la cookie d'autenticació.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $auth_cookie | `string` | Valor de la cookie d'autenticació. |
| $expire | `int` | El temps en què expira el període de gràcia de login com a marca de temps UNIX. Per par défaut és de 12 hores després del temps d'expiració de la cookie. |
| $expiration | `int` | El temps en què expira la cookie d'autenticació com a marca de temps UNIX. Per par défaut és de 14 dies des de ara. |
| $user_id | `int` | ID de l'usuari. |
| $scheme | `string` | Esquema d'autenticació. Els valors inclouen 'auth' o 'secure_auth'. |
| $token | `string` | El token de sessió de l'usuari que s'utilitzarà per aquesta cookie. |

### Des de {#since}

- 2.5.0
- 4.9.0: Es va afegir el paràmetre `<code$token</code>`.
### Font {#source}

Definida en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) a la línia 124
