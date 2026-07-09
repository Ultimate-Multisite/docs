---
id: wu_domain_renewal_failed
title: कार्य - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# कार्य: wu_domain_renewal_failed

डोमेन नवीकरण प्रयास असफल भएपछि चल्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | नवीकरण ट्रिगर गर्ने भुक्तानी। |
| $renewal_data | `array&lt;string,mixed&gt;` | नवीकरण मेटाडेटा (domain_name, years, आदि)। |
| $error_message | `string` | रजिस्ट्रारबाट आएको मानवले पढ्न मिल्ने त्रुटि सन्देश। |

### देखि

- 2.0.0
### स्रोत

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) मा लाइन 630 मा परिभाषित गरिएको छ।
