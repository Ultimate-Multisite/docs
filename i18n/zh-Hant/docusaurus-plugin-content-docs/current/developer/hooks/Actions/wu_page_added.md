---
id: wu_page_added
title: 動作 - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

讓外掛開發者可以在頁面註冊時執行額外的程式碼。

與 `wu_page_load` 不同，後者只在觀看特定頁面時執行，而這個 hook 則會在使用 Ultimate Multisite 程式碼新增的每個管理員頁面註冊時執行。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string` | 此頁面的 ID。 |
| $page_hook | `string` | 此頁面的 hook 名稱。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) 第 228 行
