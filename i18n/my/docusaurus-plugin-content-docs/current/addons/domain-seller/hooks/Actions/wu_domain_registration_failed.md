---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ဒိုမိန်း မှတ်ပုံတင်မှု ကြိုးစားမှု ပျက်ကွက်ပြီးနောက် အလုပ်လုပ်သည့် Action တစ်ခု ဖြစ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | မှတ်ပုံတင်မှု ဖြစ်ပေါ်စေသည့် ငွေပေးချေမှု (payment)။ |
| $registration_data | `array&lt;string,mixed&gt;` | အခြေအနေ (status=failed) နှင့် အမှားစာ (error_message) အပါအဝင် မှတ်ပုံတင်မှု အချက်အလက် အပိုများ (metadata)။ |
| $error_message | `string` | ဒိုမိန်း မှတ်ပုံတင်ပေးသူ (registrar) မှ ပေးပို့သော လူသားများ နားလည်နိုင်သည့် အမှားစာ။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ၏ ၁၂၅၀ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
