---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filtrerar Stripe-prenumerationsdata. Kan åsidosätta `success_url` eller `cancel_url`.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $subscription_data | `array` | Ett array av parametrar som ska skickas till Stripe. |
| $gateway | `\Base_Gateway` | Det aktuella Stripe Gateway-objektet. |

### Sedan {#since}

- 2.4.2
### Källa {#source}

Definieras i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) på rad 298
