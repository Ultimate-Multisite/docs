---
id: wu_domain_registration_failed
title: कार्य - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# कार्य: wu_domain_registration_failed

डोमेन दर्ता प्रयास असफल भएपछि चल्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | दर्ता ट्रिगर गर्ने भुक्तानी। |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed र error_message समावेश गर्ने दर्ता मेटाडेटा। |
| $error_message | `string` | रजिस्ट्रारबाट आएको मानव-पठनीय त्रुटि सन्देश। |

### देखि

- 2.0.0
### स्रोत

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) मा लाइन 1250 मा परिभाषित गरिएको छ।
