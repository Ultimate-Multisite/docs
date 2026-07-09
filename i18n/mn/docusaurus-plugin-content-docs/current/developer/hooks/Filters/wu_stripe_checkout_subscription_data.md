---
id: wu_stripe_checkout_subscription_data
title: Шүүлтүүр - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe захиалгын өгөгдлийг шүүнэ. success_url эсвэл cancel_url-г дарж өөрчилж болно.

## Параметрүүд

| Name | Type | Тайлбар |
|------|------|-------------|
| $subscription_data | `array` | Stripe руу дамжуулах параметрүүдийн массив. |
| $gateway | `\Base_Gateway` | Одоогийн Stripe Gateway объект. |

### Хойш

- 2.4.2
### Эх сурвалж

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298)-д 298-р мөрөнд тодорхойлсон.
