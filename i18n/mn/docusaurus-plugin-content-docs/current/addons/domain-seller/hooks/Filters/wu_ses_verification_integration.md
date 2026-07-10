---
id: wu_ses_verification_integration
title: Шүүлтүүр - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Шүүлтүүр: wu_ses_verification_integration {#filter-wusesverificationintegration}

Шүүлтүүр: өөр кодод SES интеграцийн объектыг өгөхийг зөвшөөрнө.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $integration | `object\|null` | SES интеграцийн объект, эсвэл null. |

### Хойш {#since}

- 2.2.0
### Эх сурвалж {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731)-д 731-р мөрөнд тодорхойлсон.
