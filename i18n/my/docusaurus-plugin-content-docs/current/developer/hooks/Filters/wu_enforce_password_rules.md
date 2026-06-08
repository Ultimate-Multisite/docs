---
id: wu_enforce_password_rules
title: စစ်ထုတ်ခြင်း - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

အပိုဆောင်း စကားဝှက် စည်းကမ်းချက်များ အကောင်အထည်ဖော်ခြင်း ရှိ၊ မရှိ စစ်ထုတ်ပေးသည့် (Filter) လုပ်ဆောင်ချက် ဖြစ်ပါသည်။

ဤ filter သည် မှန်ကန်ပါက အနည်းဆုံး အရှည်နှင့် စာလုံးအမျိုးအစား လိုအပ်ချက်များကို အကောင်အထည်ဖော်ပေးပါသည်။ ၎င်းသည် "Super Strong" စနစ်ကို ရွေးချယ်ထားသည့်အခါ သို့မဟုတ် Defender Pro ၏ Strong Password feature ကို အသုံးပြုနေသည့်အခါ အလိုအလျောက် ဖွင့်ထားပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | အပိုဆောင်း စည်းကမ်းချက်များ အကောင်အထည်ဖော်ရန် လိုအပ်ခြင်း ရှိ၊ မရှိ။ |
| $strength_setting | `string` | စီမံခန့်ခွဲသူ (admin) ၏ သတ်မှတ်ထားသော တန်ဖိုး။ |
| $defender_active | `bool` | Defender Pro Strong Password ကို အသုံးပြုနေခြင်း ရှိ၊ မရှိ။ |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
