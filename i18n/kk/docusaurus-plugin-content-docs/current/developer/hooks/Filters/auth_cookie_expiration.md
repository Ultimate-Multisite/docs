---
id: auth_cookie_expiration
title: Сүзгі - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Аутентификация cookie-інің жарамдылық мерзімі кезеңінің ұзақтығын сүзеді.

## Параметрлер {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Жарамдылық мерзімі кезеңінің ұзақтығы секундпен. |
| $user_id | `int` | Пайдаланушы ID-і. |
| $remember | `bool` | Пайдаланушы кіруін есте сақтау керек пе. Әдепкі мәні false. |

### Бастап {#since}

- 2.8.0
### Дереккөз {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ішінде 52-жолда анықталған
