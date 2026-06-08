---
id: wu_domain_registration_completed
title: ક્રિયા - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

જ્યારે કોઈ ડોમેન સફળતાપૂર્વક રજીસ્ટર થઈ જાય, ત્યારે આ action ફાયર થાય છે.

## પેરામીટર્સ

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | જે પેમેન્ટને કારણે રજીસ્ટ્રેશન થયું. |
| $registration_data | `array&lt;string,mixed&gt;` | રજીસ્ટ્રેશન મેટાડેટા (domain_name, provider_id, years, expiry_date, વગેરે). |
| $result | `array&lt;string,mixed&gt;` | રજિસ્ટ્રાર દ્વારા પાછું મળેલ કાચો (raw) result array. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204
