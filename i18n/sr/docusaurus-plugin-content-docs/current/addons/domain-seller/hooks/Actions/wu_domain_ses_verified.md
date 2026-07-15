---
id: wu_domain_ses_verified
title: Радња - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

Покреће се када SES потврди да је домен DKIM-верификован.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Објекат домена. |

### Од верзије {#since}

- 2.2.0
### Извор {#source}

Дефинисано у [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) у линији 480
