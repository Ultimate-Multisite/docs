---
id: wu_sso_url
title: စစ်ထုတ်ကိရိယာ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

ဒိုမိန်းအချင်းချင်းဖြတ်၍ ဖောက်သည်လုပ်ဆောင်ချက်များအတွက် ပြန်မပေးမီ ထုတ်ပေးထားသော SSO URL များကို စစ်ထုတ်သည်။

ပေါင်းစည်းမှုတစ်ခုသည် sovereign-tenant SSO လင့်ခ်တွင် ယုံကြည်ရသော အကြောင်းအရာထည့်ရန် သို့မဟုတ် Ultimate Multisite ၏ token အတည်ပြုမှုကို ထိန်းသိမ်းထားလျက် broker URL ကို အစားထိုးရန် လိုအပ်သောအခါ ဤ filter ကို အသုံးပြုပါ။

## ပါရာမီတာများ {#parameters}

| အမည် | အမျိုးအစား | ဖော်ပြချက် |
|------|------|-------------|
| $sso_url | `string` | ထုတ်ပေးထားသော SSO URL။ |
| $user | `WP_User` | SSO ဝင်ရောက်မှုဖြင့် အတည်ပြုခံရမည့် အသုံးပြုသူ။ |
| $site_id | `int` | ဝင်ရောက်ရန် ဦးတည်သော site ID။ |
| $redirect_to | `string` | SSO အတည်ပြုမှု အောင်မြင်ပြီးနောက် သွားရမည့် URL။ |

### စတင်ပါဝင်သောဗားရှင်း {#since}

- 2.13.0

### ရင်းမြစ် {#source}

`inc/sso/class-sso.php` တွင် သတ်မှတ်ထားသည်။


## ပြန်ပေးသည် {#returns}

စစ်ထုတ်ထားသော SSO URL။
