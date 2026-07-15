---
id: wu_ses_verification_integration
title: Shaandheeye - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Shaandheeye: wu_ses_verification_integration

Shaandheeye: u oggolow koodh kale inuu bixiyo walaxda isdhexgalka SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $integration | `object\|null` | Walaxda isdhexgalka SES, ama null. |

### Laga bilaabo {#since}

- 2.2.0
### Isha {#source}

Waxaa lagu qeexay [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) safka 731
