---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Дозволяє розробникам підключити додаткові хуки.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $checkout | `\Checkout` | Екземпляр об'єкта оформлення замовлення. |
| $cart | `\Cart` | Екземпляр кошика оформлення замовлення. |

### Починаючи з {#since}

- 2.0.9
### Джерело {#source}

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) на рядку 1013
