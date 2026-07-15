---
id: mu_migrationexportuserdata
title: Фільтр - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Фільтрує стандартний набір даних користувача, які будуть експортовані/імпортовані.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Масив даних користувача, який ви налаштували. |
| $user | `\WP_User` | Об'єкт користувача. |

### Since {#since}

- 0.1.0
### Source {#source}

- Визначено в [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) у рядку 335
- Визначено в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) у рядку 147
## Returns {#returns}
Масив даних користувача.
