---
id: wu_domain_renewal_completed
title: कार्य - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# कार्य: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

डोमेन सफलतापूर्वक नवीकरण भएपछि चल्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | नवीकरण ट्रिगर गर्ने भुक्तानी। |
| $renewal_data | `array&lt;string,mixed&gt;` | नवीकरण मेटाडेटा (domain_name, years, customer_id, आदि)। |
| $result | `array&lt;string,mixed&gt;` | नयाँ expiry_date सहित registrar ले फर्काएको कच्चा परिणाम array। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) मा पङ्क्ति 594 मा परिभाषित गरिएको छ।
