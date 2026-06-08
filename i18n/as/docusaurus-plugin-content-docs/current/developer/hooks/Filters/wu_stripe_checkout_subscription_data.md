---
id: wu_stripe_checkout_subscription_data
title: ফিল্টৰ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe সাবস্ক্রিপচনৰ তথ্য ফিল্টাৰ কৰে। ইয়াৰ জৰিয়তে success_url বা cancel_url-ক ওপৰত বালি দিব (override) যায়।

## পৰিমান (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe-লৈ প্ৰেৰণ কৰিবলগীয়া পৰিমানৰ এটা তালিকা (array)। |
| $gateway | `\Base_Gateway` | বৰ্তমানৰ Stripe গেটৱে গেটৱেজেক্টটো। |

### Since

- 2.4.2
### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
