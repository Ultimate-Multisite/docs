---
id: wu_ses_verification_integration
title: Isihlungi - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Isihlungi: wu_ses_verification_integration {#filter-wusesverificationintegration}

Isihlungi: vumela enye code ukuthi ihlinzeke into yokuhlanganiswa kwe-SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $integration | `object\|null` | Into yokuhlanganiswa kwe-SES, noma null. |

### Kusukela {#since}

- 2.2.0
### Umthombo {#source}

Kuchazwe ku-[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) emugqeni 731
