---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

जेव्हा एखादे डोमेन यशस्वीरित्या रिन्यू (renew) होते, तेव्हा हा ॲक्शन ट्रिगर होतो.

## पॅरामीटर्स {#parameters}

| Name | Type | वर्णन |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ज्या पेमेंटमुळे रिन्यूअल झाले, ते पेमेंट. |
| $renewal_data | `array&lt;string,mixed&gt;` | रिन्यूअलची मेटाडेटा (उदा. domain_name, years, customer_id, इत्यादी). |
| $result | `array&lt;string,mixed&gt;` | रजिस्ट्रारकडून मिळालेला कच्चा परिणाम ॲरे, ज्यात नवीन expiry_date समाविष्ट असते. |

### कधीपासून {#since}

- 2.0.0
### स्रोत {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) या फाईलमध्ये लाइन 594 वर परिभाषित केले आहे.
