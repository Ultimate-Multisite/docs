---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Plugin developer များအနေဖြင့် checkout page ၏ pre-sets များကို filter လုပ်နိုင်ရန် ဤ hook ကို အသုံးပြုနိုင်ပါသည်။

သတိပြုရန်- ဤ hook တွင် လိုအပ်သော key များ မပါဝင်ပါက front-end တွင် checkout လုပ်ငန်းစဉ်တစ်ခုလုံး ပျက်ပြယ်သွားနိုင်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | ဒေသအလိုက် သတ်မှတ်ထားသော variables များ။ |
| $checkout | `\Checkout` | checkout class။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns {#returns}
အသစ်ပြင်ဆင်ထားသော variables array ကို ပြန်ပေးပါသည်။
