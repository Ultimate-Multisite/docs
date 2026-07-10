---
id: wu_ses_verification_integration
title: Filtru - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: permite alt cod să furnizeze obiectul de integrare SES.

Obiectul returnat trebuie să implementeze: - `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error` - `check_domain_verification(string $domain): array{verified: bool}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $integration | `object\|null` | Obiectul de integrare SES, sau null. |

### De la {#since}

- 2.2.0
### Sursă {#source}

Definit în [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) la linia 731
