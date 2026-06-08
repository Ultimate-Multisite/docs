---
id: wu_username_from_email
title: Фільтр - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Фільтр: wu_username_from_email

Фільтрує ім'я нового користувача (клієнта).

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $username | `string` | Ім'я користувача клієнта. |
| $email | `string` | Електронна адреса нового клієнта. |
| $new_user_args | `array` | Масив аргументів для нового користувача, може включати ім'я та прізвище. |
| $suffix | `string` | Рядок, який додається до імені користувача, щоб зробити його унікальним. |

### Починаючи з

- 2.0.0
### Джерело

Визначено в [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) на рядку 516
