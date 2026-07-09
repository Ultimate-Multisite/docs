---
id: wu_ses_verification_integration
title: Filtro - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtrilo: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filtrilo: permesi al alia kodo provizi la SES-integriĝan objekton.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $integration | `object\|null` | La SES-integriĝa objekto, aŭ null. |

### Ekde {#since}

- 2.2.0
### Fonto {#source}

Difinita en [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ĉe linio 731
