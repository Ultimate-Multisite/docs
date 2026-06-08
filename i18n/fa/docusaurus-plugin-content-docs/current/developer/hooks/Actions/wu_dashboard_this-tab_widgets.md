---
id: wu_dashboard_this-tab_widgets
title: 'عملکرد - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا ویجت‌هایی به پنل داشبورد شبکه (Network Dashboard Panel) اضافه کنند.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | تب فعلی. |
| $screen | `\WP_Screen` | آبجکت صفحه (screen object). |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | نمونه (instance) صفحه مدیریت Ultimate Multisite. |

### Since

- 2.0.0
### Source

در [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) در خط ۲۱۴ تعریف شده است.
