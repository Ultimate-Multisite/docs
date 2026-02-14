---
id: wu_stripe_checkout_subscription_data
title: تصفية - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# عامل التصفية: wu_stripe_checkout_subscription_data

تصفية بيانات اشتراك Stripe. يمكن تجاوز success_url أو cancel_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | مصفوفة من المعلمات لتمريرها إلى Stripe. |
| $gateway | `\Base_Gateway` | كائن بوابة Stripe الحالي. |

### Since

- 2.4.2

### Source

تم تعريفه في [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) في السطر 298
