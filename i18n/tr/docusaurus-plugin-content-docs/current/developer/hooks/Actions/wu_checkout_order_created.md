---
id: wu_checkout_order_created
title: Eylem - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Ödeme (checkout) siparişi tamamen oluşturulduktan sonra tetiklenir.

Eklentiler, bağımsız faturalandırma döngülerine sahip ürünler için ikincil üyelikler oluşturmak amacıyla bunu kullanabilir.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Sepet/sipariş nesnesi. |
| $customer | `\WP_Ultimo\Models\Customer` | Müşteri. |
| $membership | `\WP_Ultimo\Models\Membership` | Birincil üyelik. |
| $payment | `\WP_Ultimo\Models\Payment` | Ödeme. |

### Ne Zaman {#since}

- 2.5.0
### Kaynak {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
