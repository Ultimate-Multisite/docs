---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا کارهای اضافی را زمانی که صفحات ثبت می‌شوند، اجرا کنند.

برخلاف `wu_page_load` که فقط زمانی اجرا می‌شود که یک صفحه خاص در حال مشاهده باشد، این hook هنگام ثبت، برای هر صفحه مدیریتی که با استفاده از کد Ultimate Multisite اضافه می‌شود، اجرا می‌شود.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | شناسه (ID) این صفحه. |
| $page_hook | `string` | نام hook این صفحه. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
