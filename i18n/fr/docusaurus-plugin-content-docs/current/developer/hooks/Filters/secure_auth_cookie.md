---
id: secure_auth_cookie
title: Filtre - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Filtre indiquant si le cookie d'authentification doit être envoyé uniquement via HTTPS.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Si le cookie doit être envoyé uniquement via HTTPS. |
| $user_id | `int` | ID utilisateur. |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) at line 80
