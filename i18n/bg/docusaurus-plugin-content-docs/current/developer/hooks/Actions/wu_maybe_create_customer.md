---
id: wu_maybe_create_customer
title: Действие - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Позволява на разработчиците на плагини да направят допълнителни неща, когато клиентът бъде добавен.

Например, тук добавяме хуковете за добавяне на потребителя на клиента към основния сайт.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Клиентът, който може да е бил създаден. |
| $checkout | `\Checkout` | Текущ клас за процеса на плащане. |

### От версия

- 2.0.0
### Източник

Дефиниран в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) на линия 1156
