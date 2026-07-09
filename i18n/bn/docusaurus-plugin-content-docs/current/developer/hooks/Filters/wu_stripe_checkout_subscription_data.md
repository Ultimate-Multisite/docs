---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe সাবস্ক্রিপশন ডেটা ফিল্টার করতে ব্যবহৃত হয়। এর মাধ্যমে `success_url` বা `cancel_url` পরিবর্তন করা যায়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $subscription_data | `array` | Stripe-এ পাঠানোর জন্য প্যারামিটারগুলোর একটি অ্যারে। |
| $gateway | `\Base_Gateway` | বর্তমান Stripe গেটওয়ে অবজেক্ট। |

### শুরু {#since}

- 2.4.2
### উৎস {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298)-এ লাইন ২৯৮-এ সংজ্ঞায়িত করা হয়েছে।
