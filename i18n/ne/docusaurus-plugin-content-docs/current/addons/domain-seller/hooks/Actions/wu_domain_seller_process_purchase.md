---
id: wu_domain_seller_process_purchase
title: कार्य - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

checkout पूरा भएपछि डोमेन खरिद प्रशोधन भइरहेको बेला चल्छ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | भुक्तानी वस्तु। |
| $checkout_data | `array&lt;string,mixed&gt;` | साइनअप फारामबाट आएको पूर्ण checkout डाटा। |

### Since

- 2.0.0
### Source

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) मा २४६ औँ लाइनमा परिभाषित गरिएको।
