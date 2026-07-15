---
id: wu_get_checkout_variables
title: Фільтр - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Фільтр: wu_get_checkout_variables

Дозволяє розробникам плагінів фільтрувати попередньо встановлені змінні сторінки оформлення замовлення.

Будьте обережні: відсутність ключів може повністю зламати оформлення замовлення на фронтенді.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Локалізовані змінні. |
| $checkout | `\Checkout` | Клас оформлення замовлення. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) на рядку 1970


## Returns {#returns}
Новий масив змінних.
