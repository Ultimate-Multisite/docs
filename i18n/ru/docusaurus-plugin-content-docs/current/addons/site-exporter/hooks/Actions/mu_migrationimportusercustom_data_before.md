---
id: mu_migrationimportusercustom_data_before
title: Действие - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Действие: mu_migration/import/user/custom_data_before

Вызывается перед экспортом пользовательских данных пользователя.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Массив пользовательских данных. |
| $user | `\WP_User` | Объект пользователя. |

### С версии

- 0.1.0

### Источник

Определено в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) на строке 139
