---
id: secure_logged_in_cookie
title: Филтер - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Филтер: secure_logged_in_cookie

Филтрира дали колачето за најавен корисник треба да се испраќа само преку HTTPS.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Дали колачето за најавен корисник треба да се испраќа само преку HTTPS. |
| $user_id | `int` | ID на корисник. |
| $secure | `bool` | Дали колачето за автентикација треба да се испраќа само преку HTTPS. |

### Од верзија

- 3.1.0
### Извор

Дефинирано во [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) на линија 91
