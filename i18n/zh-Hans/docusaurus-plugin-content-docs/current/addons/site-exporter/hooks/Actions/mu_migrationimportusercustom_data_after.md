---
id: mu_migrationimportusercustom_data_after
title: ''
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

在导出自定义用户数据后触发。

## Parameters {#parameters}

| 名称 | 类型 | 描述 |
|------|------|------|
| $user_data | `array` | 用户数据数组。 |
| $user | `\WP_User` | 用户对象。 |

### Since {#since}

- 0.1.0

### Source {#source}

定义于 [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) 在第 165 行
