---
id: wu_page_after_render
title: လုပ်ဆောင်ချက် - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: 77cf47ec19b13c20beb0aa2d61dcf857
---
# Action: wu_page_after_render {#action-wupageafterrender}

စာမျက်နှာတစ်ခုကို render လုပ်ပြီးတဲ့အခါမှာ အလုပ်လုပ်တဲ့ Action တစ်ခု ဖြစ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | စာမျက်နှာရဲ့ ID ကို ဆိုလိုပါတယ်။ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page အရာဝတ္ထု (instance) ကို ဆိုလိုပါတယ်။ |

### Since {#since}

- 1.8.2
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L382) ၏ ၃၈၂ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
