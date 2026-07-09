---
id: secure_auth_cookie
title: Filtrs - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtrs: secure_auth_cookie

Filtrē, vai autentifikācijas sīkfailu drīkst sūtīt tikai caur HTTPS.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $secure | `bool` | Vai sīkfailu drīkst sūtīt tikai caur HTTPS. |
| $user_id | `int` | Lietotāja ID. |

### Kopš

- 3.1.0
### Avots

Definēts [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) 80. rindā
