---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

cross-domain single-sign-on လုပ်ဆောင်နိုင်မှု (capability) ကို ဖွင့်/ပိတ် လုပ်ရန်။

ဒီတန်ဖိုးကို စစ်ထုတ်ခြင်းအားဖြင့် single-sign-on ကို လုံးဝပိတ်ထားနိုင်သလို၊ အခြေအနေပေါ်မူတည်ပြီးသာ ဖွင့်ထားနိုင်အောင်လည်း လုပ်ဆောင်နိုင်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO ကို ဖွင့်ထားသင့်သလား။ ဖွင့်ရန်အတွက် `True`၊ ပိတ်ရန်အတွက် `false` ကို သုံးပါ။ |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) ၏ ၁၁၀ လိုင်းတွင် သတ်မှတ်ထားသည်။


## Returns {#returns}
SSO ကို ဖွင့်ထားခြင်း ရှိမရှိ။
