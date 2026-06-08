---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Domain တစ်ခု အောင်မြင်စွာ သက်တမ်းတိုးပြီးနောက် ပစ်လွှတ်သည့် action တစ်ခု ဖြစ်ပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | သက်တမ်းတိုးခြင်းကို ဖြစ်ပေါ်စေသည့် ငွေပေးချေမှု။ |
| $renewal_data | `array&lt;string,mixed&gt;` | သက်တမ်းတိုးခြင်းဆိုင်ရာ အချက်အလက်များ (domain_name, years, customer_id စသည်)။ |
| $result | `array&lt;string,mixed&gt;` | မှတ်ပုံတင်ဌာနမှ ပြန်ပေးသည့်၊ နောက်ဆုံးသက်တမ်းကုန်ဆုံးရက် (expiry_date) အပါအဝင် အစစ်အမှန်ရလဒ် အကွက်စာရင်း။ |

### Since

- 2.0.0
### Source

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ၏ ၅၉၄ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
