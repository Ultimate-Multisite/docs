---
id: secure_logged_in_cookie
title: Pansala - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Nag-filter kung ang cookie sa naka-login ipadala lang ba pinaagi sa HTTPS.

## Mga Parameter {#parameters}

| Ngalan | Uri | Deskripsyon |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Kung ang cookie sa naka-login ipadala lang ba pinaagi sa HTTPS. |
| $user_id | `int` | ID sa tiggamit. |
| $secure | `bool` | Kung ang auth cookie ipadala lang ba pinaagi sa HTTPS. |

### Sukad {#since}

- 3.1.0
### Tinubdan {#source}

Gihubit sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) sa linya 91
