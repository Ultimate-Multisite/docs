---
id: mu_migrationimportusercustom_data_after
title: Действие - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Действие: mu_migration/import/user/custom_data_after

Вызывается после экспорта пользовательских данных.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $user_data | `array` | Массив пользовательских данных. |
| $user | `\WP_User` | Объект пользователя. |

### С версии

- 0.1.0
### Источник

Определено в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) на строке 165
