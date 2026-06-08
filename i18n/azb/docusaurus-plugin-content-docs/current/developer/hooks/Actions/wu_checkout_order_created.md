---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Bu, ödeme siparişi tamamen oluşturulduktan sonra tetiklenir.

Eklentiler, bağımsız faturalandırma döngülerine sahip ürünler için ikincil üyelikler oluşturmak amacıyla bunu kullanabilir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Sepet/sipariş nesnesi. |
| $customer | `\WP_Ultimo\Models\Customer` | Müşteri bilgileri. |
| $membership | `\WP_Ultimo\Models\Membership` | Birincil üyelik. |
| $payment | `\WP_Ultimo\Models\Payment` | Ödeme bilgileri. |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
