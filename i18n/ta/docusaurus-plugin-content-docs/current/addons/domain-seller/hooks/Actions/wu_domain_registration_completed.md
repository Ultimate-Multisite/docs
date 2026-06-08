---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ஒரு டொமைன் வெற்றிகரமாகப் பதிவு செய்யப்பட்ட பிறகு இது தூண்டப்படுகிறது.

## அளவுருக்கள் (Parameters)

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | பதிவைத் தூண்டிய பணம் செலுத்துதல் (payment). |
| $registration_data | `array&lt;string,mixed&gt;` | பதிவு மெட்டாடேட்டா (domain_name, provider_id, years, expiry_date போன்றவை). |
| $result | `array&lt;string,mixed&gt;` | பதிவாளரால் (registrar) திரும்ப அனுப்பப்பட்ட மூல முடிவு அணி (raw result array). |

### இருந்தே (Since)

- 2.0.0
### மூலம் (Source)

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) என்ற கோப்பில் 1204 வரியில் வரையறுக்கப்பட்டுள்ளது.
