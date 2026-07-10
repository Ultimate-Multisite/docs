---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: anere Code erlaben, den SES-Integratiounsobjet bereetzestellen.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $integration | `object\|null` | Den SES-Integratiounsobjet, oder null. |

### Zanter {#since}

- 2.2.0
### Quell {#source}

Definéiert an [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) op der Linn 731
