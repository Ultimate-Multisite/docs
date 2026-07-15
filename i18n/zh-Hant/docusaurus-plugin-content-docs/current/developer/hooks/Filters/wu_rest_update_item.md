---
id: wu_rest_update_item
title: 篩選器 - wu_rest_update_item
sidebar_label: wu_rest_update_item
_i18n_hash: 46a659e3004edbe285434103f81bd733
---
# Filter: wu_rest_update_item

用於判斷是否允許繼續執行此請求。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $allowed | `bool` | 初始回傳值。 |
| $rest_base | `array` | 實體 (Entity) 的 slug。 |
| $this | `\Base_Manager` | 物件實例。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L414) 的第 414 行
