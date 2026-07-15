---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ఒక డొమైన్ విజయవంతంగా రిజిస్టర్ అయిన తర్వాత ఇది పనిచేస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | రిజిస్ట్రేషన్‌ను ప్రేరేపించిన చెల్లింపు (payment). |
| $registration_data | `array&lt;string,mixed&gt;` | రిజిస్ట్రేషన్ మెటాడేటా (domain_name, provider_id, years, expiry_date, మొదలైనవి). |
| $result | `array&lt;string,mixed&gt;` | రిజిస్ట్రార్ ద్వారా తిరిగి ఇవ్వబడిన ముడి ఫలిత శ్రేణి (raw result array). |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204
