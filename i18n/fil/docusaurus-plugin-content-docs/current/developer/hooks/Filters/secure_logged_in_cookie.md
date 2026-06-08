---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Kinokontrol nito kung ang cookie ng naka-log in ay dapat ipadala lamang sa pamamagitan ng HTTPS.

## Mga Parameter

| Name | Type | Deskripsyon |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Kung ang cookie ng naka-log in ay dapat ipadala lamang sa pamamagitan ng HTTPS. |
| $user_id | `int` | User ID. |
| $secure | `bool` | Kung ang auth cookie ay dapat ipadala lamang sa pamamagitan ng HTTPS. |

### Mula pa noong

- 3.1.0
### Pinagmulan

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) sa linya 91
