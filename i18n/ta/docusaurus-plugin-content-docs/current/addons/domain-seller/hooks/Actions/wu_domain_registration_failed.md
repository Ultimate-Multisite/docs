---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

டொமைன் பதிவு முயற்சி தோல்வியடையும்போது இது தூண்டப்படுகிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | பதிவைத் தூண்டிய பணம் செலுத்தும் விவரம் (payment). |
| $registration_data | `array<string,mixed>` | நிலை (status=failed) மற்றும் பிழைச் செய்தி (error_message) உட்பட பதிவு மெட்டாடேட்டா (metadata). |
| $error_message | `string` | பதிவாளரிடமிருந்து (registrar) பெறப்பட்ட மனிதர்கள் படிக்கக்கூடிய பிழைச் செய்தி. |

### எப்போது இருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) என்ற கோப்பில் 1250 வரியில் வரையறுக்கப்பட்டுள்ளது.
