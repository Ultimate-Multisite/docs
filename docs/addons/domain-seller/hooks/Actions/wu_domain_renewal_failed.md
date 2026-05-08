---
id: wu_domain_renewal_failed
title: "Action - wu_domain_renewal_failed"
sidebar_label: "wu_domain_renewal_failed"
---

# Action: wu_domain_renewal_failed

Fires after a domain renewal attempt fails.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment that triggered renewal. |
| $renewal_data | `array&lt;string,mixed&gt;` | Renewal metadata (domain_name, years, etc.). |
| $error_message | `string` | Human-readable error message from the registrar. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) at line 630

