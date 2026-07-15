---
id: wu_bypass_unset_current_user
title: စစ်ထုတ်ခြင်း - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Developer တွေအနေနဲ့ လက်ရှိအသုံးပြုနေတဲ့ user ကို ဖျက်ပစ်တဲ့ (unset) ကုတ်ကို ကျော်လွန်ခွင့်ပြုပါတယ်။

`null` မဟုတ်တဲ့ တန်ဖိုးတစ်ခုခုကို ပြန်ပေးလိုက်တာနဲ့ လက်ရှိ login လုပ်ထားတဲ့ user ကို ဖျက်ပစ်တဲ့ လုပ်ဆောင်ချက်ကို ကျော်သွားစေပါတယ်။ ဥပမာအားဖြင့်၊ sub-sites တွေကို admin panel အဖြစ် အသုံးပြုတဲ့ အခြေအနေမျိုးတွေမှာ ဒါဟာ အသုံးဝင်နိုင်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | ဆက်လက်လုပ်ဆောင်ရန် `null` ဖြစ်ရမည်။ အခြားတန်ဖိုးများက ၎င်းကို ကျော်လွန်စေမည်။ |
| $current_user | `false\|\WP_User` | လက်ရှိ user object ဖြစ်ပါတယ်။ |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns {#returns}
