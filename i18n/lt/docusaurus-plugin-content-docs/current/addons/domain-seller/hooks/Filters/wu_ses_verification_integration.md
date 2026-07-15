---
id: wu_ses_verification_integration
title: Filtras - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtras: wu_ses_verification_integration

Filtras: leidžia kitam kodui pateikti SES integracijos objektą.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $integration | `object\|null` | SES integracijos objektas arba null. |

### Nuo {#since}

- 2.2.0
### Šaltinis {#source}

Apibrėžta [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) 731 eilutėje
