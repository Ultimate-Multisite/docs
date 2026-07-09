---
id: wu_page_this-id_load
title: 'عمل - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

به توسعه‌دهندگان پلاگین اجازه می‌دهد قلاب‌های (hooks) اضافی به یک صفحه خاص اضافه کنند.

نحوه استفاده: بخش پویا باید با یک شناسه صفحه معتبر جایگزین شود، مثلاً: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | شناسه این صفحه. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | قلاب (hook) که برای این صفحه ایجاد می‌شود. |

### از نسخه {#since}

- 1.8.2
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) در خط ۳۰۱ تعریف شده است.
