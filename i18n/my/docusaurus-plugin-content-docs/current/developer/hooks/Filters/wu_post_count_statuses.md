---
id: wu_post_count_statuses
title: စစ်ထုတ်ခြင်း - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Plugin developer များအနေဖြင့် မည်သည့် post status များကို ရေတွက်သင့်သည်ကို ပြောင်းလဲခွင့်ပေးပါသည်။ ပုံမှန်အားဖြင့် published နှင့် private post များကို ရေတွက်ပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | ရေတွက်လိုသည့် post status များစာရင်း |
| $post_type | `string` | post type slug |

### Since

- 1.9.1
### Source

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) ၏ ၁၁၉ လိုင်းတွင် သတ်မှတ်ထားပါသည်။

## Returns
post status များပါဝင်သည့် array အသစ်တစ်ခု။
