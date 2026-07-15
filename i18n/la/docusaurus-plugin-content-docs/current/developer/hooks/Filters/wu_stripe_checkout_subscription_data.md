---
id: wu_stripe_checkout_subscription_data
title: Filtrum - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtrum: wu_stripe_checkout_subscription_data

Filtrat data Subscriptionis Stripe. Potest success_url vel cancel_url superare.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $subscription_data | `array` | Series parametrorum ad Stripe transmittendorum. |
| $gateway | `\Base_Gateway` | Obiectum Stripe Gateway praesens. |

### Ab {#since}

- 2.4.2
### Fons {#source}

Definitum in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) in linea 298
