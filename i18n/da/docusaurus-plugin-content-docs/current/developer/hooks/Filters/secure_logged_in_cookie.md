---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Filtrerer, om login-cookien kun skal sendes over HTTPS.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Om login-cookien kun skal sendes over HTTPS. |
| $user_id | `int` | Bruger-ID. |
| $secure | `bool` | Om auth-cookien kun skal sendes over HTTPS. |

### Siden

- 3.1.0
### Kilde

Defineret i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) på linje 91
