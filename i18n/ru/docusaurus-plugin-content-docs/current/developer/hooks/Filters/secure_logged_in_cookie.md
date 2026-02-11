---
id: secure_logged_in_cookie
title: Фильтр - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Фильтр: secure_logged_in_cookie

Определяет, должен ли cookie входа отправляться только по HTTPS.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Должен ли cookie входа отправляться только по HTTPS. |
| $user_id | `int` | Идентификатор пользователя. |
| $secure | `bool` | Должен ли auth cookie отправляться только по HTTPS. |

### С версии

- 3.1.0

### Источник

Определено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) на строке 91
