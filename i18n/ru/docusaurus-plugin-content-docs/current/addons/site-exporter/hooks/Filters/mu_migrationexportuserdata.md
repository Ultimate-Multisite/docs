---
id: mu_migrationexportuserdata
title: Фильтр — mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Фильтрует стандартный набор данных пользователя для экспорта/импорта.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $custom_user_data | `array` | Массив пользовательских данных пользователя. |
| $user | `\WP_User` | Объект пользователя. |

### Начиная с

- 0.1.0
### Исходный код

- Определено в [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) в строке 335
- Определено в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) в строке 147
## Возвращает
Массив данных пользователя.
