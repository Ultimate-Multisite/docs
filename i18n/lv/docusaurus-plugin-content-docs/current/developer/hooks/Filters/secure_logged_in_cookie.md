---
id: secure_logged_in_cookie
title: Filtrs - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtrs: secure_logged_in_cookie

Filtrē, vai pieteikšanās sīkfails jānosūta tikai caur HTTPS.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Vai pieteikšanās sīkfails jānosūta tikai caur HTTPS. |
| $user_id | `int` | Lietotāja ID. |
| $secure | `bool` | Vai autentifikācijas sīkfails jānosūta tikai caur HTTPS. |

### Kopš {#since}

- 3.1.0
### Avots {#source}

Definēts [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) 91. rindā
