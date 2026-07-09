---
id: mu_migrationimportusercustom_data_after
title: Акција - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Радња: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Окида се након извоза прилагођених корисничких података.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $user_data | `array` | Низ корисничких података. |
| $user | `\WP_User` | Кориснички објекат. |

### Од верзије {#since}

- 0.1.0
### Извор {#source}

Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) у реду 165
