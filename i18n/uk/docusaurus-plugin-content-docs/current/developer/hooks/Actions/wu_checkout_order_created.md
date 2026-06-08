---
id: wu_checkout_order_created
title: Дія - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Виконується після повної збірки замовлення на касі.

Додатки можуть використовувати це для створення вторинних членств для продуктів з незалежними циклами виставлення рахунків.

## Параметри

| Назва | Тип | Опис |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Об'єкт кошика/замовлення. |
| $customer | `\WP_Ultimo\Models\Customer` | Клієнт. |
| $membership | `\WP_Ultimo\Models\Membership` | Основне членство. |
| $payment | `\WP_Ultimo\Models\Payment` | Оплата. |

### Починаючи з

- 2.5.0
### Джерело

Визначено в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) на рядку 891
