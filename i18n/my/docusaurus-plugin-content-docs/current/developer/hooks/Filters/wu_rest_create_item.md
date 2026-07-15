---
id: wu_rest_create_item
title: စစ်ထုတ်ခြင်း - wu_rest_create_item
sidebar_label: wu_rest_create_item
_i18n_hash: b35924a8414367a9d0c2f3c21f1a1b91
---
# Filter: wu_rest_create_item

ဤ Filter သည် တောင်းဆိုမှု (request) ကို ဆက်လက်လုပ်ဆောင်ခွင့်ပြုမည်လား၊ မပြုမည်လား စစ်ထုတ်ပေးပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | အစပိုင်း ပြန်ပေးရမည့် တန်ဖိုး။ |
| $rest_base | `array` | အကြောင်းအရာ (Entity) ၏ slug အမည်။ |
| $this | `\Base_Manager` | အရာဝတ္ထု (object) ၏ instance။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L362) at line 362
