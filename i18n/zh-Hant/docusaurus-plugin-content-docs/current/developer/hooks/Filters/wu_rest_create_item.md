---
id: wu_rest_create_item
title: 過濾器 - wu_rest_create_item
sidebar_label: wu_rest_create_item
_i18n_hash: b35924a8414367a9d0c2f3c21f1a1b91
---
# Filter: wu_rest_create_item

用於判斷是否允許繼續執行該請求。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | 初始回傳值。 |
| $rest_base | `array` | 實體簡寫 (Entity slug)。 |
| $this | `\Base_Manager` | 物件實例。 |

### 適用版本

- 2.0.0
### 來源

定義於 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L362) 的第 362 行
