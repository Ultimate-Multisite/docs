---
id: wu_ses_verification_integration
title: Criathrag - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Criathrag: wu_ses_verification_integration {#filter-wusesverificationintegration}

Criathrag: ceadaich do chòd eile an nì amalachaidh SES a thoirt seachad.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $integration | `object\|null` | An nì amalachaidh SES, no null. |

### Bho {#since}

- 2.2.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) aig loidhne 731
