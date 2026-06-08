---
id: secure_logged_in_cookie
title: Филтър - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Филтър: secure_logged_in_cookie

Филтрира дали кукито за вход трябва да се изпраща само през HTTPS.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Дали кукито за вход трябва да се изпраща само през HTTPS. |
| $user_id | `int` | ID на потребителя. |
| $secure | `bool` | Дали кукито за автентикация трябва да се изпраща само през HTTPS. |

### От версия

- 3.1.0
### Източник

Дефиниран в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) на линия 91
