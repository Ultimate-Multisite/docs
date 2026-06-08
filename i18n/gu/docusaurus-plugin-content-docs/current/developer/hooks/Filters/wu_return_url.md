---
id: wu_return_url
title: ફિલ્ટર - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ડેવલપર્સને ચેકઆઉટ પ્રક્રિયાઓ પછી ઉપયોગમાં લેવાતા ગેટવેના રીટર્ન URL માં ફેરફાર કરવાની મંજૂરી આપે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | પ્રક્રિયા પછી રીડાયરેક્ટ થવાનો URL. |
| $gateway | `self` | ગેટવેનું ઇન્સ્ટન્સ. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite પેમેન્ટનું ઇન્સ્ટન્સ. |
| $cart | `\WP_Ultimo\Checkout\Cart` | વર્તમાન Ultimate Multisite cart ઓર્ડર. |

### Since

- 2.0.20
### Source

[inc/gateways/class-base-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) માં લાઇન 683 પર વ્યાખ્યાયિત છે.


## Returns
