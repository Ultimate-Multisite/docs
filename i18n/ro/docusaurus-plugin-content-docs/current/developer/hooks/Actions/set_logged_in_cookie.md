---
id: set_logged_in_cookie
title: Acțiune - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Acțiune: set_logged_in_cookie

Se declanșează imediat înainte de stabilirea cookie-ului de autentificare pentru utilizatorul autentificat.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $logged_in_cookie | `string` | Valoarea cookie-ului de autentificare. |
| $expire | `int` | Timpul expirării perioadei de grație de autentificare, exprimat ca un timestamp UNIX. Implicit este 12 ore după expirarea cookie-ului. |
| $expiration | `int` | Timpul la care expiră cookie-ul de autentificare, exprimat ca un timestamp UNIX. Implicit este peste 14 zile de acum. |
| $user_id | `int` | ID-ul utilizatorului. |
| $scheme | `string` | Schema de autentificare. Implicit este 'logged_in'. |
| $token | `string` | Token-ul de sesiune al utilizatorului pe care îl folosești pentru acest cookie. |

### De la

- 2.6.0
- 4.9.0: A fost adăugat parametrul <code>$token</code>.
### Sursă

Definit în [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) la linia 141
