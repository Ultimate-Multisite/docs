---
id: wu_ses_verification_integration
title: Isihluzi - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Isihluzi: wu_ses_verification_integration

Isihluzi: vumela enye ikhowudi ukuba ibonelele ngento yokudityaniswa kwe-SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $integration | `object\|null` | Into yokudityaniswa kwe-SES, okanye null. |

### Ukususela {#since}

- 2.2.0
### Umthombo {#source}

Ichazwe kwi-[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) kumgca 731
