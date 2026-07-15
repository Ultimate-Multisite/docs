---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

এটি Stripe চার্জ অপশনগুলির সাথে পাঠানো `idempotency_key` মানটি ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $idempotency_key | `string` | idempotency কী-এর মান। |
| $args | `array` | কী তৈরি করতে সহায়ক আর্গুমেন্ট। |
| $context | `string` | যে প্রেক্ষাপটে idempotency কী তৈরি করা হচ্ছে। |

### যেহেতু {#since}

- 3.5.0
### উৎস {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ফাইলের ৫৪ নম্বর লাইনে সংজ্ঞায়িত করা হয়েছে।
