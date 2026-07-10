---
id: wu_ses_verification_integration
title: Фільтр - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Фільтр: wu_ses_verification_integration {#filter-wusesverificationintegration}

Фільтр: дозволяє іншому коду надавати об'єкт інтеграції SES.

Повернений об'єкт повинен реалізовувати: - `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error` - `check_domain_verification(string $domain): array{verified: bool}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Об'єкт інтеграції SES або `null`. |

### Since {#since}

- 2.2.0
### Source {#source}

Визначено в [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) на рядку 731
