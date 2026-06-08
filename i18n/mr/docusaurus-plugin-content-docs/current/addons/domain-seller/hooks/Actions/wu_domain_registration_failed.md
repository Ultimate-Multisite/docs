---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

डोमेन नोंदणी करण्याचा प्रयत्न अयशस्वी झाल्यावर हे कार्यान्वित होते.

## पॅरामीटर्स

| Name | Type | वर्णन |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ज्या पेमेंटमुळे नोंदणी करण्याचा प्रयत्न झाला. |
| $registration_data | `array&lt;string,mixed&gt;` | यात status=failed आणि error_message सह नोंदणीचा मेटाडेटा असतो. |
| $error_message | `string` | रजिस्ट्रारकडून आलेला वाचण्यास सोपा त्रुटी संदेश. |

### कधीपासून

- 2.0.0
### स्रोत

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) या फाईलमध्ये लाइन 1250 वर परिभाषित केले आहे.
