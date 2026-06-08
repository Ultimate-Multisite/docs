---
id: wu_rest_get_items
title: စစ်ထုတ်ခြင်း - wu_rest_get_items
sidebar_label: wu_rest_get_items
_i18n_hash: cc7851a8307ce40de0b75fc0d9d50693
---
# Filter: wu_rest_get_items

တောင်းဆိုမှု (request) ကို ဆက်လက်လုပ်ဆောင်ခွင့်ရှိမရှိ စစ်ဆေးပေးတဲ့ နေရာ (filter) ဖြစ်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | အစပိုင်းမှာ ပြန်ပေးရမယ့် တန်ဖိုး (Initial return value) ဖြစ်ပါတယ်။ |
| $rest_base | `array` | အရာဝတ္ထုရဲ့ slug (Entity slug) ဖြစ်ပါတယ်။ |
| $this | `\Base_Manager` | အရာဝတ္ထုရဲ့ instance (object instance) ဖြစ်ပါတယ်။ |

### စတင်အသုံးပြုနိုင်သည့် Version

- 2.0.0
### ရင်းမြစ်

[`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L336) ၏ ၃၃၆ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
