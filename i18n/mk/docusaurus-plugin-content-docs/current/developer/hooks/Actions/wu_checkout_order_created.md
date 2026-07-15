---
id: wu_checkout_order_created
title: Дејство - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Се активира откако нарачката за checkout е целосно составена.

Додатоците може да го користат ова за да создадат секундарни членства за производи со независни циклуси на наплата.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Објектот на кошничката/нарачката. |
| $customer | `\WP_Ultimo\Models\Customer` | Клиентот. |
| $membership | `\WP_Ultimo\Models\Membership` | Примарното членство. |
| $payment | `\WP_Ultimo\Models\Payment` | Плаќањето. |

### Од верзија {#since}

- 2.5.0
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) на линија 891
