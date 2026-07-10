---
id: wu_dashboard_widgets
title: 動作 - wu_dashboard_widgets
sidebar_label: wu_dashboard_widgets
_i18n_hash: 35b6cf5a0b5c24e4378f239bc548c44c
---
# Action: wu_dashboard_widgets {#action-wudashboardwidgets}

允許外掛開發人員在網路儀表板（Network Dashboard Panel）上新增小工具（widgets）。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | 目前的標籤頁名稱。 |
| $screen | `\WP_Screen` | 螢幕物件。 |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Ultimate Multisite 管理頁面實例。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L225) 的第 225 行
