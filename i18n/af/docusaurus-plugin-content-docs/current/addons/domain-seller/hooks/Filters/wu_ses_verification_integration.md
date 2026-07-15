---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: laat ander kode die SES-integrasie-objek verskaf.

Die geretourneerde objek moet implementeer: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $integration | `object\|null` | Die SES-integrasie-objek, of null. |

### Sedert {#since}

- 2.2.0
### Bron {#source}

Bepaald in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) op lyn 731
