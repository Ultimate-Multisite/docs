---
id: wu_ses_verification_integration
title: Saringan - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: idinan kode séjén nyadiakeun objék integrasi SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Objék integrasi SES, atawa null. |

### Ti mimiti {#since}

- 2.2.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) dina garis 731
