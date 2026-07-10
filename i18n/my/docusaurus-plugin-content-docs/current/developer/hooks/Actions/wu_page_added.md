---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

စာမျက်နှာများ မှတ်ပုံတင်သည့်အခါ plugin ရေးသူများ အပိုအလိုအလျောက် လုပ်ဆောင်မှုများ လုပ်ခွင့်ပေးသည်။

`wu_page_load` ကဲ့သို့ သီးသန့်စာမျက်နှာတစ်ခုကို ကြည့်နေချိန်တွင်သာ အလုပ်လုပ်ခြင်းမျိုး မဟုတ်ဘဲ၊ ဤ hook သည် Ultimate Multisite code ကို အသုံးပြု၍ ထည့်သွင်းလိုက်သည့် အုပ်ချုပ်မှုစာမျက်နှာတိုင်းအတွက် မှတ်ပုံတင်ချိန်တွင် အလုပ်လုပ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ဤစာမျက်နှာ၏ ID ကို ဖော်ပြသည်။ |
| $page_hook | `string` | ဤစာမျက်နှာ၏ hook အမည်ကို ဖော်ပြသည်။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ၏ ၂၂၈ လိုင်းတွင် သတ်မှတ်ထားသည်။
