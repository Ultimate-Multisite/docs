---
id: wu_page_before_render
title: 動作 - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render

讓外掛開發者可以在我們輸出頁面內容之前，加入額外的內容。

## 參數

| 名稱 | 類型 | 說明 |
|------|------|-------------|
| $page_id | `string` | 此頁面的 ID。 |
| $page | `object` | 頁面物件。 |

### 從

- 1.8.2
### 來源

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) 第 388 行
