---
id: wu_page_get_title_links
title: فیلتر - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# فیلتر: wu_page_get_title_links

این فیلتر به توسعه‌دهندگان پلاگین و خود ما اجازه می‌دهد تا لینک‌های عملیاتی (action links) را به صفحات ویرایش خود اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | لینک‌های عملیاتی. |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | این نمونه (instance). |

### از زمان {#since}

- ۱.۸.۲
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) در خط ۶۴۶ تعریف شده است.


## بازگشت (Returns) {#returns}
آرایه لینک‌های عملیاتی.
