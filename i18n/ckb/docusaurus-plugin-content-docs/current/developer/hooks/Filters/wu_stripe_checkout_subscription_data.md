---
id: wu_stripe_checkout_subscription_data
title: فلتەر - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

داتای Subscription ـی Stripe فلتەر دەکات. دەتوانێت success_url یان cancel_url بگۆڕێت.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $subscription_data | `array` | ڕیزەیەک لە پارامێتەرەکان بۆ ناردن بۆ Stripe. |
| $gateway | `\Base_Gateway` | ئۆبجێکتی Stripe Gateway ـی ئێستە. |

### لە وەختی

- 2.4.2
### سەرچاوە

لە [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) لە دێڕی 298 پێناسە کراوە.
