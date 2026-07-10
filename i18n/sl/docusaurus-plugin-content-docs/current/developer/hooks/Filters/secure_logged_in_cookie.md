---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

Filtrira, ali naj se piškotek za prijavljenega uporabnika pošilja samo prek HTTPS.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Ali naj se piškotek za prijavljenega uporabnika pošilja samo prek HTTPS. |
| $user_id | `int` | ID uporabnika. |
| $secure | `bool` | Ali naj se piškotek za avtentikacijo pošilja samo prek HTTPS. |

### Od različice {#since}

- 3.1.0
### Vir {#source}

Določeno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) v vrstici 91
