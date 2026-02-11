---
id: wu_stripe_checkout_subscription_data
title: Фильтр - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Фильтрует данные подписки Stripe. Можно переопределить success_url или cancel_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Массив параметров, передаваемых в Stripe. |
| $gateway | `\Base_Gateway` | Текущий объект шлюза Stripe. |

### Since

- 2.4.2
### Source

Определено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) на строке 298
