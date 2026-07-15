---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

在匯出自訂使用者資料之前觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | 使用者資料陣列。 |
| $user | `\WP_User` | 使用者物件。 |

### 自 {#since}

- 0.1.0
### 來源 {#source}

定義於 [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) 第 139 行
