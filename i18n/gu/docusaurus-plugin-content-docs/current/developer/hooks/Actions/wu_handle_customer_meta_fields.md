---
id: wu_handle_customer_meta_fields
title: ક્રિયા - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

જો પ્લગઇન ડેવલપર્સને જરૂર હોય, તો તેઓ મેટા ડેટાને અલગ-અલગ રીતે સેવ કરી શકે.

## પેરામીટર્સ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | મેટા ફીલ્ડ્સની યાદી, જે key => value સ્ટ્રક્ચરમાં હોય. |
| $customer | `\Customer` | Ultimate Multisite ગ્રાહક ઓબ્જેક્ટ. |
| $checkout | `\Checkout` | ચેકઆઉટ ક્લાસ. |

### ક્યારથી {#since}

- 2.0.0
### સ્ત્રોત {#source}

[inc/checkout/class-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) માં લાઇન 1211 પર વ્યાખ્યાયિત છે.
