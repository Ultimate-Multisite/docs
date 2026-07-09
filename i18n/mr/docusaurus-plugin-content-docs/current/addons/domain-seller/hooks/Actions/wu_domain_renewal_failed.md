---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

डोमेन रिन्यूअल करण्याचा प्रयत्न अयशस्वी झाल्यावर हे ॲक्शन ट्रिगर होते.

## पॅरामीटर्स {#parameters}

| Name | Type | वर्णन |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ज्या पेमेंटमुळे रिन्यूअल झाले, ते पेमेंट. |
| $renewal_data | `array&lt;string,mixed&gt;` | रिन्यूअलची मेटाडेटा (उदा. domain_name, years). |
| $error_message | `string` | रजिस्ट्रारकडून आलेला वाचण्यास सोपा त्रुटी संदेश. |

### कधीपासून {#since}

- 2.0.0
### स्रोत {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) मध्ये लाइन 630 वर परिभाषित केले आहे.
