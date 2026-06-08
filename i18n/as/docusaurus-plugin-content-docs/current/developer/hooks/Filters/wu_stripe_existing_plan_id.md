---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

যিটো প্লেনৰ ID পৰীক্ষা কৰিব লাগিব, তাৰ বাবে এই ফিল্টাৰটো ব্যৱহাৰ কৰে। যদি এই ID টি বিদ্যমান থাকে, তেন্তে নতুন সাবস্ক্রিপশ্যনটোৱে এই প্লেনটো ব্যৱহাৰ কৰিব।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | পৰীক্ষা কৰিবলগীয়া Stripe প্লেনৰ ID। |
| $membership_level | `object` | মেম্বৰশ্বিপ লেভেলৰ বস্তু (object)। |

### Source

[https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) ত ২৬৫৩ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
