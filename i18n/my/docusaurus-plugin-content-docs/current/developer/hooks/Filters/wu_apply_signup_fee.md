---
id: wu_apply_signup_fee
title: စစ်ထုတ်မှု - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

စာရင်းသွင်းခကို အသုံးပြုရမလား၊ မရဘူးလားဆိုတာကို စစ်ထုတ်ပေးတဲ့ filter တစ်ခု ဖြစ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | စာရင်းသွင်းခကို ထည့်သွင်းရမလား၊ မထည့်ရဘူးလားဆိုတာကို သတ်မှတ်ပါတယ်။ |
| $product | `object` | အဖွဲ့ဝင်အဆင့် (Membership level) အရာဝတ္ထု။ |
| $this | `\WP_Ultimo\Checkout\Cart` | မှတ်ပုံတင်ခြင်း အရာဝတ္ထု။ |

### Since {#since}

- 3.1
### Source {#source}

[`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) ၏ ၁၇၆၉ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
