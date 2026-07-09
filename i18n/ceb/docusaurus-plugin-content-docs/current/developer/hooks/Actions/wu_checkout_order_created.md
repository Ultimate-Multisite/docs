---
id: wu_checkout_order_created
title: Aksyon - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Moandar human ang order sa checkout hingpit nga natigom.

Ang mga addon makagamit niini aron mohimo og sekundaryong mga membership alang sa mga produkto nga adunay independente nga mga siklo sa billing.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ang object sa cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang customer. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang pangunang membership. |
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment. |

### Sukad

- 2.5.0
### Tinubdan

Gidepina sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) sa linya 891
