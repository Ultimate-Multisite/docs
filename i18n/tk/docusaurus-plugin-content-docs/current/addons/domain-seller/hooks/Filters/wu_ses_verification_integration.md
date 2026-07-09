---
id: wu_ses_verification_integration
title: Filtr - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: beýleki kodlara SES integrasiýa obýektini bermäge rugsat berýär.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametrler

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES integrasiýa obýekti, ýa-da null. |

### Şondan bäri

- 2.2.0
### Çeşme

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) faýlynda 731-nji setirde kesgitlenildi.
