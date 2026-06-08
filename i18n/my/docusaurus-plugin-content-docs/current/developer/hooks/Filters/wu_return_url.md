---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Developer များအနေဖြင့် Checkout လုပ်ငန်းစဉ်များ ပြီးဆုံးပြီးနောက် အသုံးပြုမည့် Payment gateway ၏ ပြန်လာမည့် URL ကို ပြောင်းလဲခွင့်ပေးပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | လုပ်ငန်းစဉ်ပြီးနောက် ပြန်လည်ညွှန်းပို့မည့် URL။ |
| $gateway | `self` | gateway ၏ အကောင်အထည်ဖော်မှု။ |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ငွေပေးချေမှု အကောင်အထည်ဖော်မှု။ |
| $cart | `\WP_Ultimo\Checkout\Cart` | လက်ရှိ Ultimate Multisite cart မှာယူမှု။ |

### Since

- 2.0.20
### Source

Defined in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) at line 683


## Returns
