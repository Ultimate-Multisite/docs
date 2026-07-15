---
id: mu_migrationexportuserdata
title: 过滤器 - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

筛选要导出/导入的默认用户数据集。

## 参数 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | 自定义用户数据数组。 |
| $user | `\WP_User` | 用户对象。 |

### 自从 {#since}

- 0.1.0
### 来源 {#source}

- 定义于 [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) 第 335 行
- 定义于 [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) 第 147 行
## 返回 {#returns}
数组数据用户。
