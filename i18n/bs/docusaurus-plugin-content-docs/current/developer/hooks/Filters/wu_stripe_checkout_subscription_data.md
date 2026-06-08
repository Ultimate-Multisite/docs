---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtrira podatke o pretplati Stripe-a. Može nadjačati `success_url` ili `cancel_url`.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Niz parametara koje treba poslati Stripe-u. |
| $gateway | `\Base_Gateway` | Trenutni objekt Stripe Gateway-a. |

### Od

- 2.4.2
### Izvor

Definisano u [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) na liniji 298
