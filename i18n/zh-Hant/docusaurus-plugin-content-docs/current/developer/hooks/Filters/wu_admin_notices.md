---
id: wu_admin_notices
title: 過濾器 - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

允許開發人員過濾 Ultimate Multisite 添加的管理通知。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | 該特定面板的通知列表。 |
| $all_notices | `array` | 已添加的通知列表，並依面板進行分類。 |
| $panel | `string` | 用於檢索通知的面板名稱。 |
| $filter | `string` | 如果可關閉的通知已被過濾掉，此參數為真。 |
| $dismissed_messages | `array` | 已關閉的通知鍵列表。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) 的第 121 行


## Returns {#returns}
