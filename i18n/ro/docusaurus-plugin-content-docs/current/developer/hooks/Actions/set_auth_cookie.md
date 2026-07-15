---
id: set_auth_cookie
title: Acțiune - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Acțiune: set_auth_cookie

Se declanșează imediat înainte de stabilirea cookie-ului de autentificare.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $auth_cookie | `string` | Valoarea cookie-ului de autentificare. |
| $expire | `int` | Timpul la care expiră perioada de grație a sesiunii, exprimat ca un timestamp UNIX. Implicit este o perioadă de grație de 12 ore după expirarea cookie-ului. |
| $expiration | `int` | Timpul la care expiră cookie-ul de autentificare, exprimat ca un timestamp UNIX. Implicit este peste 14 zile de la data curentă. |
| $user_id | `int` | ID-ul utilizatorului. |
| $scheme | `string` | Schema de autentificare. Valorile includ 'auth' sau 'secure_auth'. |
| $token | `string` | Token-ul de sesiune al utilizatorului de care se va folosi pentru acest cookie. |

### De la {#since}

- 2.5.0
- 4.9.0: A fost adăugat parametrul <code>$token</code>.
### Sursă {#source}

Definit în [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) la linia 124
