---
id: wu_domain_registration_completed
title: कृती - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

जेव्हा एखादे डोमेन यशस्वीरित्या रजिस्टर होते, तेव्हा हे ट्रिगर होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ज्या पेमेंटमुळे रजिस्ट्रेशन झाले. |
| $registration_data | `array&lt;string,mixed&gt;` | रजिस्ट्रेशनची माहिती (उदा. domain_name, provider_id, years, expiry_date, इत्यादी). |
| $result | `array&lt;string,mixed&gt;` | रजिस्ट्रारने परत केलेला कच्चा (raw) result array. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204
