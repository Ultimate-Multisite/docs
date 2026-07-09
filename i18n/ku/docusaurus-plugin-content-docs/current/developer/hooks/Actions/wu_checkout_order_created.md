---
id: wu_checkout_order_created
title: Çalakî - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Kiryar: wu_checkout_order_created

Piştî ku checkout order bi tevahî were amadekirin dixebite.

Addons dikarin vê bikar bînin da ku ji bo hilberên bi billing cycles serbixwe membershipên duyemîn biafirînin.

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Tiştê sepet/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Mişterî. |
| $membership | `\WP_Ultimo\Models\Membership` | Membershipa sereke. |
| $payment | `\WP_Ultimo\Models\Payment` | Payment. |

### Ji

- 2.5.0
### Çavkanî

Di rêza 891 de di [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) hate pênasekirin
