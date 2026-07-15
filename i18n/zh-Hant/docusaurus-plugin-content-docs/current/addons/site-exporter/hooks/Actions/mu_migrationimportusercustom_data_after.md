---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

在匯出自訂使用者資料之後觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | 包含使用者資料的陣列。 |
| $user | `\WP_User` | 使用者物件。 |

### 可用自 {#since}

- 0.1.0
### 來源 {#source}

定義於 [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) 第 165 行
