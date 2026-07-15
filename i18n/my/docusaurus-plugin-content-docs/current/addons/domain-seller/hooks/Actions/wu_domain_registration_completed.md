---
id: wu_domain_registration_completed
title: လုပ်ဆောင်ချက် - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ဒိုမိန်တစ်ခု အောင်မြင်စွာ မှတ်ပုံတင်ပြီးသည့်အခါ အလုပ်လုပ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | မှတ်ပုံတင်ခြင်းကို ဖြစ်ပေါ်စေသည့် ငွေပေးချေမှု။ |
| $registration_data | `array&lt;string,mixed&gt;` | မှတ်ပုံတင်ခြင်းဆိုင်ရာ အချက်အလက်များ (domain_name, provider_id, years, expiry_date စသည်တို့။)။ |
| $result | `array&lt;string,mixed&gt;` | မှတ်ပုံတင်သူ (registrar) က ပြန်ပေးလိုက်တဲ့ အစစ်အမှန် ရလဒ် array။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ၏ ၁၂၀၄ လိုင်းတွင် သတ်မှတ်ထားသည်။
