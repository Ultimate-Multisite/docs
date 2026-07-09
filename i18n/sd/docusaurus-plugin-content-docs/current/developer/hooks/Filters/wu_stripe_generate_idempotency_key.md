---
id: wu_stripe_generate_idempotency_key
title: فلٽر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# فلٽر: wu_stripe_generate_idempotency_key

Stripe چارج اختيارن سان موڪليل idempotency_key قدر کي فلٽر ڪري ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key جو قدر. |
| $args | `array` | ڪنجي ٺاهڻ ۾ مدد لاءِ استعمال ٿيل دليل. |
| $context | `string` | اهو سياق جنهن تحت idempotency key ٺاهي وڃي ٿي. |

### کان وٺي

- 3.5.0
### ذريعو

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ۾ لائين 54 تي بيان ٿيل آهي.
