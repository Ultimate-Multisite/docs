---
id: wu_ses_verification_integration
title: Sía - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Sía: wu_ses_verification_integration

Sía: leyfir öðrum kóða að útvega SES-samþættingarhlutinn.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $integration | `object\|null` | SES-samþættingarhluturinn, eða null. |

### Frá útgáfu {#since}

- 2.2.0
### Uppruni {#source}

Skilgreint í [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) í línu 731
