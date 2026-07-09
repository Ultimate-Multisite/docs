---
id: mu_migrationimportusercustom_data_before
title: Радња - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Акција: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

Покреће се пре извоза прилагођених корисничких података.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $user_data | `array` | Низ корисничких података. |
| $user | `\WP_User` | Кориснички објекат. |

### Од верзије {#since}

- 0.1.0
### Извор {#source}

Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) у реду 139
