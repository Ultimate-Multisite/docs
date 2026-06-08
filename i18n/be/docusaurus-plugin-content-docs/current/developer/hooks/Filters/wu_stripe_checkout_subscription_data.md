---
id: wu_stripe_checkout_subscription_data
title: Фільтр - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Фільтруе дадзеныя падпіскі Stripe. Маг пераканаць (або змяніць) `success_url` або `cancel_url`.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Массив параметраў, якія трэба перадаць Stripe. |
| $gateway | `\Base_Gateway` | Bieжачы аб'ект шлюзу Stripe. |

### З версіі

- 2.4.2
### Паходжанне

Вызначаны ў [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) на 298-й кропцы.
