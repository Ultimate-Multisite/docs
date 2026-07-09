---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

允許開發人員修改初始搜尋的結果。

這對於第三方建構工具等場景非常有用。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | 判斷元素是否包含在內容中。 |
| $content | `string` | 正在檢查的內容。 |
| $element | `self` | 當前的元素。 |
| $post | `null\|\WP_Post` | 要檢查的文章。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) 第 534 行
