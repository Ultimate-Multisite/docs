---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا کارهای اضافی را زمانی که صفحات ثبت می‌شوند، اجرا کنند.

برخلاف `wu_page_load` که فقط زمانی اجرا می‌شود که یک صفحه خاص در حال مشاهده باشد، این هوک (hook) هنگام ثبت شدن برای هر صفحه مدیریتی که با استفاده از کد WP Ultimo اضافه می‌شود، اجرا می‌شود.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | شناسه (ID) این صفحه. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هوک (hook) تولید شده برای این صفحه. |

### Since {#since}

- 2.0.0
### Source {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) در خط 203 تعریف شده است.
