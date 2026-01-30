---
id: wu_checkout_order_created
title: "Action - wu_checkout_order_created"
sidebar_label: "wu_checkout_order_created"
---

# Action: wu_checkout_order_created

Fires after the checkout order is fully assembled.

Addons can use this to create secondary memberships for products with independent billing cycles.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | The cart/order object. |
| $customer | `\WP_Ultimo\Models\Customer` | The customer. |
| $membership | `\WP_Ultimo\Models\Membership` | The primary membership. |
| $payment | `\WP_Ultimo\Models\Payment` | The payment. |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891

