---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

డొమైన్ రిజిస్ట్రేషన్ ప్రయత్నం విఫలమైన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | రిజిస్ట్రేషన్‌ను ప్రేరేపించిన పేమెంట్ వివరాలు. |
| $registration_data | `array&lt;string,mixed&gt;` | స్టేటస్=failed మరియు error_message తో సహా రిజిస్ట్రేషన్ మెటాడేటా. |
| $error_message | `string` | రిజిస్ట్రార్ నుండి వచ్చిన మనిషికి అర్థమయ్యే ఎర్రర్ మెసేజ్. |

### Since

- 2.0.0
### Source

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) లోని 1250వ లైన్‌లో నిర్వచించబడింది.
