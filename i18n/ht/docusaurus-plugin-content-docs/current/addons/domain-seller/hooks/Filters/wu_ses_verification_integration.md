---
id: wu_ses_verification_integration
title: Filtè - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtè: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filtè: pèmèt lòt code bay objè entegrasyon SES la.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $integration | `object\|null` | Objè entegrasyon SES la, oswa null. |

### Depi {#since}

- 2.2.0
### Sous {#source}

Defini nan [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) nan liy 731
