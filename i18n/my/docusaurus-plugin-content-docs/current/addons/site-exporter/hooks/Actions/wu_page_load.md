---
id: wu_page_load
title: လုပ်ဆောင်ချက် - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

ပလပ်အင် developer တွေအနေနဲ့ ကျွန်တော်တို့ရဲ့ စာမျက်နှာတွေမှာ အပို hook တွေ ထည့်သွင်းနိုင်အောင် လုပ်ပေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဒီစာမျက်နှာရဲ့ ID ပါ။ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ဒီစာမျက်နှာအတွက် ဖန်တီးပေးလိုက်တဲ့ hook ပါ။ |

### စတင်ချိန် {#since}

- 1.8.2
### ရင်းမြစ် {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) ၏ ၂၈၉ လိုင်းတွင် သတ်မှတ်ထားသည်။
