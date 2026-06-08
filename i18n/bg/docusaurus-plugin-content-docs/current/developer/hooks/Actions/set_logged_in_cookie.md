---
id: set_logged_in_cookie
title: Действие - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Изпълнява се непосредствено преди да бъде зададена cookie за автентикация на потребителя, който е влезъл.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $logged_in_cookie | `string` | Стойността на cookie за потребител, който е влезъл. |
| $expire | `int` | Времето, когато изградното време за вход изтича, като UNIX timestamp. По подразбиране е 12 часа след изтичането на cookie-то. |
| $expiration | `int` | Времето, когато cookie за автентикация на потребителя изтича, като UNIX timestamp. По подразбиране е след 14 дни. |
| $user_id | `int` | ID на потребителя. |
| $scheme | `string` | Схема за автентикация. По подразбиране е 'logged_in'. |
| $token | `string` | Токенът на сесията на потребителя, който трябва да се използва за тази cookie. |

### От версия

- 2.6.0
- 4.9.0: Параметърът <code>$token</code> беше добавен.
### Източник

Дефиниран в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) на линия 141
