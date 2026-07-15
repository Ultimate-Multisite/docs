---
id: wu_rest_get_items
title: 過濾器 - wu_rest_get_items
sidebar_label: wu_rest_get_items
_i18n_hash: cc7851a8307ce40de0b75fc0d9d50693
---
# 過濾器：wu_rest_get_items

用於判斷是否允許繼續執行此請求。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $allowed | `bool` | 初始回傳值。 |
| $rest_base | `array` | 實體簡寫 (Entity slug)。 |
| $this | `\Base_Manager` | 物件實例。 |

### 可用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L336) 的第 336 行
