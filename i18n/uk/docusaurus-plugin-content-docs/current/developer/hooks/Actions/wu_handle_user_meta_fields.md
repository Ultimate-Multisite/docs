---
id: wu_handle_user_meta_fields
title: Дія - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Дозволяє розробникам плагінів зберігати метадані користувача різними способами, якщо це необхідно.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Список метаполів, структурований як ключ => значення. |
| $user | `\WP_User` | Об'єкт користувача WordPress. |
| $customer | `\Customer` | Об'єкт клієнта Ultimate Multisite. |
| $checkout | `\Checkout` | Клас оформлення замовлення. |

### Since {#since}

- 2.0.4
### Source {#source}

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) на рядку 1244
