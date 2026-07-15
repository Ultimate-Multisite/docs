---
id: wu_checkout_order_created
title: Действие - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Изпуска се, когато поръчката от касата е напълно събрана.

Допълнителните модули могат да използват това, за да създадат втори членство за продукти, които имат собствени цикли на начисляване.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Обектът на количката/поръчката. |
| $customer | `\WP_Ultimo\Models\Customer` | Клиентът. |
| $membership | `\WP_Ultimo\Models\Membership` | Основното членство. |
| $payment | `\WP_Ultimo\Models\Payment` | Платежът. |

### Since {#since}

- 2.5.0
### Source {#source}

Дефиниран в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) на ред 891
