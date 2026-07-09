---
id: wu_domain_registration_failed
title: Veprim - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Veprimi: wu_domain_registration_failed

Niset pasi dështon një përpjekje për regjistrimin e një domain-i.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pagesa që shkaktoi regjistrimin. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata e regjistrimit, duke përfshirë status=failed dhe error_message. |
| $error_message | `string` | Mesazh gabimi i lexueshëm për njerëzit nga regjistruesi. |

### Që nga

- 2.0.0
### Burimi

Përcaktuar në [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) në rreshtin 1250
