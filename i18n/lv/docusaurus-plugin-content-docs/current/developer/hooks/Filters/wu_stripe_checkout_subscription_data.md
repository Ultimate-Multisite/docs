---
id: wu_stripe_checkout_subscription_data
title: Filtrs - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtrs: wu_stripe_checkout_subscription_data

Filtrē Stripe abonementa datus. Var pārrakstīt success_url vai cancel_url.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $subscription_data | `array` | Parametru masīvs, ko nodot Stripe. |
| $gateway | `\Base_Gateway` | Pašreizējais Stripe Gateway objekts. |

### Kopš

- 2.4.2
### Avots

Definēts [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) 298. rindā
