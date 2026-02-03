---
id: wu_stripe_checkout_subscription_data
title: Filtro - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtrar datos de suscripción de Stripe. Se puede anular success_url o cancel_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Un array de parámetros para pasar a Stripe. |
| $gateway | `\Base_Gateway` | El objeto Gateway actual de Stripe. |

### Since

- 2.4.2
### Source

Definido en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) en la línea 298
