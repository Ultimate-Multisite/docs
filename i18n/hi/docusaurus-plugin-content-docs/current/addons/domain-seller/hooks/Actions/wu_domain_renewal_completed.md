---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

यह एक्शन तब ट्रिगर होता है जब कोई डोमेन सफलतापूर्वक नवीनीकृत (renew) हो जाता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | वह पेमेंट जिसने नवीनीकरण को ट्रिगर किया। |
| $renewal_data | `array&lt;string,mixed&gt;` | नवीनीकरण का मेटाडेटा (जैसे domain_name, years, customer_id, आदि)। |
| $result | `array&lt;string,mixed&gt;` | रजिस्ट्रार द्वारा लौटाया गया कच्चा परिणाम ऐरे, जिसमें नया expiry_date शामिल होता है। |

### Since

- 2.0.0
### Source

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) में लाइन 594 पर परिभाषित।
