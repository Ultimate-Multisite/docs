---
id: mu_migrationimportusercustom_data_after
title: Дејство - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Се активира по извезувањето на приспособените кориснички податоци.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $user_data | `array` | Низата со кориснички податоци. |
| $user | `\WP_User` | Корисничкиот објект. |

### Од верзија {#since}

- 0.1.0
### Извор {#source}

Дефинирано во [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) на линија 165
