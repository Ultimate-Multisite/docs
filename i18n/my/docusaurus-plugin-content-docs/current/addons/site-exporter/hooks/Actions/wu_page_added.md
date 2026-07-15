---
id: wu_page_added
title: လုပ်ဆောင်ချက် - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

စာမျက်နှာများ မှတ်ပုံတင်သည့်အခါ ပလပ်အင် ဖန်တီးသူများ အပိုအလိုအလျောက် လုပ်ဆောင်မှုများ လုပ်ခိုင်းနိုင်စေရန်။

`wu_page_load` ကဲ့သို့ သီးသန့်စာမျက်နှာတစ်ခုကို ကြည့်ရှုနေချိန်မှာသာ အလုပ်လုပ်တာ မဟုတ်ဘဲ၊ ဒီ hook ကတော့ WP Ultimo code ကို အသုံးပြုပြီး ထည့်သွင်းလိုက်တဲ့ အုပ်ချုပ်မှုစာမျက်နှာတိုင်းမှာ မှတ်ပုံတင်ချိန်မှာ အလုပ်လုပ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဤစာမျက်နှာ၏ ID ကို ရည်ညွှန်းသည်။ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဤစာမျက်နှာအတွက် ဖန်တီးပေးလိုက်သော hook ကို ရည်ညွှန်းသည်။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
