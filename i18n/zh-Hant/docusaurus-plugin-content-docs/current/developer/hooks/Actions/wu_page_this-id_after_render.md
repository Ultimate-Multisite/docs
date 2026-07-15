---
id: wu_page_this-id_after_render
title: '動作 - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 8366130ec913af612a31f8385db10a0b
---
# Action: wu_page_{$this->id}_after_render

允許外掛開發人員在我們輸出頁面內容之後，新增額外的內容。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string` | 此頁面的 ID。 |
| $page | `object` | 頁面物件。 |

### 自 {#since}

- 1.8.2
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L423) 的第 423 行。
