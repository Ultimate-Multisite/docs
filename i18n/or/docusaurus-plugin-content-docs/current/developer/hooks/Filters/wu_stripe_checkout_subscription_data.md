---
id: wu_stripe_checkout_subscription_data
title: ଫିଲ୍ଟର - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Subscription ଡାଟା Filter କରନ୍ତୁ। success_url କିମ୍ବା cancel_url କୁ ବଦଳାଇ ପାରେ।

## ପାରାମିଟରଗୁଡ଼ିକ

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe କୁ ପଠାଇବା ପାଇଁ ପାରାମିଟରର ଏକ array। |
| $gateway | `\Base_Gateway` | ବର୍ତ୍ତମାନର Stripe Gateway object। |

### ଆରମ୍ଭରୁ

- 2.4.2
### ସ୍ରୋତ

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ରେ 298 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
