---
id: wu_ses_verification_integration
title: Saringan - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Saringan: wu_ses_verification_integration

Saringan: ngidini kode liya nyedhiyakake obyek integrasi SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $integration | `object\|null` | Obyek integrasi SES, utawa null. |

### Wiwit {#since}

- 2.2.0
### Sumber {#source}

Ditetepake ing [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ing baris 731
