---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Kinokontrol nito kung dapat ipadala lamang ang auth cookie sa pamamagitan ng HTTPS.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $secure | `bool` | Kung dapat ipadala lamang ang cookie sa pamamagitan ng HTTPS. |
| $user_id | `int` | User ID. |

### Mula pa noong {#since}

- 3.1.0
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) sa linya 80
