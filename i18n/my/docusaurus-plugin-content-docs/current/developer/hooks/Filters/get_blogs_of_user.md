---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

မူရင်း WP Filter ကို အပြည့်အဝ အသုံးပြုနိုင်စေရန် ဤနေရာတွင် ပြန်လည်ဖန်တီးထားခြင်း ဖြစ်ပါသည်။

အသုံးပြုသူတစ်ဦး ပိုင်ဆိုင်သည့် ဝက်ဘ်ဆိုက်များ စာရင်းကို စစ်ထုတ်ပေးပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | အသုံးပြုသူပိုင် ဝက်ဘ်ဆိုက် အရာဝတ္ထုများ (site objects) အစုအဝေး။ |
| $user_id | `int` | အသုံးပြုသူ၏ ID နံပါတ်။ |
| $all | `bool` | ပြန်ပေးမည့် ဝက်ဘ်ဆိုက်များ စာရင်းတွင် 'ဖျက်ထားသည်' (deleted)၊ 'သိမ်းဆည်းထားသည်' (archived) သို့မဟုတ် 'စပမ်' (spam) အမှတ်အသားပြုထားသည့် ဝက်ဘ်ဆိုက်များ အားလုံး ပါဝင်စေလိုခြင်း ရှိ၊ မရှိ။ မူလတန်ဖိုးမှာ false ဖြစ်သည်။ |

### Since

- 2.0.11
### Source

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ၏ ၈၅၁ လိုင်းတွင် သတ်မှတ်ထားသည်။
