---
id: secure_auth_cookie
title: Фильтр - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Фильтр: secure_auth_cookie

Фильтрует, должен ли auth cookie отправляться только через HTTPS.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $secure | `bool` | Должен ли cookie отправляться только через HTTPS. |
| $user_id | `int` | Идентификатор пользователя. |

### С версии

- 3.1.0

### Источник

Определено в `inc/sso/auth-functions.php` на строке 80 (см. [репозиторий](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80)).
