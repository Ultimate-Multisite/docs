---
id: auth_cookie_expiration
title: Филтър - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Филтрира продължителността на периода на изтичане на cookie за автентификация.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Продължителност на периода на изтичане в секунди. |
| $user_id | `int` | ID на потребителя. |
| $remember | `bool` | Дали да се запамети входът на потребителя. По подразбиране е false. |

### От {#since}

- 2.8.0
### Източник {#source}

Дефиниран в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) на линия 52
