---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

Filtreerib, kas sisselogimise küpsis tuleks saata ainult HTTPS-i kaudu.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Kas sisselogimise küpsis tuleks saata ainult HTTPS-i kaudu. |
| $user_id | `int` | Kasutaja ID. |
| $secure | `bool` | Kas autentimisküpsis tuleks saata ainult HTTPS-i kaudu. |

### Alates {#since}

- 3.1.0
### Allikas {#source}

Määratletud failis [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) real 91
