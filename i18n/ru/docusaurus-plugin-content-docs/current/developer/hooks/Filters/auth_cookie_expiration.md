---
id: auth_cookie_expiration
title: Фильтр - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Фильтр: auth_cookie_expiration

Фильтрует продолжительность периода истечения срока действия cookie аутентификации.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Продолжительность периода истечения срока действия в секундах. |
| $user_id | `int` | ID пользователя. |
| $remember | `bool` | Нужно ли запомнить вход пользователя. По умолчанию false. |

### С версии

- 2.8.0

### Источник

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52
