---
id: wu_stripe_checkout_subscription_data
title: Филтер - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Филтер: wu_stripe_checkout_subscription_data

Филтрира Stripe податке о претплати. Може да замени success_url или cancel_url.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $subscription_data | `array` | Низ параметара који се прослеђује Stripe-у. |
| $gateway | `\Base_Gateway` | Тренутни Stripe Gateway објекат. |

### Од верзије {#since}

- 2.4.2
### Извор {#source}

Дефинисано у [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) у реду 298
