---
id: wu_stripe_checkout_subscription_data
title: फिल्टर - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe सबस्क्रिप्शन डेटा फिल्टर करा. या फिल्टरद्वारे तुम्ही `success_url` किंवा `cancel_url` बदलाऊ शकता.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe ला पास करण्यासाठी पॅरामीटर्सचा एक ॲरे. |
| $gateway | `\Base_Gateway` | सध्याचा Stripe गेटवे ऑब्जेक्ट. |

### Since

- 2.4.2
### Source

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) मध्ये लाइन 298 वर परिभाषित केले आहे.
