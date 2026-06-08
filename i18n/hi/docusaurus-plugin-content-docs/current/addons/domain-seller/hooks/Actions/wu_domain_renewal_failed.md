---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

जब डोमेन नवीनीकरण का प्रयास विफल हो जाता है, तो यह ट्रिगर होता है।

## पैरामीटर्स

| Name | Type | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | वह भुगतान जिसने नवीनीकरण को ट्रिगर किया था। |
| $renewal_data | `array&lt;string,mixed&gt;` | नवीनीकरण का मेटाडेटा (जैसे domain_name, years, आदि)। |
| $error_message | `string` | रजिस्ट्रार द्वारा दिया गया इंसान के पढ़ने योग्य त्रुटि संदेश। |

### कब से उपलब्ध

- 2.0.0
### स्रोत

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) में लाइन 630 पर परिभाषित।
