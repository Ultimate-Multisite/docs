---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: lar annen kode gi SES-integrasjonsobjektet.

Det returnerte objektet må implementere: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $integration | `object\|null` | SES-integrasjonsobjektet, eller null. |

### Siden {#since}

- 2.2.0
### Kilde {#source}

Definert i [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) på linje 731
