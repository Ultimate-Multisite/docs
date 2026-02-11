---
id: wu_maybe_create_customer
title: Действие - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Действие: wu_maybe_create_customer

Позволяет разработчикам плагинов выполнять дополнительные действия, когда клиент добавлен.

Вот где мы добавляем хуки для добавления клиента->пользователя на основной сайт, например.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $customer | `\Customer` | Клиент, который, возможно, был создан. |
| $checkout | `\Checkout` | Текущий класс оформления заказа. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) на строке 1156
