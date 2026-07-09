---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Выклікаецца пасля выхада карыстальніцкіх карыстаных дадзеных.

## Паметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $user_data | `array` | Массив дадзеных карыстальніка. |
| $user | `\WP_User` | Объект карыстальніка. |

### З версіі {#since}

- 0.1.0
### Выклікаецца ў {#source}

Вызначаны ў [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) у 165-й пасылцы.
