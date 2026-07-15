---
id: wu_dashboard_widgets
title: عملیات - wu_dashboard_widgets
sidebar_label: wu_dashboard_widgets
_i18n_hash: 35b6cf5a0b5c24e4378f239bc548c44c
---
# اکشن: wu_dashboard_widgets

این اکشن به توسعه‌دهندگان پلاگین اجازه می‌دهد تا ویجت‌هایی به پنل داشبورد شبکه (Network Dashboard Panel) اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $tab | `string` | تب فعلی. |
| $screen | `\WP_Screen` | شیء صفحه (screen object). |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | نمونه (instance) صفحه مدیریت Ultimate Multisite. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L225) در خط ۲۲۵ تعریف شده است.
