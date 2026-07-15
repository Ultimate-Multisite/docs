---
id: wu_stripe_checkout_subscription_data
title: Filtro - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtro: wu_stripe_checkout_subscription_data

Filtra os datos de subscrición de Stripe. Pode sobrescribir success_url ou cancel_url.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $subscription_data | `array` | Un array de parámetros para pasar a Stripe. |
| $gateway | `\Base_Gateway` | O obxecto Stripe Gateway actual. |

### Desde {#since}

- 2.4.2
### Fonte {#source}

Definido en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) na liña 298
