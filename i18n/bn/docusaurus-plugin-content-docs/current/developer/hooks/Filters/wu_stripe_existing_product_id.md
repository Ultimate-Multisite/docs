---
id: wu_stripe_existing_product_id
title: ফিল্টার - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

এটি যে প্রোডাক্টের আইডি পরীক্ষা করার জন্য ফিল্টার করে। যদি এটি বিদ্যমান থাকে, তবে নতুন সাবস্ক্রিপশনটি এই প্রোডাক্টটি ব্যবহার করবে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | যে Stripe প্রোডাক্টের আইডি পরীক্ষা করতে হবে। |
| $name | `string` | প্রোডাক্টের নাম। |

### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741)-এ লাইন ২৭৪১-এ সংজ্ঞায়িত করা হয়েছে।
