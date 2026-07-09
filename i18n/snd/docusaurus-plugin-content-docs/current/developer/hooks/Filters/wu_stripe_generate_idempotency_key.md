---
id: wu_stripe_generate_idempotency_key
title: فلٽر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# فلٽر: wu_stripe_generate_idempotency_key

Stripe چارج اختيارن سان موڪليل idempotency_key قدر کي فلٽر ڪري ٿو.

## پيراميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key جو قدر. |
| $args | `array` | چاٻي ٺاهڻ ۾ مدد لاءِ استعمال ٿيل آرگيومينٽ. |
| $context | `string` | اهو سياق جنهن هيٺ idempotency key ٺاهي وڃي ٿي. |

### کان وٺي

- 3.5.0
### ماخذ

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ۾ سٽ 54 تي بيان ٿيل آهي.
