---
id: wu_checkout_order_created
title: Действие - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Действие: wu_checkout_order_created

Срабатывает после полной сборки заказа.

Дополнения могут использовать это для создания вторичных членств для продуктов с независимыми циклами выставления счетов.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Объект корзины/заказа. |
| $customer | `\WP_Ultimo\Models\Customer` | Клиент. |
| $membership | `\WP_Ultimo\Models\Membership` | Основное членство. |
| $payment | `\WP_Ultimo\Models\Payment` | Платёж. |

### С версии

- 2.5.0

### Источник

Определено в `inc/checkout/class-checkout.php` на строке 891
