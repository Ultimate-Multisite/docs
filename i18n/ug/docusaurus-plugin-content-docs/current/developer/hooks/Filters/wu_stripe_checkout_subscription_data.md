---
id: wu_stripe_checkout_subscription_data
title: سۈزگۈچ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# سۈزگۈچ: wu_stripe_checkout_subscription_data

Stripe Subscription سانلىق مەلۇماتلىرىنى سۈزۈڭ. success_url ياكى cancel_url نى قاپلىۋېتەلەيدۇ.

## پارامېتىرلار

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $subscription_data | `array` | Stripe غا يوللايدىغان پارامېتىرلارنىڭ بىر قاتارى. |
| $gateway | `\Base_Gateway` | نۆۋەتتىكى Stripe Gateway ئوبيېكتى. |

### دىن باشلاپ

- 2.4.2
### مەنبە

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) دا 298-قۇردا ئېنىقلانغان.
