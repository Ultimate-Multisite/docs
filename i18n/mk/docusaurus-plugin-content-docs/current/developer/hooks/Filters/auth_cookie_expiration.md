---
id: auth_cookie_expiration
title: Филтер - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Го филтрира траењето на периодот на истекување на колачето за автентикација.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $length | `int` | Траење на периодот на истекување во секунди. |
| $user_id | `int` | ID на корисник. |
| $remember | `bool` | Дали да се запомни најавувањето на корисникот. Стандардно false. |

### Од верзија {#since}

- 2.8.0
### Извор {#source}

Дефинирано во [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) на линија 52
