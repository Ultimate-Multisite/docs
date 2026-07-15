---
id: wu_dashboard_this-tab_widgets
title: '動作 - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets

允許外掛開發人員將小工具（widgets）新增到網路儀表板面板。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $tab | `string` | 當前分頁的名稱。 |
| $screen | `\WP_Screen` | 螢幕物件。 |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Ultimate Multisite 管理頁面實例。 |

### 適用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) 第 214 行
