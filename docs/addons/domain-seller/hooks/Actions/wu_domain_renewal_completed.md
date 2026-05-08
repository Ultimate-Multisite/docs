---
id: wu_domain_renewal_completed
title: "Action - wu_domain_renewal_completed"
sidebar_label: "wu_domain_renewal_completed"
---

# Action: wu_domain_renewal_completed

Fires after a domain has been successfully renewed.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment that triggered renewal. |
| $renewal_data | `array&lt;string,mixed&gt;` | Renewal metadata (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Raw result array returned by the registrar including new expiry_date. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) at line 594

