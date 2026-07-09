---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

پس از رندر شدن یک صفحه خاص اجرا می‌شود.

نحوه استفاده: بخش پویا باید با یک شناسه صفحه (page id) معتبر جایگزین شود، مثلاً: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | شناسه صفحه. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | نمونه (instance) صفحه مدیریت پایه. |

### از نسخه {#since}

- 1.8.2
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) در خط ۳۹۴ تعریف شده است.
