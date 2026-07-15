---
id: wu_domain_transfer_completed
title: Акција - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Се активира откако преносот на домен е завршен.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Објектот на доменот. |
| $transfer_data | `array` | Податоци за завршување на преносот. |

### Од {#since}

- 2.1.0
### Извор {#source}

Дефинирано во [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) на линија 690
