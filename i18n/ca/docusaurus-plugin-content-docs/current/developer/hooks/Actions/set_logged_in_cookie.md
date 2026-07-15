---
id: set_logged_in_cookie
title: Acció - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aquesta acció: set_logged_in_cookie

Es activa immediatament abans que es estableix la cookie d'autenticació de llogué.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $logged_in_cookie | `string` | El valor de la cookie de llogué. |
| $expire | `int` | El temps que expira el període de gràcia del llogué com a marca de temps UNIX. Per par défaut és de 12 hores després de la data d'expiració de la cookie. |
| $expiration | `int` | El temps en què expira la cookie d'autenticació de llogué com a marca de temps UNIX. Per par défaut és de 14 dies des de ara. |
| $user_id | `int` | ID de l'usuari. |
| $scheme | `string` | Esquema d'autenticació. Per par défaut 'logged_in'. |
| $token | `string` | El token de sessió de l'usuari per a aquesta cookie. |

### Des de {#since}

- 2.6.0
- 4.9.0: Es va afegir el paràmetre `<code>$token</code>`.
### Font {#source}

Definida en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) a la línia 141
