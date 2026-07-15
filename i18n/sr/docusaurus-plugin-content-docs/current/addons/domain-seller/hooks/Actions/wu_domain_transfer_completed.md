---
id: wu_domain_transfer_completed
title: Акција - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Радња: wu_domain_transfer_completed

Покреће се након што је пренос домена завршен.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Објекат домена. |
| $transfer_data | `array` | Подаци о завршетку преноса. |

### Од верзије {#since}

- 2.1.0
### Извор {#source}

Дефинисано у [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) у реду 690
