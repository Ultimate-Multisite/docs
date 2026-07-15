---
id: auth_cookie_expiration
title: Filtras - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtras: auth_cookie_expiration

Filtruoja autentifikavimo slapuko galiojimo laikotarpio trukmę.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Galiojimo laikotarpio trukmė sekundėmis. |
| $user_id | `int` | Naudotojo ID. |
| $remember | `bool` | Ar įsiminti naudotojo prisijungimą. Numatytoji reikšmė false. |

### Nuo {#since}

- 2.8.0
### Šaltinis {#source}

Apibrėžta faile [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52), 52 eilutėje
