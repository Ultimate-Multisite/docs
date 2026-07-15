---
id: wu_stripe_checkout_subscription_data
title: Filtro - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtro: wu_stripe_checkout_subscription_data

Filtra os dados da subscrição Stripe. Pode substituir success_url ou cancel_url.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $subscription_data | `array` | Um array de parâmetros a passar para Stripe. |
| $gateway | `\Base_Gateway` | O objeto Stripe Gateway atual. |

### Desde {#since}

- 2.4.2
### Fonte {#source}

Definido em [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) na linha 298
