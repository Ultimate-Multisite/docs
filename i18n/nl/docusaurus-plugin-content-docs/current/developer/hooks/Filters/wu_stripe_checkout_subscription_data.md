---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
Filter Stripe-abonnement gegevens. Kan `success_url` of `cancel_url` overschrijven.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Een array van parameters om door te geven aan Stripe. |
| $gateway | `\Base_Gateway` | Het huidige Stripe Gateway object. |

### Since

- 2.4.2
### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
