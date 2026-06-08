---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Виконується перед експортом користувацьких даних користувача.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $user_data | `array` | Масив даних користувача. |
| $user | `\WP_User` | Об'єкт користувача. |

### З версії

- 0.1.0
### Джерело

Визначено в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) на рядку 139
