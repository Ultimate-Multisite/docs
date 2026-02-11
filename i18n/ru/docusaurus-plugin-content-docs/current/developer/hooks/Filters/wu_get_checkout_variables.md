---
id: wu_get_checkout_variables
title: Фильтр - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Фильтр: wu_get_checkout_variables

Позволяет разработчикам плагинов фильтровать предустановки страницы оформления заказа.

Будьте осторожны, отсутствие ключей может полностью сломать оформление заказа на стороне клиента.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $variables | `array` | Локализованные переменные. |
| $checkout | `\Checkout` | Класс оформления заказа. |

### С версии

- 2.0.0
### Источник

Определено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) на строке 1970

## Возвращает
Новый массив переменных.
