---
id: wu_domain_ses_verified
title: Дія - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Дія: wu_domain_ses_verified

Виконується, коли SES підтверджує, що домен верифіковано за допомогою DKIM.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Об'єкт домену. |

### З версії {#since}

- 2.2.0
### Джерело {#source}

Визначено у [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) на рядку 480
