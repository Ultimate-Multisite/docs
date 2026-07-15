---
id: wu_ses_verification_integration
title: Filtr - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: pozwala innemu kodowi dostarczyć obiekt integracji SES.

Zwracany obiekt musi implementować: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Obiekt integracji SES lub `null`. |

### Od {#since}

- 2.2.0
### Źródło {#source}

Zdefiniowane w [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) w linii 731
