---
id: wu_stripe_generate_idempotency_key
title: فلتەر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# فلتەر: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

ئەو بەهای idempotency_key ـە فلتەر دەکات کە لەگەڵ هەڵبژاردنەکانی Stripe charge دەنێردرێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $idempotency_key | `string` | بەهای کلیلی idempotency. |
| $args | `array` | ئارگیومێنتەکان کە بۆ یارمەتیدان لە دروستکردنی کلیلەکە بەکاردێن. |
| $context | `string` | چوارچێوەیەک کە کلیلی idempotency لەژێریدا دروست دەکرێت. |

### لە وەشانی {#since}

- 3.5.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) لە دێڕی 54
