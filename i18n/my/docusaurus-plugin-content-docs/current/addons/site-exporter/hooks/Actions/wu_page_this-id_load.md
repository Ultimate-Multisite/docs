---
id: wu_page_this-id_load
title: 'လုပ်ဆောင်ချက် - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

ပလပ်အင် developer တွေဟာ သတ်မှတ်ထားတဲ့ စာမျက်နှာတစ်ခုမှာ အပို hook တွေ ထည့်သွင်းနိုင်ဖို့ ခွင့်ပြုပါတယ်။

Usage: ဒီနေရာက dynamic အပိုင်းကို တကယ်ရှိတဲ့ page id နဲ့ အစားထိုးရပါမယ်။ ဥပမာအားဖြင့်၊ `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);` ကို အသုံးပြုနိုင်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဒီစာမျက်နှာရဲ့ ID ကို ရည်ညွှန်းပါတယ်။ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဒီစာမျက်နှာအတွက် ဖန်တီးပေးလိုက်တဲ့ hook ကို ရည်ညွှန်းပါတယ်။ |

### Since

- 1.8.2
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) တွင် ၃၀၁ လိုင်း၌ သတ်မှတ်ထားသည်။
