---
id: wu_maybe_create_customer
title: Дія - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Дозволяє розробникам плагінів виконувати додаткові дії, коли створюється клієнт.

Тут ми додаємо хуки для додавання клієнта-користувача до основного сайту, наприклад.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Клієнт, який, можливо, було створено. |
| $checkout | `\Checkout` | Поточний клас оформлення замовлення. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) на рядку 1156
