---
id: wu_apply_plan_limits
title: စစ်ထုတ်ခြင်း - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Plugin developer များအနေဖြင့် အကန့်အသတ်များကို ကျော်လွန်သွားစေရန် (short-circuit) ခွင့်ပြုပါသည်။

ဤ filter ကို အသုံးပြုခြင်းဖြင့် အကန့်အသတ်များ မစတင်မီ မည်သည့်ကုဒ်မဆို (arbitrary code) ကို run လုပ်နိုင်ပါသည်။ ဤ filter သည် အမှန်တရားသဘောရှိသော တန်ဖိုး (truthy value) တစ်ခုခုကို ပြန်ပေးပါက လုပ်ငန်းစဉ်သည် ဆက်လက်ဆောင်ရွက်သွားမည်ဖြစ်ပြီး၊ အကယ်၍ အမှားသဘောရှိသော တန်ဖိုး (falsy value) ကို ပြန်ပေးပါက ကုဒ်သည် ရပ်သွားမည်ဖြစ်ပြီး အောက်ပါ hook များ မည်သည့်အရာမျှ run လုပ်မည်မဟုတ်ပါ။

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
