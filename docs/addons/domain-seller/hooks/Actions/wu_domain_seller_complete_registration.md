---
id: wu_domain_seller_complete_registration
title: "Action - wu_domain_seller_complete_registration"
sidebar_label: "wu_domain_seller_complete_registration"
---

# Action: wu_domain_seller_complete_registration

Fires when a payment transitions to a status that should trigger domain registration.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment object. |
| $old_status | `string` | The previous payment status before the transition. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266

