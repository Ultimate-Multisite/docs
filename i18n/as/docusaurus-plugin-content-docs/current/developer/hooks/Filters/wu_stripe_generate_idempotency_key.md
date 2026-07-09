---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe charge options লগত পঠোৱা idempotency_key মানটো ফিল্টাৰ কৰে।

## প্যারামিটাৰসমূহ {#parameters}

| Name | Type | বৰ্ণনা |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key-ৰ মান। |
| $args | `array` | key সৃষ্টি কৰাত সহায় কৰিবলৈ ব্যৱহৃত আৰ্গুমেন্ট। |
| $context | `string` | idempotency key সৃষ্টি হোৱা প্ৰসংগ। |

### তাৰ পৰা {#since}

- 3.5.0
### উৎস {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ফাইলৰ ৫৪ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
