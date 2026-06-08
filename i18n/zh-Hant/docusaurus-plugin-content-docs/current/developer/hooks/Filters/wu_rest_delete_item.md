---
id: wu_rest_delete_item
title: 過濾器 - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
# Filter: wu_rest_delete_item

用來判斷是否允許繼續執行此請求。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $allowed | `bool` | 初始回傳值。 |
| $rest_base | `array` | 實體 (Entity) 的 slug。 |
| $this | `\Base_Manager` | 物件實例。 |

### 自

- 2.0.0
### 來源

定義於 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L440) 第 440 行
