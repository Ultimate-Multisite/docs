---
id: wu_ses_verification_integration
title: Филтр - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Филтр: wu_ses_verification_integration {#filter-wusesverificationintegration}

Филтр: ба коди дигар иҷозат диҳед, ки объекти ҳамгироии SES-ро пешниҳод кунад.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $integration | `object\|null` | Объекти ҳамгироии SES, ё null. |

### Аз версия {#since}

- 2.2.0
### Манбаъ {#source}

Дар [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) дар сатри 731 муайян шудааст
