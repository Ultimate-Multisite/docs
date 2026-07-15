---
id: secure_auth_cookie
title: Filtru - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtru: secure_auth_cookie

Jiffiltra jekk il-cookie tal-auth għandhiex tintbagħat biss fuq HTTPS.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $secure | `bool` | Jekk il-cookie għandhiex tintbagħat biss fuq HTTPS. |
| $user_id | `int` | ID tal-utent. |

### Minn {#since}

- 3.1.0
### Sors {#source}

Definit f’[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) fil-linja 80
