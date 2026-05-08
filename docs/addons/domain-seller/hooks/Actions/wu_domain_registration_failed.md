---
id: wu_domain_registration_failed
title: "Action - wu_domain_registration_failed"
sidebar_label: "wu_domain_registration_failed"
---

# Action: wu_domain_registration_failed

Fires after a domain registration attempt fails.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | The payment that triggered registration. |
| $registration_data | `array&lt;string,mixed&gt;` | Registration metadata including status=failed and error_message. |
| $error_message | `string` | Human-readable error message from the registrar. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) at line 1250

