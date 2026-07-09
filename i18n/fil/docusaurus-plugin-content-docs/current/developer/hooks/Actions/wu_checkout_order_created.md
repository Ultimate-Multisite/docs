---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Ito ay tumatakbo (fires) pagkatapos makumpleto nang buo ang order sa checkout.

Pwede gamitin ito ng mga Addon para gumawa ng secondary memberships para sa mga produkto na may sariling billing cycles.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ang object ng cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang customer. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang pangunahing membership. |
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment. |

### Since {#since}

- 2.5.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
