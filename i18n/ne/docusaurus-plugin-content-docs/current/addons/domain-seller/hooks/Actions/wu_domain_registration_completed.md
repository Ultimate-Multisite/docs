---
id: wu_domain_registration_completed
title: कार्य - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

डोमेन सफलतापूर्वक दर्ता भएपछि चल्छ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | दर्ता ट्रिगर गर्ने भुक्तानी। |
| $registration_data | `array&lt;string,mixed&gt;` | दर्ता मेटाडेटा (domain_name, provider_id, years, expiry_date, आदि)। |
| $result | `array&lt;string,mixed&gt;` | रजिस्ट्रारद्वारा फर्काइएको कच्चा परिणाम array। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) मा लाइन 1204 मा परिभाषित।
