---
id: wu_domain_transfer_completed
title: Действие - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Изстрелва се след завършване на прехвърляне на домейн.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Обектът на домейна. |
| $transfer_data | `array` | Данни за завършване на прехвърлянето. |

### От {#since}

- 2.1.0
### Източник {#source}

Дефиниран в [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) на линия 690
