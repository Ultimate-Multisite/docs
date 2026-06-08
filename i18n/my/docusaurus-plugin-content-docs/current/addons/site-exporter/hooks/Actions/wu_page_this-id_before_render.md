---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

သတ်မှတ်ထားတဲ့ စာမျက်နှာတစ်ခုကို ပြသခါနီးမှာ အလုပ်လုပ်ပါတယ်။

Usage: ဒီနေရာက ပြောင်းလဲနိုင်တဲ့ အပိုင်းကို တကယ်ရှိတဲ့ စာမျက်နှာ ID နဲ့ အစားထိုးရပါမယ်။ ဥပမာအားဖြင့်၊ `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);` ကို အသုံးပြုနိုင်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | စာမျက်နှာရဲ့ ID ကို ဆိုလိုပါတယ်။ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ရဲ့ အကောင်အထည်ဖော်မှု (instance) ကို ဆိုလိုပါတယ်။ |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) at line 368
