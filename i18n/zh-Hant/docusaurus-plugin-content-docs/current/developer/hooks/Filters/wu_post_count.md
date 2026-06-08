---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# 過濾器：wu_post_count

讓外掛開發者可以更改計數總數

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $count | `int` | 總文章數 |
| $post_counts | `object` | 由 `wp_count_posts` 函數回傳的 WordPress 物件 |
| $post_type | `string` | 文章類型別名 |

### 支援版本

- 1.9.1
### 來源

定義於 [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) 的第 136 行


## 回傳值
新的總數
