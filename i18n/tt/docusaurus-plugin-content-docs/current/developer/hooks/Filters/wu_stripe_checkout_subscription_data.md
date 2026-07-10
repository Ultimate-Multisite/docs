---
id: wu_stripe_checkout_subscription_data
title: Сөзгеч - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe Subscription мәгълүматларын фильтрлый. success_url яки cancel_url кыйммәтен үзгәртеп яза ала.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $subscription_data | `array` | Stripe'ка тапшыру өчен параметрлар массивы. |
| $gateway | `\Base_Gateway` | Хәзерге Stripe Gateway объекты. |

### Кертелгән версия {#since}

- 2.4.2
### Чыганак {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) эчендә 298 нче юлда билгеләнгән.
