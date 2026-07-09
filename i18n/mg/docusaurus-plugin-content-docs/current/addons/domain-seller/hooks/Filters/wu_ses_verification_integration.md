---
id: wu_ses_verification_integration
title: Sivana - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Sivana: wu_ses_verification_integration {#filter-wusesverificationintegration}

Sivana: avelao ny kaody hafa hanome ny zavatra SES integration.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $integration | `object\|null` | Ny zavatra SES integration, na null. |

### Nanomboka {#since}

- 2.2.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) amin'ny andalana 731
