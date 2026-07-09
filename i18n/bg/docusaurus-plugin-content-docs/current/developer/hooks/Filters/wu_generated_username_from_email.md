---
id: wu_generated_username_from_email
title: Филтър - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email {#filter-wugeneratedusernamefromemail}

Филтър за генериране на потребителско име на клиента.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | Генерирано потребителско име. |
| $email | `string` | Нова електронна поща на клиента. |
| $new_user_args | `array` | Масив с аргументи за новия потребител, може да включва и първо и последно име. |
| $suffix | `string` | Текст, който се добавя към потребителското име, за да го направи уникално. |

### Since {#since}

- 3.7.0
### Source {#source}

Дефиниран в [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) на линия 488
