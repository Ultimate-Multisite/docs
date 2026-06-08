---
id: wu_ses_verification_integration
title: ફિલ્ટર - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

ફિલ્ટર: અન્ય કોડને SES ઇન્ટિગ્રેશન ઓબ્જેક્ટ પ્રદાન કરવાની મંજૂરી આપે છે.

પાછા મળતો ઓબ્જેક્ટ નીચેની વસ્તુઓ લાગુ (implement) કરવો જોઈએ: - `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error` - `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## પેરામીટર્સ

| નામ | પ્રકાર | વર્ણન |
|------|------|-------------|
| $integration | `object\|null` | SES ઇન્ટિગ્રેશન ઓબ્જેક્ટ, અથવા null. |

### થી

- 2.2.0
### સ્ત્રોત

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) માં લાઇન 731 પર વ્યાખ્યાયિત છે
