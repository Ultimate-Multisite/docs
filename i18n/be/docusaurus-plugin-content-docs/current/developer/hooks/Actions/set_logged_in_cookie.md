---
id: set_logged_in_cookie
title: Дзейніванне - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Дзеяванне: set_logged_in_cookie

Выконваецца адразу папярэднікам вызначэння cookie аўтэнтыфікацыі ўвайшога карыстальніка.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Значэнне cookie ўвайшога карыстальніка. |
| $expire | `int` | Час, калі праходны перыяд ўвайшога ўліку спыняецца ў выглядзе UNIX-маркі. Па спілкуванні гэта 12 гадзін пасля спынення cookie. |
| $expiration | `int` | Час, калі cookie аўтэнтыфікацыі ўвайшога карыстальніка спыняецца ў выглядзе UNIX-маркі. Па спілкуванні гэта 14 дзён ад цяперашніга. |
| $user_id | `int` | ID карыстальніка. |
| $scheme | `string` | Схема аўтэнтыфікацыі. Па спілкуванні 'logged_in'. |
| $token | `string` | Токен сесіі карыстальніка, які спадарыцца для гэтага cookie. |

### З

- 2.6.0
- 4.9.0: Быў дададзены параметр <code>$token</code>.
### Выкідзенне

Вызначана ў [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) на 141-й парэдзе.
