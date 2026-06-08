---
id: wu_page_load
title: 動作 - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

允許外掛開發者為我們的頁面新增額外的鉤子。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $id | `string` | 此頁面的 ID。 |
| $page_hook | `string` | 此頁面的頁面鉤子。 |
| $admin_page | `self` | 頁面實例。 |

### 自

- 1.8.2
- 2.0.4：新增第三個參數：頁面實例。
### 來源

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) 的第 318 行
