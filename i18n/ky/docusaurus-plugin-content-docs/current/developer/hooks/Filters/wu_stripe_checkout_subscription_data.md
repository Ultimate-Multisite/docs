---
id: wu_stripe_checkout_subscription_data
title: Чыпка - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Фильтр: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe Subscription дайындарын фильтрлейт. success_url же cancel_url маанисин өзгөртө алат.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $subscription_data | `array` | Stripe'ка өткөрүлө турган параметрлер массиви. |
| $gateway | `\Base_Gateway` | Учурдагы Stripe Gateway объекти. |

### Бери {#since}

- 2.4.2
### Булак {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ичинде, 298-сапта аныкталган
