---
id: wu_stripe_checkout_subscription_data
title: Филтер - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Филтер: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Филтрирајте ги податоците за Stripe Subscription. Може да ги замени success_url или cancel_url.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $subscription_data | `array` | Низа од параметри што се проследуваат до Stripe. |
| $gateway | `\Base_Gateway` | Тековниот објект Stripe Gateway. |

### Од {#since}

- 2.4.2
### Извор {#source}

Дефинирано во [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) на линија 298
