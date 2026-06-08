---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe کی سبسکرپشن کے ڈیٹا کو فلٹر کرتا ہے۔ اس سے `success_url` یا `cancel_url` کو بھی تبدیل کیا جا سکتا ہے۔

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe کو بھیجنے کے لیے پیرامیٹرز کا ایک ایری۔ |
| $gateway | `\Base_Gateway` | موجودہ Stripe گیٹ وے آبجیکٹ۔ |

### سے

- 2.4.2
### ماخذ

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
