---
id: wu_page_this-id_load
title: '動作 - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

讓外掛開發者能夠為我們的頁面新增額外的鉤子（hooks）。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | 此頁面的 ID。 |
| $page_hook | `string` | 此頁面的頁面鉤子（page hook）。 |
| $admin_page | `self` | 頁面實例（page instance）。 |

### Since

- 1.8.2
- 2.0.4: 新增第三個參數：頁面實例。
### Source

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) 的第 332 行
