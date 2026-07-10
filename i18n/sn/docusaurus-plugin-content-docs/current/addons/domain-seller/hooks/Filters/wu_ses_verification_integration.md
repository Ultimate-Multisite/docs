---
id: wu_ses_verification_integration
title: Sefa - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Sefa: wu_ses_verification_integration {#filter-wusesverificationintegration}

Sefa: bvumira imwe code kuti ipe SES integration object.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paramita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $integration | `object\|null` | SES integration object, kana null. |

### Kubva {#since}

- 2.2.0
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) pamutsetse 731
