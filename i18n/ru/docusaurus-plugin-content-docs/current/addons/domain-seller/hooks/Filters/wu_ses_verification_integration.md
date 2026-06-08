---
id: wu_ses_verification_integration
title: Фильтр - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Фильтр: wu_ses_verification_integration

Фильтр: позволяет другому коду передать объект интеграции SES.

Возвращаемый объект должен реализовывать:
*   `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error`
*   `check_domain_verification(string $domain): array{verified: bool}\|WP_Error`
*   `delete_identity(string $domain): true\|WP_Error`

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $integration | `object\|null` | Объект интеграции SES или `null`. |

### Начиная с

- 2.2.0
### Источник

Определен в [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) в строке 731
