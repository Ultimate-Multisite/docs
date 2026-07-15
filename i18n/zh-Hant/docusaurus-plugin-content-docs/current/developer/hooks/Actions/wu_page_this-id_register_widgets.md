---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

在為此頁面註冊小工具後觸發。

鉤子名稱中的動態部分 `$this->id`，指的是頁面 ID。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $id | `string` | 頁面 ID。 |
| $page_hook | `string` | 頁面鉤子。 |
| $page | `object` | 頁面物件。 |

### 自 {#since}

- 2.4.10
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) 第 755 行
