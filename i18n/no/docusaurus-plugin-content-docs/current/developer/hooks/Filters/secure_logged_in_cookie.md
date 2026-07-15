---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Bestemmer om den innloggede cookien kun skal sendes over HTTPS.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Om den innloggede cookien kun skal sendes over HTTPS. |
| $user_id | `int` | Bruker-ID. |
| $secure | `bool` | Om autentiseringscookien kun skal sendes over HTTPS. |

### Siden {#since}

- 3.1.0
### Kilde {#source}

Definert i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) på linje 91
