---
id: secure_logged_in_cookie
title: Tacewa - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Yana tace ko cookie na wanda ya shiga ya kamata a aika shi ta HTTPS kawai.

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Ko cookie na wanda ya shiga ya kamata a aika shi ta HTTPS kawai. |
| $user_id | `int` | ID na mai amfani. |
| $secure | `bool` | Ko auth cookie ya kamata a aika shi ta HTTPS kawai. |

### Tun daga

- 3.1.0
### Tushe

An ayyana shi a cikin [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) a layi 91
