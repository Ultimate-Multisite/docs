---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Ginagamit ito para i-filter ang data ng Stripe Subscription. Sa pamamagitan nito, maaari mong palitan (override) ang `success_url` o `cancel_url`.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Isang array ng mga parameter na ipapasa kay Stripe. |
| $gateway | `\Base_Gateway` | Ang kasalukuyang Stripe Gateway object. |

### Simula

- 2.4.2
### Pinagmulan

Tinukoy sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) sa linya 298
