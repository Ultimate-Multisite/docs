---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Subscription data ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ। ਇਸ ਨਾਲ success_url ਜਾਂ cancel_url ਨੂੰ ওভারਰਾਈਡ (override) ਵੀ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | ਵਰਣਨ (Description) |
|------|------|-------------|
| $subscription_data | `array` | Stripe ਨੂੰ ਭੇਜਣ ਲਈ ਪੈਰਾਮੀਟਰਾਂ ਦਾ ਇੱਕ ਐਰੇ। |
| $gateway | `\Base_Gateway` | ਮੌਜੂਦਾ Stripe Gateway object। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.4.2
### ਸਰੋਤ (Source) {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
