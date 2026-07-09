---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe နဲ့ ငွေရှင်းတဲ့ ရွေးချယ်မှုတွေမှာ ပို့ပေးတဲ့ idempotency_key တန်ဖိုးကို စစ်ထုတ်ပေးပါတယ်။

## ပါရာမီတာများ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key ရဲ့ တန်ဖိုး။ |
| $args | `array` | key ကို ထုတ်ပေးဖို့ အကူအညီပေးတဲ့ အချက်အလက်များ။ |
| $context | `string` | idempotency key ကို ထုတ်ပေးတဲ့ အခြေအနေ။ |

### စတင်အသုံးပြုနိုင်သည့် {#since}

- 3.5.0
### ရင်းမြစ် {#source}

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54
