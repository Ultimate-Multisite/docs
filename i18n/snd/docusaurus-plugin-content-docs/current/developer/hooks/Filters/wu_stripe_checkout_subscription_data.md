---
id: wu_stripe_checkout_subscription_data
title: فلٽر - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Subscription ڊيٽا کي فلٽر ڪريو. success_url يا cancel_url کي اووررائيڊ ڪري سگهي ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $subscription_data | `array` | Stripe ڏانهن موڪلڻ لاءِ پيرا ميٽرن جو هڪ array. |
| $gateway | `\Base_Gateway` | موجوده Stripe Gateway object. |

### کان وٺي

- 2.4.2
### ذريعو

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ۾ line 298 تي بيان ٿيل
