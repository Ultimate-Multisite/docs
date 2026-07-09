---
id: signup_get_available_languages
title: စစ်ထုတ်ခြင်း - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

ဝက်ဘ်ဆိုက်ကို အသုံးပြုသူများ စာရင်းသွင်းသည့်အခါ ရရှိနိုင်သော ဘာသာစကားစာရင်းကို စစ်ထုတ်ပေးသည့် filter တစ်ခု ဖြစ်ပါသည်။

ဤ hook ကို အလွတ် array တစ်ခု ပေးလိုက်ပါက စာရင်းသွင်းပုံစံပေါ်တွင် ၎င်း setting ကို ထုတ်ပြခြင်းကို ပိတ်ပစ်မည်ဖြစ်ပြီး၊ ဝက်ဘ်ဆိုက်ကို ဖန်တီးသည့်အခါ မူလ ဘာသာစကားကို အသုံးပြုမည်ဖြစ်သည်။ မတပ်ဆင်ရသေးသော ဘာသာစကားများကိုလည်း ဖယ်ရှားပေးမည်ဖြစ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | ရရှိနိုင်သော ဘာသာစကားများ။ |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
