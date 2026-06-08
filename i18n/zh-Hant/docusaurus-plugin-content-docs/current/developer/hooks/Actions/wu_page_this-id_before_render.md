---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render

允許外掛開發人員在我們輸出頁面內容之前，加入額外的內容。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string` | 該頁面的 ID。 |
| $page | `object` | 頁面物件。 |

### 適用版本

- 1.8.2
### 來源

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) 的第 398 行
