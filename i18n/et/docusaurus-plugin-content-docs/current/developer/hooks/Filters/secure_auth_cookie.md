---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Filtreerib, kas auth-küpsist tuleks saata ainult HTTPS-i kaudu.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $secure | `bool` | Kas küpsist tuleks saata ainult HTTPS-i kaudu. |
| $user_id | `int` | Kasutaja ID. |

### Alates {#since}

- 3.1.0
### Allikas {#source}

Määratletud failis [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) real 80
