---
id: wu_handle_user_meta_fields
title: လုပ်ဆောင်ချက် - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

ပလပ်အင် ဖန်တီးသူများအနေနဲ့ လိုအပ်ရင် အသုံးပြုသူရဲ့ meta data တွေကို အမျိုးမျိုး သိမ်းဆည်းနိုင်ဖို့ ခွင့်ပြုပါတယ်။

## ပါရာမီတာများ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta field များစာရင်းဖြစ်ပြီး key => value ပုံစံဖွဲ့စည်းထားပါတယ်။ |
| $user | `\WP_User` | WordPress user object ဖြစ်ပါတယ်။ |
| $customer | `\Customer` | Ultimate Multisite customer object ဖြစ်ပါတယ်။ |
| $checkout | `\Checkout` | checkout class ဖြစ်ပါတယ်။ |

### စတင်အသုံးပြုနိုင်သည့်

- 2.0.4
### ရင်းမြစ်

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ၏ ၁၂၄၄ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
