---
id: wu_page_this-id_before_render
title: 'عملیات - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# اکشن: wu_page_{$this->id}_before_render

این اکشن قبل از رندر شدن یک صفحه خاص اجرا می‌شود.

**نحوه استفاده:** بخش پویا (dynamic part) باید با یک شناسه صفحه معتبر جایگزین شود. مثال: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | شناسه صفحه. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | نمونه کلاس صفحه پایه (Base Admin Page). |

### از نسخه

- 1.8.2
### منبع

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) در خط ۳۶۸ تعریف شده است.
