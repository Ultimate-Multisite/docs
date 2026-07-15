---
id: wu_stripe_checkout_subscription_data
title: Filtry - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtruje dane subskrypcji Stripe. Można nadpisać wartości `success_url` lub `cancel_url`.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Tablica parametrów, które zostaną przekazane do Stripe. |
| $gateway | `\Base_Gateway` | Aktualny obiekt bramki (Gateway) Stripe. |

### Since {#since}

- 2.4.2
### Source {#source}

Zdefiniowane w [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) w linii 298
