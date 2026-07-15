---
id: wu_domain_ses_verified
title: Дејство - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

Се активира кога SES потврдува дека домен е DKIM-верификуван.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Објектот на доменот. |

### Од верзија {#since}

- 2.2.0
### Извор {#source}

Дефинирано во [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) на линија 480
