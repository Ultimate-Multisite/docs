---
id: wu_handle_user_meta_fields
title: ક્રિયા - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

પ્લગઇન ડેવલપર્સને જરૂર પડ્યે યુઝર મેટા ડેટા અલગ અલગ રીતે સેવ કરવાની મંજૂરી આપે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | મેટા ફીલ્ડ્સની યાદી, જે key => value સ્ટ્રક્ચરમાં હોય. |
| $user | `\WP_User` | વર્ડપ્રેસ યુઝર ઓબ્જેક્ટ. |
| $customer | `\Customer` | ધ અલ્ટીમેટ મલ્ટિસાઇટ કસ્ટમર ઓબ્જેક્ટ. |
| $checkout | `\Checkout` | ચેકઆઉટ ક્લાસ. |

### Since

- 2.0.4
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
