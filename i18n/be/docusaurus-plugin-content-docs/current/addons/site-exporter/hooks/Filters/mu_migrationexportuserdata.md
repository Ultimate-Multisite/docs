---
id: mu_migrationexportuserdata
title: Фільтр - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Фільтруе пачатковы набор дадзеных карыстальніка, якія будуць экстрэартаваны/імпартэ.

## Параметры {#parameters}

| Name | Type | Апісан |
|------|------|-------------|
| $custom_user_data | `array` | Массив карыстальніцкіх дадзеных. |
| $user | `\WP_User` | Аб'ект карыстальніка. |

### З {#since}

- 0.1.0
### Выток {#source}

- Вызначаны ў [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) на 335-й кропцы
- Вызначаны ў [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) на 147-й кропцы
## Павяртае {#returns}
Массив дадзеных карыстальніка.
