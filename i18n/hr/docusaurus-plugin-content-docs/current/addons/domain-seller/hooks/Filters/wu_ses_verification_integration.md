---
id: wu_ses_verification_integration
title: Filtar - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtar: wu_ses_verification_integration

Filtar: dopusti drugom kodu da pruži objekt SES integracije.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $integration | `object\|null` | Objekt SES integracije ili null. |

### Od {#since}

- 2.2.0
### Izvor {#source}

Definirano u [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) u retku 731
