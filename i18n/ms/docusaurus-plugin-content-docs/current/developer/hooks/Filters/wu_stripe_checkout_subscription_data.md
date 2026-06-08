---
id: wu_stripe_checkout_subscription_data
title: Penapis - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Menapis data Langganan Stripe. Boleh menggantikan `success_url` atau `cancel_url`.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Sebuah array parameter untuk dihantar ke Stripe. |
| $gateway | `\Base_Gateway` | Objek Gateway Stripe semasa. |

### Sejak

- 2.4.2
### Sumber

Didefinisikan dalam [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) pada baris 298
