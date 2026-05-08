---
id: wu_domain_seller_process_purchase
title: "Action - wu_domain_seller_process_purchase"
sidebar_label: "wu_domain_seller_process_purchase"
---

# Action: wu_domain_seller_process_purchase

Fires when a domain purchase is being processed after checkout completion.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment object. |
| $checkout_data | `array&lt;string,mixed&gt;` | Full checkout data from the signup form. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) at line 246

