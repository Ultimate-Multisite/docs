---
id: wu_stripe_checkout_subscription_data
title: வடிகட்டி - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe சந்தா தரவை வடிகட்டுகிறது. இது `success_url` அல்லது `cancel_url`-ஐ மாற்றியமைக்க (override) முடியும்.

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe-க்கு அனுப்ப வேண்டிய அளவுருக்களின் ஒரு வரிசை (array). |
| $gateway | `\Base_Gateway` | தற்போதைய Stripe Gateway ஆப்ஜெக்ட். |

### எப்போது இருந்து (Since)

- 2.4.2
### மூலம் (Source)

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) என்ற கோப்பில் 298 வரியில் வரையறுக்கப்பட்டுள்ளது.
