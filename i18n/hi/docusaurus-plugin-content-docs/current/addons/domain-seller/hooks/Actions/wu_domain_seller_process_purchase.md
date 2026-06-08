---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

यह एक्शन तब ट्रिगर होता है जब चेकआउट पूरा होने के बाद डोमेन की खरीद (domain purchase) प्रोसेस की जा रही होती है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | पेमेंट ऑब्जेक्ट। |
| $checkout_data | `array<string,mixed>` | साइनअप फॉर्म से पूरा चेकआउट डेटा। |

### Since

- 2.0.0
### Source

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) में लाइन 246 पर परिभाषित।
