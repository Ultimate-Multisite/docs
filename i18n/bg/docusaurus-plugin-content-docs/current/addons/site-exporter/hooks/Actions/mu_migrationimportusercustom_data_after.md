---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Изпълнява се след експортирането на специалните данни на потребителя.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $user_data | `array` | Масивът с данните на потребителя. |
| $user | `\WP_User` | Обектът на потребителя. |

### От версия

- 0.1.0
### Източник

Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) на линия 165
