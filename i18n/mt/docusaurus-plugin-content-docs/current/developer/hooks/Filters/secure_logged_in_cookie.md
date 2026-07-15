---
id: secure_logged_in_cookie
title: Filtru - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtru: secure_logged_in_cookie

Jiffiltra jekk il-cookie tal-utent li jkun logged in għandhiex tintbagħat biss fuq HTTPS.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Jekk il-cookie tal-utent li jkun logged in għandhiex tintbagħat biss fuq HTTPS. |
| $user_id | `int` | ID tal-utent. |
| $secure | `bool` | Jekk il-cookie tal-awtentikazzjoni għandhiex tintbagħat biss fuq HTTPS. |

### Minn {#since}

- 3.1.0
### Sors {#source}

Iddefinit f’[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) fil-linja 91
