---
id: wu_ses_verification_integration
title: Filtrum - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtrum: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filtrum: sine alii codici obiectum integrationis SES praebere.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $integration | `object\|null` | Obiectum integrationis SES, aut nullum. |

### Inde a {#since}

- 2.2.0
### Fons {#source}

Definitum in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ad lineam 731
