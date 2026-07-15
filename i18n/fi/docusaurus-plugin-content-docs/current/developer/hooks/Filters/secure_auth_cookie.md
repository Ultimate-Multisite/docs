---
id: secure_auth_cookie
title: Suodatin - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Suodattaa, tuleeko auth cookie lähettää vain HTTPS:n kautta.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $secure | `bool` | Tuleeko cookie lähettää vain HTTPS:n kautta. |
| $user_id | `int` | Käyttäjän ID. |

### Alkaen {#since}

- 3.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) rivillä 80
