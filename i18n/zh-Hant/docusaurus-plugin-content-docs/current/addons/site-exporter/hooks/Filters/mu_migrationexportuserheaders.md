---
id: mu_migrationexportuserheaders
title: 過濾器 - mu_migration/export/user/headers
sidebar_label: mu_migration/export/user/headers
_i18n_hash: 93e90658913589a4b0b6bbb79e7d0be4
---
# 過濾器：mu_migration/export/user/headers

用來過濾預設的用戶標頭（headers），決定哪些標頭需要被匯出或匯入。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $custom_headers | `array` | 用來儲存自訂標頭的陣列。 |

### 適用版本

- 0.1.0
### 來源

定義於 [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L52) 第 52 行


## 回傳值
一個包含資料標頭的陣列。
