---
id: wu_ses_verification_integration
title: مُصَفِّي - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

فلتر: يسمح للكود الآخر بتوفير كائن تكامل SES.

يجب أن يطبق الكائن المُعاد ما يلي:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## المعاملات {#parameters}

| Name | Type | الوصف |
|------|------|-------------|
| $integration | `object\|null` | كائن تكامل SES، أو `null`. |

### منذ {#since}

- 2.2.0
### المصدر {#source}

مُعرّف في [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) في السطر 731
