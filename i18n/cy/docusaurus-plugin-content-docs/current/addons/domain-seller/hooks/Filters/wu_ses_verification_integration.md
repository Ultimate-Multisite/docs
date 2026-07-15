---
id: wu_ses_verification_integration
title: Hidlydd - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Hidlydd: wu_ses_verification_integration

Hidlydd: caniatáu i god arall ddarparu gwrthrych integreiddio SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $integration | `object\|null` | Gwrthrych integreiddio SES, neu null. |

### Ers {#since}

- 2.2.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ar linell 731
