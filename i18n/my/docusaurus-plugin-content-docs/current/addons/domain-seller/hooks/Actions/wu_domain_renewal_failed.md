---
id: wu_domain_renewal_failed
title: လုပ်ဆောင်ချက် - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

ဒိုမိန်းသက်တမ်းတိုးရန် ကြိုးပမ်းမှုတစ်ခု ပျက်ကွက်သွားသည့်အခါ ဤ Action သည် အလုပ်လုပ်ပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | သက်တမ်းတိုးခြင်းကို ဖြစ်ပေါ်စေသည့် ငွေပေးချေမှု။ |
| $renewal_data | `array<string,mixed>` | သက်တမ်းတိုးခြင်းဆိုင်ရာ အချက်အလက်များ (domain_name, years စသည်)။ |
| $error_message | `string` | မှတ်ပုံတင်အဖွဲ့ (registrar) မှ ရရှိသော လူသားများဖတ်နိုင်သည့် အမှားစာသား။ |

### Since

- 2.0.0
### Source

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ၏ ၆၃၀ လိုင်းတွင် သတ်မှတ်ထားသည်။
