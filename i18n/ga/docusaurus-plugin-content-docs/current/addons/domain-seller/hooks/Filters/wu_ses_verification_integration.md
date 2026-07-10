---
id: wu_ses_verification_integration
title: Scagaire - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Scagaire: wu_ses_verification_integration {#filter-wusesverificationintegration}

Scagaire: ceadaigh do chód eile an réad comhtháthaithe SES a sholáthar.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $integration | `object\|null` | An réad comhtháthaithe SES, nó null. |

### Ó {#since}

- 2.2.0
### Foinse {#source}

Sainmhínithe in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ag líne 731
