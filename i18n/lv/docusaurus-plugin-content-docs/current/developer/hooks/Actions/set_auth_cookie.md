---
id: set_auth_cookie
title: Darbība - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Darbība: set_auth_cookie

Tiek palaista tieši pirms autentifikācijas sīkfaila iestatīšanas.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Autentifikācijas sīkfaila vērtība. |
| $expire | `int` | Laiks, kad pieteikšanās labvēlības periods beidzas kā UNIX laikspiedols. Noklusējums ir 12 stundas pēc sīkfaila derīguma termiņa beigām. |
| $expiration | `int` | Laiks, kad autentifikācijas sīkfaila derīguma termiņš beidzas kā UNIX laikspiedols. Noklusējums ir 14 dienas no šī brīža. |
| $user_id | `int` | Lietotāja ID. |
| $scheme | `string` | Autentifikācijas shēma. Vērtības ietver 'auth' vai 'secure_auth'. |
| $token | `string` | Lietotāja sesijas token, ko izmantot šim sīkfailam. |

### Kopš

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Avots

Definēts [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) 124. rindā
