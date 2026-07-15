---
id: wu_ses_verification_integration
title: Nzacha - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Nyocha: wu_ses_verification_integration

Nyocha: kwe ka koodu ọzọ nye ihe SES integration.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $integration | `object\|null` | Ihe SES integration, ma ọ bụ null. |

### Kemgbe {#since}

- 2.2.0
### Isi mmalite {#source}

A kọwara ya na [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) na ahịrị 731
