---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Filtrerer, om auth cookie kun skal sendes over HTTPS.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $secure | `bool` | Om cookie kun skal sendes over HTTPS. |
| $user_id | `int` | Bruger-ID. |

### Siden {#since}

- 3.1.0
### Kilde {#source}

Defineret i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) på linje 80
