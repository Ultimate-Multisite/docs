---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtruje údaje Stripe Subscription. Môže prepísať success_url alebo cancel_url.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $subscription_data | `array` | Pole parametrov, ktoré sa majú odovzdať do Stripe. |
| $gateway | `\Base_Gateway` | Aktuálny objekt Stripe Gateway. |

### Od verzie

- 2.4.2
### Zdroj

Definované v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) na riadku 298
