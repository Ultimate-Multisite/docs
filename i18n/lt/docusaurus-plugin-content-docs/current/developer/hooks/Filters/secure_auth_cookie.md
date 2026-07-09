---
id: secure_auth_cookie
title: Filtras - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtras: secure_auth_cookie {#filter-secureauthcookie}

Filtruoja, ar auth slapukas turėtų būti siunčiamas tik per HTTPS.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Ar slapukas turėtų būti siunčiamas tik per HTTPS. |
| $user_id | `int` | Vartotojo ID. |

### Nuo {#since}

- 3.1.0
### Šaltinis {#source}

Apibrėžta [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) 80 eilutėje
