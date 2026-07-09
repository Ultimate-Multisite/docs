---
id: wu_domain_seller_complete_registration
title: कार्य - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# कार्य: wu_domain_seller_complete_registration

भुक्तानी यस्तो स्थितिमा परिवर्तन हुँदा चल्छ जसले डोमेन दर्ता सुरु गर्नुपर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | भुक्तानी वस्तु। |
| $old_status | `string` | परिवर्तनअघि रहेको अघिल्लो भुक्तानी स्थिति। |

### देखि

- 2.0.0
### स्रोत

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) मा लाइन 266 मा परिभाषित गरिएको छ।
