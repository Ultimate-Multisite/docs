---
id: wu_ses_verification_integration
title: Фільтр - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: дазваляе іншыму каду прадастаўляць аб'ект інтэграцыі SES.

Павернуты аб'ект павінен рэалізаваць: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $integration | `object\|null` | Аб'ект інтэграцыі SES або `null`. |

### З {#since}

- 2.2.0
### Шторышча {#source}

Вызначаны ў [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) у 731-й пасылцы.
