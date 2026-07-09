---
id: wu_generated_username_from_email
title: Филтер - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Филтрирај генерисано корисничко име купца.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $username | `string` | Генерисано корисничко име. |
| $email | `string` | Email адреса новог купца. |
| $new_user_args | `array` | Низ аргумената новог корисника, можда укључујући име и презиме. |
| $suffix | `string` | Ниска која се додаје корисничком имену да би било јединствено. |

### Од верзије

- 3.7.0
### Извор

Дефинисано у [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) у линији 488
