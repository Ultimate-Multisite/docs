---
id: wu_stripe_checkout_subscription_data
title: फिल्टर - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# फिल्टर: wu_stripe_checkout_subscription_data

Stripe सदस्यता डेटा फिल्टर गर्नुहोस्। success_url वा cancel_url ओभरराइड गर्न सक्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $subscription_data | `array` | Stripe मा पठाउनुपर्ने प्यारामिटरहरूको array। |
| $gateway | `\Base_Gateway` | हालको Stripe Gateway वस्तु। |

### देखि

- 2.4.2
### स्रोत

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) मा लाइन 298 मा परिभाषित गरियो।
