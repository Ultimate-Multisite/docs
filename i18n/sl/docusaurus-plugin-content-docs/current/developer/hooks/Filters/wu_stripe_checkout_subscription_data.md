---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtrirajte podatke naročnine Stripe. Lahko prepiše success_url ali cancel_url.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Polje parametrov, ki jih je treba posredovati Stripe. |
| $gateway | `\Base_Gateway` | Trenutni objekt Stripe Gateway. |

### Od različice {#since}

- 2.4.2
### Vir {#source}

Določeno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) v vrstici 298
