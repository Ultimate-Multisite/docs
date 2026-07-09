---
id: wu_ses_verification_integration
title: Filtr - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtr: wu_ses_verification_integration

Filtr: boshqa kodga SES integratsiya obyektini taqdim etishga ruxsat beradi.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $integration | `object\|null` | SES integratsiya obyekti yoki null. |

### Dan beri

- 2.2.0
### Manba

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) faylida 731-qatorda aniqlangan
