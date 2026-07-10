---
id: wu_domain_ses_verified
title: Действие - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

Изстрелва се, когато SES потвърди, че домейнът е DKIM-верифициран.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Обектът на домейна. |

### От {#since}

- 2.2.0
### Източник {#source}

Дефиниран в [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) на линия 480
