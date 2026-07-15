---
id: wu_stripe_existing_plan_id
title: ফিল্টার - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

এটি যে প্ল্যানের আইডি পরীক্ষা করার জন্য ফিল্টার করে। যদি এই আইডিটি বিদ্যমান থাকে, তবে নতুন সাবস্ক্রিপশনটি এই প্ল্যানটি ব্যবহার করবে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | যে Stripe প্ল্যানের আইডি পরীক্ষা করতে হবে। |
| $membership_level | `object` | মেম্বারশিপ লেভেল অবজেক্ট। |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) at line 2653
