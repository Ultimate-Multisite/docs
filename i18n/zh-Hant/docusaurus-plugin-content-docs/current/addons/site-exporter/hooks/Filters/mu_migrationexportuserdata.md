---
id: mu_migrationexportuserdata
title: 過濾器 - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# 過濾器：mu_migration/export/user/data {#filter-mumigrationexportuserdata}

用來過濾預設的使用者資料，決定哪些資料需要被匯出或匯入。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $custom_user_data | `array` | 包含自訂使用者資料的陣列。 |
| $user | `\WP_User` | 使用者物件。 |

### 適用版本 {#since}

- 0.1.0
### 來源 {#source}

- 定義於 [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) 第 335 行
- 定義於 [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) 第 147 行
## 回傳值 {#returns}
使用者資料陣列。
