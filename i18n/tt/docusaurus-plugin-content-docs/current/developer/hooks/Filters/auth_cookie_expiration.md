---
id: auth_cookie_expiration
title: Фильтр - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Фильтр: auth_cookie_expiration {#filter-authcookieexpiration}

Аутентификация cookie-сының гамәлдән чыгу чоры дәвамлылыгын фильтрлый.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $length | `int` | Гамәлдән чыгу чорының секундлардагы дәвамлылыгы. |
| $user_id | `int` | Кулланучы ID-сы. |
| $remember | `bool` | Кулланучы логинын истә калдырыргамы. Килешү буенча false. |

### Кайчаннан бирле {#since}

- 2.8.0
### Чыганак {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) эчендә, 52 нче юлда билгеләнгән.
