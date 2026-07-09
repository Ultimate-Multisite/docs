---
id: wu_ses_verification_integration
title: فلټر - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: نورو code ته اجازه ورکوي چې د SES ادغام object برابر کړي.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## پاراميټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $integration | `object\|null` | د SES ادغام object، یا null. |

### له نسخې راهیسې

- 2.2.0
### سرچینه

په [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) کې په 731 کرښه تعریف شوی.
