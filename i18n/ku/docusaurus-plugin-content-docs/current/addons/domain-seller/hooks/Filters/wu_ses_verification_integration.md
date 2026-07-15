---
id: wu_ses_verification_integration
title: Parzûn - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: bihêle koda din objecta entegrasyona SES peyda bike.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $integration | `object\|null` | Objecta entegrasyona SES, an jî null. |

### Ji {#since}

- 2.2.0
### Çavkanî {#source}

Di [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) de li rêza 731 hate diyarkirin.
