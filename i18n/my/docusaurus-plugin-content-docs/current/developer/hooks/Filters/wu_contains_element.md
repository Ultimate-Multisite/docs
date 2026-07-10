---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Developer တွေအနေနဲ့ အစပိုင်း ရှာဖွေမှု ရလဒ်တွေကို ပြောင်းလဲနိုင်အောင် လုပ်ဆောင်ပေးပါတယ်။

ဒီအရာက third-party builders တွေ စတဲ့ အခြေအနေတွေမှာ အသုံးဝင်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | အဆိုပါ element ဟာ content ထဲမှာ ပါဝင်မှု ရှိ၊ မရှိ စစ်ဆေးခြင်း။ |
| $content | `string` | စစ်ဆေးနေတဲ့ content။ |
| $element | `self` | လက်ရှိ element ကိုယ်တိုင်။ |
| $post | `null\|\WP_Post` | စစ်ဆေးမယ့် post။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) at line 534
