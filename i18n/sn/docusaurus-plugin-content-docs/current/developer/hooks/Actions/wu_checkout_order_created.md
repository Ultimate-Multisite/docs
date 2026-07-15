---
id: wu_checkout_order_created
title: Chiito - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Inotanga mushure mekunge order ye checkout yagadzirwa zvizere.

Addons dzinogona kushandisa izvi kugadzira memberships dzechipiri dzezvigadzirwa zvine billing cycles dzakazvimirira.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Chinhu che cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Mutengi. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership huru. |
| $payment | `\WP_Ultimo\Models\Payment` | Payment. |

### Kubva {#since}

- 2.5.0
### Source {#source}

Yakatsanangurwa mu [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) pamutsara 891
