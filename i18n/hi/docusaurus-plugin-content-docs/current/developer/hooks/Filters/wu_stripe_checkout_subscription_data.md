---
id: wu_stripe_checkout_subscription_data
title: फ़िल्टर - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe सब्सक्रिप्शन डेटा को फ़िल्टर करता है। इसका उपयोग success_url या cancel_url को ओवरराइड करने के लिए किया जा सकता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe को पास किए जाने वाले पैरामीटर्स का एक ऐरे। |
| $gateway | `\Base_Gateway` | वर्तमान Stripe Gateway ऑब्जेक्ट। |

### Since {#since}

- 2.4.2
### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) में लाइन 298 पर परिभाषित।
