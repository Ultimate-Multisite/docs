---
id: wu_post_count_statuses
title: 過濾器 - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# 篩選器：wu_post_count_statuses

允許外掛開發者更改計數文章時應包含哪些文章狀態。預設情況下，會計算已發佈和私人文章。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $post_status | `array` | 文章狀態的列表 |
| $post_type | `string` | 文章類型別名 |

### 自

- 1.9.1
### 來源

定義於 [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) 的第 119 行


## 回傳值
新的文章狀態陣列
