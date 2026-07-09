---
id: wu_stripe_generate_idempotency_key
title: فلټر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

هغه idempotency_key ارزښت فلټر کوي چې د Stripe چارج اختیارونو سره لېږل کېږي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $idempotency_key | `string` | د idempotency key ارزښت. |
| $args | `array` | هغه ارګومېنټونه چې د کیلي په جوړولو کې د مرستې لپاره کارول کېږي. |
| $context | `string` | هغه سیاق چې تر لاندې یې idempotency key جوړېږي. |

### له نسخې راهیسې {#since}

- 3.5.0
### سرچینه {#source}

په [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) کې په ۵۴ کرښه تعریف شوی
