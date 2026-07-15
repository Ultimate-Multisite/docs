---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

ငွေရှင်းမှု ပြီးဆုံးပြီးနောက် ဒိုမိန်ဝယ်ယူမှု လုပ်ဆောင်နေစဉ် အလုပ်လုပ်သည့် Action တစ်ခုဖြစ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ငွေပေးချေမှု အရာဝတ္ထု (payment object) ဖြစ်သည်။ |
| $checkout_data | `array<string,mixed>` | စာရင်းသွင်းပုံစံမှ ရရှိသော အပြည့်အစုံ ငွေရှင်းမှု အချက်အလက်များ (full checkout data)။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ၏ ၂၄၆ လိုင်းတွင် သတ်မှတ်ထားသည်။
