---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

જ્યારે ડોમેન રજીસ્ટ્રેશન કરવાનો પ્રયાસ નિષ્ફળ જાય ત્યારે આ એક્શન ફાયર થાય છે.

## પેરામીટર્સ {#parameters}

| Name | Type | વર્ણન |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | જે પેમેન્ટને કારણે રજીસ્ટ્રેશન થયું હતું. |
| $registration_data | `array<string,mixed>` | રજીસ્ટ્રેશન મેટાડેટા, જેમાં status=failed અને error_message શામેલ છે. |
| $error_message | `string` | રજિસ્ટ્રાર તરફથી વાંચી શકાય તેવું (human-readable) એરર મેસેજ. |

### ક્યારથી {#since}

- 2.0.0
### સ્ત્રોત {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) માં લાઇન 1250 પર વ્યાખ્યાયિત છે.
