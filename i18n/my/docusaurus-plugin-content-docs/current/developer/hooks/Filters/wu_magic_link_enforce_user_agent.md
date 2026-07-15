---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

User agent စစ်ဆေးခြင်းကို အတင်းအကျပ် လုပ်ဆောင်စေမလားဆိုတာကို စစ်ထုတ်ပေးတဲ့ filter တစ်ခု ဖြစ်ပါတယ်။

ဒီကို `false` လို့ သတ်မှတ်လိုက်ရင် tokens တွေဟာ ဘရောက်ဆာအမျိုးမျိုး၊ စက်ပစ္စည်းအမျိုးမျိုးမှာ အလုပ်လုပ်နိုင်မှာ ဖြစ်ပါတယ်။ ဒါက လုံခြုံရေးကို နည်းပါးစေပေမဲ့ အသုံးပြုရလွယ်ကူမှုကိုတော့ တိုးစေပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | User agent ကို ကိုက်ညီမှုရှိမရှိ အတင်းအကျပ် စစ်ဆေးမလား။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
