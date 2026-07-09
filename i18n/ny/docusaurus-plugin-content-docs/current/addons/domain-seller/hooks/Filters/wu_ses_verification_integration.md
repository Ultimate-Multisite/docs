---
id: wu_ses_verification_integration
title: Fyuluta - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Fyuluta: wu_ses_verification_integration

Fyuluta: lolani code ina kupereka chinthu cha SES integration.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Magawo

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $integration | `object\|null` | Chinthu cha SES integration, kapena null. |

### Kuyambira

- 2.2.0
### Gwero

Yatanthauziridwa mu [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) pa mzere 731
