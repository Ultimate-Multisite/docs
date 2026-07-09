---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

သတ်မှတ်ထားတဲ့ စာမျက်နှာတစ်ခုကို ပြသပြီးတဲ့အခါမှာ အလုပ်လုပ်တဲ့ Action တစ်ခု ဖြစ်ပါတယ်။

**အသုံးပြုပုံ:** ဒီနေရာမှာပါတဲ့ ပြောင်းလဲနိုင်တဲ့ အပိုင်းကို တကယ်ရှိတဲ့ စာမျက်နှာ ID နဲ့ အစားထိုးရပါမယ်။ ဥပမာအားဖြင့်၊ `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);` ကို အသုံးပြုနိုင်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | စာမျက်နှာရဲ့ ID ဖြစ်ပါတယ်။ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ရဲ့ အကောင်အထည်ဖော်မှု (instance) ဖြစ်ပါတယ်။ |

### Since {#since}

- 1.8.2
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ၏ ၃၉၄ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
