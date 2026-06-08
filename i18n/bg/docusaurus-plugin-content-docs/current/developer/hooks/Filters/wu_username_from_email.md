---
id: wu_username_from_email
title: Филтър - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

Филтрира потребителското име на новия клиент.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | Потребителско име на клиента. |
| $email | `string` | Имейл адрес на новия клиент. |
| $new_user_args | `array` | Масив с аргументи за новия потребител, може да включва и първо и последно име. |
| $suffix | `string` | Низа, която се добавя към потребителското име, за да го направи уникално. |

### От версия

- 2.0.0
### Източник

Дефиниран в [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) на линия 516
