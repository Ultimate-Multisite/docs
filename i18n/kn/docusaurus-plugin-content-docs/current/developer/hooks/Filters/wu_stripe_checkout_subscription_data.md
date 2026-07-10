---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe ಚಂದಾದಾರಿಕೆ ಡೇಟಾವನ್ನು (Subscription data) ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇದರ ಮೂಲಕ success_url ಅಥವಾ cancel_url ಅನ್ನು ಬದಲಾಯಿಸಬಹುದು.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe ಗೆ ಕಳುಹಿಸಲು ಬೇಕಾದ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳ (parameters) ಒಂದು ಅರೇ (array). |
| $gateway | `\Base_Gateway` | ಪ್ರಸ್ತುತ Stripe Gateway ಆಬ್ಜೆಕ್ಟ್. |

### Since {#since}

- 2.4.2
### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ನಲ್ಲಿ 298ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
