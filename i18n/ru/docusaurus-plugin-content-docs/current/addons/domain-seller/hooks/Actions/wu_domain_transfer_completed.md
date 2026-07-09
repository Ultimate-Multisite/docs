---
id: wu_domain_transfer_completed
title: Действие - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Срабатывает после завершения передачи домена.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Объект домена. |
| $transfer_data | `array` | Данные о завершении передачи. |

### Начиная с {#since}

- 2.1.0
### Источник {#source}

Определен в [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) в строке 690
