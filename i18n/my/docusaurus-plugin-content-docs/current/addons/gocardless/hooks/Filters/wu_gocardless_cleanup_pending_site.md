---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ပယ်ဖျက်ထားသော GoCardless အဖွဲ့ဝင်မှုအတွက် ပိုင်ရှင်မဲ့ (orphaned) pending site တစ်ခုကို ဖျက်ခြင်းမပြုမီ အသုံးပြုသည့် filter ဖြစ်သည်။

ဤ filter မှ `false` ကို ပြန်ပေးခြင်းဖြင့် ဖျက်ခြင်းကို တားဆီးနိုင်သည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | pending site ၏ WordPress blog ID ဖြစ်သည်။ |
| $membership | `\WP_Ultimo\Models\Membership` | ပယ်ဖျက်ထားသော အဖွဲ့ဝင်မှု (cancelled membership) ဖြစ်သည်။ |
| $old_status | `string` | ပယ်ဖျက်ခြင်းမပြုမီက အခြေအနေ (status) ဖြစ်သည်။ |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ၏ ၁၀၈၆ လိုင်းတွင် သတ်မှတ်ထားသည်။
