---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

ஃபில்டர்: SES ஒருங்கிணைப்புப் பொருளை (integration object) மற்ற கோடுகளுக்கு வழங்க இது அனுமதிக்கிறது.

திரும்பப் பெறப்படும் பொருள் (returned object) பின்வரும் முறைகளைச் செயல்படுத்த வேண்டும்:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## அளவுருக்கள் (Parameters)

| Name | Type | விளக்கம் |
|------|------|-------------|
| $integration | `object\|null` | SES ஒருங்கிணைப்புப் பொருள், அல்லது null. |

### எப்போது இருந்து (Since)

- 2.2.0
### மூலம் (Source)

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) இல் 731 வரியில் வரையறுக்கப்பட்டுள்ளது
