---
id: wu_stripe_checkout_subscription_data
title: Filtro - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtro: wu_stripe_checkout_subscription_data

Filtra i dati dell'abbonamento Stripe. Può sovrascrivere success_url o cancel_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Un array di parametri da passare a Stripe. |
| $gateway | `\Base_Gateway` | L'oggetto Gateway Stripe corrente. |

### Da

- 2.4.2

### Fonte

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
