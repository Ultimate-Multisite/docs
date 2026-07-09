---
id: wu_ses_verification_integration
title: Филтер - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Филтер: wu_ses_verification_integration

Филтер: дозволите другом коду да обезбеди SES објекат интеграције.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $integration | `object\|null` | SES објекат интеграције, или null. |

### Од верзије

- 2.2.0
### Извор

Дефинисано у [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) у реду 731
