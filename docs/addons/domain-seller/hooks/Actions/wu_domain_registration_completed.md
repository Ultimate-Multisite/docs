---
id: wu_domain_registration_completed
title: "Action - wu_domain_registration_completed"
sidebar_label: "wu_domain_registration_completed"
---

# Action: wu_domain_registration_completed

Fires after a domain has been successfully registered.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment that triggered registration. |
| $registration_data | `array&lt;string,mixed&gt;` | Registration metadata (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Raw result array returned by the registrar. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204

