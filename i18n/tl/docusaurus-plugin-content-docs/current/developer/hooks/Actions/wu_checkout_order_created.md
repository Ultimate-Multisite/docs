---
id: wu_checkout_order_created
title: Aksyon - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Tumatakbo matapos ganap na mabuo ang order sa checkout.

Magagamit ito ng mga addon para gumawa ng mga pangalawang membership para sa mga produkto na may mga hiwalay na billing cycle.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ang object ng cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang customer. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang pangunahing membership. |
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment. |

### Mula Noong

- 2.5.0
### Pinagmulan

Tinukoy sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) sa linya 891
