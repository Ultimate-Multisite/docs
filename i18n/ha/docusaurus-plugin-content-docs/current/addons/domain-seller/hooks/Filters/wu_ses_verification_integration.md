---
id: wu_ses_verification_integration
title: Tace - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Tacewa: wu_ses_verification_integration {#filter-wusesverificationintegration}

Tacewa: ba da damar wani code ya samar da SES integration object.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES integration object, ko null. |

### Tun daga {#since}

- 2.2.0
### Tushe {#source}

An ayyana a cikin [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) a layi na 731
