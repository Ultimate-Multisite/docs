---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Filtreerib autentimisküpsise aegumisperioodi kestust.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $length | `int` | Duration of the expiration period in seconds. |
| $user_id | `int` | User ID. |
| $remember | `bool` | Whether to remember the user login. Default false. |

### Alates {#since}

- 2.8.0
### Allikas {#source}

Määratletud failis [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) real 52
