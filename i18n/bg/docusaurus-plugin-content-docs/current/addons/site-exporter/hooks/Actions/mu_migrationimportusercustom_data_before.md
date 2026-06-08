---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Изпълнява се преди експортирането на потребителските данни.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $user_data | `array` | Масив с потребителските данни. |
| $user | `\WP_User` | Обектът на потребителя. |

### От

- 0.1.0
### Източник

Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) на ред 139
