---
id: auth_cookie_expiration
title: Чыпка - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Чыпка: auth_cookie_expiration

Аутентификация cookie мөөнөтүнүн аяктоо мезгилинин узактыгын чыпкалайт.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $length | `int` | Мөөнөт аяктоо мезгилинин секунд менен узактыгы. |
| $user_id | `int` | Колдонуучунун ID'си. |
| $remember | `bool` | Колдонуучунун кирүүсүн эстеп калуу керекпи. Демейкиси false. |

### Качандан бери

- 2.8.0
### Булак

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ичинде 52-сапта аныкталган
