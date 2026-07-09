---
id: wu_ses_verification_integration
title: Pansala - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: tugoti ang ubang code nga mohatag sa SES integration object.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $integration | `object\|null` | Ang SES integration object, o null. |

### Sukad

- 2.2.0
### Tinubdan

Gidepina sa [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) sa linya 731
