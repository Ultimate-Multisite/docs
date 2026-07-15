---
id: wu_rest_update_item
title: စစ်ထုတ်ခြင်း - wu_rest_update_item
sidebar_label: wu_rest_update_item
_i18n_hash: 46a659e3004edbe285434103f81bd733
---
# Filter: wu_rest_update_item

ဤ filter သည် တောင်းဆိုမှုတစ်ခုကို ဆက်လက်လုပ်ဆောင်ခွင့်ပြုခြင်း ရှိ၊ မရှိ စစ်ဆေးပေးပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | အစပိုင်း ပြန်ပေးရမည့် တန်ဖိုး။ |
| $rest_base | `array` | အကြောင်းအရာ အမှတ်အသား (Entity slug)။ |
| $this | `\Base_Manager` | အရာဝတ္ထု ပုံစံ (The object instance)။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L414) ၏ ၄၁၄ လိုင်းတွင် သတ်မှတ်ထားသည်။
