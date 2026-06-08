---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

जब कोई डोमेन सफलतापूर्वक रजिस्टर हो जाता है, तो यह एक्शन ट्रिगर होता है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | वह पेमेंट जिसने रजिस्ट्रेशन को ट्रिगर किया। |
| $registration_data | `array&lt;string,mixed&gt;` | रजिस्ट्रेशन का मेटाडेटा (जैसे domain_name, provider_id, years, expiry_date, आदि)। |
| $result | `array&lt;string,mixed&gt;` | रजिस्ट्रार द्वारा लौटाया गया कच्चा (raw) परिणाम ऐरे। |

### Since

- 2.0.0
### Source

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) में लाइन 1204 पर परिभाषित किया गया है।
