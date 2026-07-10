---
id: set_auth_cookie
title: Действие - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Изпълнява се непосредствено преди да бъде зададен cookie за автентикация.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $auth_cookie | `string` | Стойност на cookie за автентикация. |
| $expire | `int` | Времето, когато изградното време за вход изтича, като UNIX timestamp. По подразбиране е 12 часа след изтичането на cookie-то. |
| $expiration | `int` | Времето, когато cookie-то за автентикация изтича, като UNIX timestamp. По подразбиране е след 14 дни. |
| $user_id | `int` | ID на потребителя. |
| $scheme | `string` | Схема за автентикация. Стойностите включват 'auth' или 'secure_auth'. |
| $token | `string` | Сесионен токен на потребителя, който трябва да се използва за този cookie. |

### От {#since}

- 2.5.0
- 4.9.0: Параметърът <code>$token</code> беше добавен.
### Източник {#source}

Дефиниран в [inc/sso/auth-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) на линия 124.
