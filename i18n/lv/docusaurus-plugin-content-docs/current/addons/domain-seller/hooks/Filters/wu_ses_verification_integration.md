---
id: wu_ses_verification_integration
title: Filtrs - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtrs: wu_ses_verification_integration

Filtrs: ļauj citam kodam nodrošināt SES integrācijas objektu.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $integration | `object\|null` | SES integrācijas objekts vai null. |

### Kopš {#since}

- 2.2.0
### Avots {#source}

Definēts [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) 731. rindā
