---
id: wu_rest_get_item
title: 過濾器 - wu_rest_get_item
sidebar_label: wu_rest_get_item
_i18n_hash: 6e3f51a53f5b4bafef3d438273c979c8
---
# 過濾器：wu_rest_get_item

用於判斷是否允許繼續執行此請求。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $allowed | `bool` | 初始回傳值。 |
| $rest_base | `array` | 實體 (Entity) 的 slug。 |
| $this | `\Base_Manager` | 物件實例。 |

### 自

- 2.0.0
### 來源

定義於 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L388) 的第 388 行
