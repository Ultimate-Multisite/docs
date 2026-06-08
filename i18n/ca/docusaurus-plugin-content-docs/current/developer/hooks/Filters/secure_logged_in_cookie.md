---
id: secure_logged_in_cookie
title: Filtre - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtre: secure_logged_in_cookie

Filtra si la cookie de fitxat (logged in cookie) ha de ser enviada només per HTTPS.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Si la cookie de fitxat ha de ser enviada només per HTTPS. |
| $user_id | `int` | ID de l'usuari. |
| $secure | `bool` | Si la cookie d'autenticació ha de ser enviada només per HTTPS. |

### Des de

- 3.1.0
### Font

Definida en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) a la línia 91
