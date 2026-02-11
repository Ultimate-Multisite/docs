---
id: wu_handle_user_meta_fields
title: Действие - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Действие: wu_handle_user_meta_fields

Позволяет разработчикам плагинов сохранять пользовательские метаданные различными способами, если им это необходимо.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $meta_repository | `array` | Список мета-полей, структурированный как ключ => значение. |
| $user | `\WP_User` | Объект пользователя WordPress. |
| $customer | `\Customer` | Объект клиента Ultimate Multisite. |
| $checkout | `\Checkout` | Класс оформления заказа. |

### С версии

- 2.0.4

### Источник

Определено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) на строке 1244
