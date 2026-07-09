---
id: mu_migrationexportuserdata
title: Филтър - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Филтрира стандартната група потребителски данни, които се извеждат или въвеждат.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $custom_user_data | `array` | Масив с потребителски данни, зададени от потребителя. |
| $user | `\WP_User` | Обектът на потребителя. |

### От {#since}

- 0.1.0
### Източник {#source}

- Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) на линия 335
- Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) на линия 147
## Връща {#returns}

Масив с потребителски данни.
