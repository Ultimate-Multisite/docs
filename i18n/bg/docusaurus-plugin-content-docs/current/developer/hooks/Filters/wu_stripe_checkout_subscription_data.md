---
id: wu_stripe_checkout_subscription_data
title: Филтър - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Филтрира данните за абонамент от Stripe. Може да надгради (override) `success_url` или `cancel_url`.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Масив от параметри, които се предават на Stripe. |
| $gateway | `\Base_Gateway` | Обекта на текущата Stripe Gateway. |

### От версия {#since}

- 2.4.2
### Източник {#source}

Дефиниран в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) на линия 298
