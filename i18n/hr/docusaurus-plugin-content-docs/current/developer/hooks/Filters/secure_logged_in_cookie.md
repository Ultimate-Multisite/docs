---
id: secure_logged_in_cookie
title: Filtar - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtar: secure_logged_in_cookie {#filter-secureloggedincookie}

Filtrira treba li se kolačić prijavljenog korisnika slati samo putem HTTPS-a.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Treba li se kolačić prijavljenog korisnika slati samo putem HTTPS-a. |
| $user_id | `int` | ID korisnika. |
| $secure | `bool` | Treba li se autentikacijski kolačić slati samo putem HTTPS-a. |

### Od {#since}

- 3.1.0
### Izvor {#source}

Definirano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) u retku 91
