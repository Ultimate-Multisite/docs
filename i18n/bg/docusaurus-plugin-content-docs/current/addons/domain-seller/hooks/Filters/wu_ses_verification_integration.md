---
id: wu_ses_verification_integration
title: Филтър - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Филтър: wu_ses_verification_integration {#filter-wusesverificationintegration}

Филтър: Позволява на друг код да предостави обекта за интеграция с SES.

Връщаният обект трябва да имплементира: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Обектът за интеграция с SES или null. |

### Since {#since}

- 2.2.0
### Source {#source}

Дефиниран в [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) на линия 731
