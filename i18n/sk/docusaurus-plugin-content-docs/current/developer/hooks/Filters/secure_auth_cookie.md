---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Filtruje, či sa má auth cookie odosielať iba cez HTTPS.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Či sa má cookie odosielať iba cez HTTPS. |
| $user_id | `int` | ID používateľa. |

### Od verzie {#since}

- 3.1.0
### Zdroj {#source}

Definované v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) na riadku 80
