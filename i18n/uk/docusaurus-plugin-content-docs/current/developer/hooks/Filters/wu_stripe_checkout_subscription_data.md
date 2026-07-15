---
id: wu_stripe_checkout_subscription_data
title: Фільтр - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Фільтр: wu_stripe_checkout_subscription_data

Фільтрує дані підписки Stripe. Дозволяє перевизначити `success_url` або `cancel_url`.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $subscription_data | `array` | Масив параметрів, які потрібно передати Stripe. |
| $gateway | `\Base_Gateway` | Поточний об'єкт шлюзу Stripe. |

### З версії {#since}

- 2.4.2
### Джерело {#source}

Визначено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) на рядку 298
