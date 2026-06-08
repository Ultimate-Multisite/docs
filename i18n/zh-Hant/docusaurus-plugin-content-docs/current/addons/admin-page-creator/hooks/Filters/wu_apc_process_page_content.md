---
id: wu_apc_process_page_content
title: 過濾器 - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# 篩選器：wu_apc_process_page_content

讓開發人員可以修改最終的內容

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $content | `string` | 替換完成後的內容。 |
| $content_before_processing | `string` | 替換前的原始內容。 |
| $to_replace | `array` | 包含佔位符（placeholders）的陣列。 |
| $placeholder_count | `int` | 找到的佔位符數量。 |

### 適用版本

- 1.4.0
### 來源

定義於 [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) 的第 46 行


## 回傳值
修改後的內容。
