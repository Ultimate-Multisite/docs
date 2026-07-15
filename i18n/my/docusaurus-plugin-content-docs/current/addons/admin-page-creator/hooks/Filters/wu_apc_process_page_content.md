---
id: wu_apc_process_page_content
title: စစ်ထုတ်ခြင်း - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

developer များ နောက်ဆုံးအကြောင်းအရာကို ပြုပြင်နိုင်စေရန်

## ပါရာမီတာများ {#parameters}

| အမည် | အမျိုးအစား | ဖော်ပြချက် |
|------|------|-------------|
| $content | `string` | အစားထိုးမှုများ ပြုလုပ်ပြီးနောက် အကြောင်းအရာ။ |
| $content_before_processing | `string` | အစားထိုးမှုများ မပြုလုပ်မီ အကြောင်းအရာ။ |
| $to_replace | `array` | နေရာယူထားသည့် placeholder များ ပါဝင်သော array။ |
| $placeholder_count | `int` | တွေ့ရှိရသည့် placeholder အရေအတွက်။ |

### အသုံးပြုနိုင်သည့် Version {#since}

- 1.4.0
### ရင်းမြစ် {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) ၏ ၄၆ လိုင်းတွင် သတ်မှတ်ထားသည်။

## ပြန်ပေးသည့်အရာ {#returns}
ပြင်ဆင်ပြီးနောက် အကြောင်းအရာ။
