---
id: wu_maybe_create_customer
title: လုပ်ဆောင်ချက် - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ပလပ်အင် ဖန်တီးသူများအနေနဲ့ ဖောက်သည်ကို ထည့်သွင်းတဲ့အခါ အပိုလုပ်ဆောင်ချက်တွေ လုပ်နိုင်စေဖို့ ဖြစ်ပါတယ်။

ဥပမာအားဖြင့်၊ ဖောက်သည်ကို အဓိက ဝက်ဘ်ဆိုက်မှာပါ အသုံးပြုသူ (user) အဖြစ် ထည့်သွင်းဖို့အတွက် hooks တွေကို ဒီနေရာမှာ ထည့်သွင်းပေးရမှာ ဖြစ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | အသုံးပြုခဲ့တဲ့ ဖောက်သည် (customer) အရာဝတ္ထု။ |
| $checkout | `\Checkout` | လက်ရှိ checkout class။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ရဲ့ ၁၁၅၆ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
