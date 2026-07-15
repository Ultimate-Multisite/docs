---
id: wu_handle_user_meta_fields
title: Действие - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Позволява на разработчиците на плагини да запазват мета данни на потребителите по различни начини, ако е необходимо.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $meta_repository | `array` | Списък от мета полета, структуриран като ключ => стойност. |
| $user | `\WP_User` | Обектът на потребителя на WordPress. |
| $customer | `\Customer` | Обектът на клиента на Ultimate Multisite. |
| $checkout | `\Checkout` | Класът за процеса на плащане. |

### От {#since}

- 2.0.4
### Източник {#source}

Дефиниран в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) на линия 1244
