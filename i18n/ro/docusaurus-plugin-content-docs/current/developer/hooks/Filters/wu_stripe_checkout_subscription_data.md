---
id: wu_stripe_checkout_subscription_data
title: Filtru - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtrează datele de abonament Stripe. Poate suprascrie `success_url` sau `cancel_url`.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Un array de parametri de trimis către Stripe. |
| $gateway | `\Base_Gateway` | Obiectul curent Gateway Stripe. |

### De la {#since}

- 2.4.2
### Sursă {#source}

Definit în [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) la linia 298
