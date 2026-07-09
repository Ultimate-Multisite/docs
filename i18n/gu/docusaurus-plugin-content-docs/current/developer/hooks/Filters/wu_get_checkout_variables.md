---
id: wu_get_checkout_variables
title: ફિલ્ટર - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

પ્લગઇન ડેવલપર્સને ચેકઆઉટ પેજની પ્રી-સેટ (pre-sets) ને ફિલ્ટર કરવાની મંજૂરી આપે છે.

સાવચેત રહો, જો કોઈ કી (key) ખૂટે તો તે ફ્રન્ટ-એન્ડ પરના આખા ચેકઆઉટને બગાડી શકે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | સ્થાનિકીકૃત (Localized) વેરીએબલ્સ. |
| $checkout | `\Checkout` | ચેકઆઉટ ક્લાસ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) માં લાઇન 1970 પર વ્યાખ્યાયિત છે.

## Returns {#returns}
નવા વેરીએબલ્સ એરે (array).
