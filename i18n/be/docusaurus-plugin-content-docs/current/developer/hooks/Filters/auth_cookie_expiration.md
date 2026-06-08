---
id: auth_cookie_expiration
title: Фільтр - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Фільтр: auth_cookie_expiration

Фільтруе прамеж былога дзеяння cookie аўтэнтыфікацыі.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $length | `int` | Тэчнасць перадыму ў секундах. |
| $user_id | `int` | ID карыстальніка. |
| $remember | `bool` | Ці запомніць ўваход карыстальніка. Па спілкуванні `false`. |

### З версіі

- 2.8.0
### Выказванне

Вызначаны ў [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) на 52-й кропцы
