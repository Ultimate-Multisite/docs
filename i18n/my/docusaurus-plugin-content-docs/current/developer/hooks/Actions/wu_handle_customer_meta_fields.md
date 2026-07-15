---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

ပလပ်အင် developer များအနေဖြင့် လိုအပ်ပါက meta data များကို နည်းလမ်းအမျိုးမျိုးဖြင့် သိမ်းဆည်းနိုင်ရန် ခွင့်ပြုပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta field များစာရင်း၊ key => value ပုံစံဖြင့် စီစဉ်ထားသည်။ |
| $customer | `\Customer` | Ultimate Multisite မှ customer object ဖြစ်သည်။ |
| $checkout | `\Checkout` | checkout class ဖြစ်သည်။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ၏ ၁၂၁၁ လိုင်းတွင် သတ်မှတ်ထားသည်။
