---
id: wu_domain_registration_failed
title: Chochita - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Imayambitsidwa pambuyo poti kuyesa kolembetsa domain kulephera.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipiro omwe anayambitsa kulembetsa. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ya kulembetsa kuphatikizapo status=failed ndi error_message. |
| $error_message | `string` | Uthenga wolakwika wowerengeka ndi munthu kuchokera kwa registrar. |

### Kuyambira

- 2.0.0
### Source

Yatanthauzidwa mu [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) pa mzere 1250
