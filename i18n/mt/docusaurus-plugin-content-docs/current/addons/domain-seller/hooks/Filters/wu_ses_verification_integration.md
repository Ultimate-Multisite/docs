---
id: wu_ses_verification_integration
title: Filtru - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtru: wu_ses_verification_integration

Filtru: ippermetti lil kodiċi ieħor jipprovdi l-oġġett ta' integrazzjoni SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $integration | `object\|null` | L-oġġett ta' integrazzjoni SES, jew null. |

### Minn {#since}

- 2.2.0
### Sors {#source}

Definit fi [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) fil-linja 731
