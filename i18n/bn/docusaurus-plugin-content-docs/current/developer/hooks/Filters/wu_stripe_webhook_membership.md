---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

এই ওয়েবহুকটির সাথে যুক্ত মেম্বারশিপ রেকর্ড ফিল্টার করে।

এই ফিল্টারটি যোগ করা হয়েছে কারণ যখন একই Stripe গ্রাহককে বিভিন্ন সাইটে ব্যবহার করা হতে পারে, তখন কিছু সংঘাত (conflict) দেখা দিতে পারে।

## প্যারামিটারসমূহ

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | মেম্বারশিপ অবজেক্টটি। |
| $event | `\Stripe\Event` | প্রাপ্ত ইভেন্টটি। |

### উৎস

লাইন ২০৩৫-এ [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) এ সংজ্ঞায়িত করা হয়েছে।
