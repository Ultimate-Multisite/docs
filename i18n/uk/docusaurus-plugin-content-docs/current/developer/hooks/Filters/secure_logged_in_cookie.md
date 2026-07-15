---
id: secure_logged_in_cookie
title: Фільтр - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Визначає, чи має cookie авторизації передаватися лише через HTTPS.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Чи має cookie входу в систему передаватися лише через HTTPS. |
| $user_id | `int` | ID користувача. |
| $secure | `bool` | Чи має cookie авторизації передаватися лише через HTTPS. |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
