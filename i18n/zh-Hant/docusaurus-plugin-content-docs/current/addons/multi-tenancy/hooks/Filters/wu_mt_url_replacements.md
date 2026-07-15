---
id: wu_mt_url_replacements
title: 過濾器 - wu_mt_url_replacements
sidebar_label: wu_mt_url_replacements
_i18n_hash: 2a3e1ab7bb695958155a426bfb7fce2b
---
# 過濾器：wu_mt_url_replacements

用來過濾 URL 替換的對陣列。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $replacements | `array` | 目前已儲存的替換對陣列。 |
| $old_url | `string` | 舊的 URL。 |
| $new_url | `string` | 新的 URL。 |
| $blog_id | `int` | 部落格 ID。 |

### 適用版本 {#since}

- 1.0.0
### 來源 {#source}

定義於 [`inc/migration/class-url-rewriter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-url-rewriter.php#L151) 的第 151 行
