---
id: auth_cookie_expiration
title: Фільтр - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Фільтр: auth_cookie_expiration {#filter-authcookieexpiration}

Фільтрує тривалість періоду закінчення дії cookie-файлу автентифікації.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Тривалість періоду дії в секундах. |
| $user_id | `int` | ID користувача. |
| $remember | `bool` | Чи потрібно запам'ятовувати вхід користувача. За замовчуванням `false`. |

### Починаючи з {#since}

- 2.8.0
### Джерело {#source}

Визначено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) на рядку 52
