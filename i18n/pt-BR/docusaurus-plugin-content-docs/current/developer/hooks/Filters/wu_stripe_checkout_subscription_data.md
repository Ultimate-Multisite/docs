---
id: wu_stripe_checkout_subscription_data
title: Filtro - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtrar dados de assinatura Stripe. Pode substituir success_url ou cancel_url. {#filter-wustripecheckoutsubscriptiondata}

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Um array de parâmetros para passar para Stripe. |
| $gateway | `\Base_Gateway` | O objeto Gateway Stripe atual. |

### Since {#since}

- 2.4.2

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
