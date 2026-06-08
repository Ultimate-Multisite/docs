---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

အသုံးပြုသူ အကောင့်ဝင်ခြင်း (authentication) ကွတ်ကီး သက်တမ်းကုန်ဆုံးချိန်ကို စစ်ထုတ်ပေးသည့် (filter) လုပ်ဆောင်ချက် ဖြစ်ပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | သက်တမ်းကုန်ဆုံးမည့် ကြာချိန်ကို စက္ကန့်များဖြင့် သတ်မှတ်သည်။ |
| $user_id | `int` | အသုံးပြုသူ ID။ |
| $remember | `bool` | အသုံးပြုသူ၏ အကောင့်ဝင်ခြင်းကို မှတ်မိစေလိုခြင်း ရှိ၊ မရှိ။ မူလတန်ဖိုးမှာ false ဖြစ်သည်။ |

### Since

- 2.8.0
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ၏ ၅၂ လိုင်းတွင် သတ်မှတ်ထားသည်။
