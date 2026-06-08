---
id: wu_page_after_render
title: 動作 - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render

讓外掛開發者可以在我們渲染頁面之後，加入額外的內容。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string` | 此頁面的 ID。 |
| $page | `object` | 頁面物件。 |

### 適用版本

- 1.8.2
### 來源

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) 第 413 行。
