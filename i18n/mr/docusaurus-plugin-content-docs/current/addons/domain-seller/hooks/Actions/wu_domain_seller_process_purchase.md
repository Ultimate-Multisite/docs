---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

जेव्हा चेकआउट पूर्ण झाल्यानंतर डोमेन खरेदीची प्रक्रिया चालू असते, तेव्हा हे ॲक्शन कार्यान्वित होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | पेमेंट ऑब्जेक्ट. |
| $checkout_data | `array<string,mixed>` | साइनअप फॉर्ममधील संपूर्ण चेकआउट डेटा. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) मध्ये लाइन 246 वर परिभाषित केले आहे.
