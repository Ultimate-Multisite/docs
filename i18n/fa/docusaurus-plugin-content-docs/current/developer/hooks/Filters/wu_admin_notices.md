---
id: wu_admin_notices
title: فیلتر - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# فیلتر: wu_admin_notices {#filter-wuadminnotices}

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا اطلاعیه‌های مدیریتی (admin notices) اضافه شده توسط Ultimate Multisite را فیلتر کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $notices | `array` | لیستی از اطلاعیه‌ها برای پنل خاص. |
| $all_notices | `array` | لیستی از اطلاعیه‌های اضافه شده، که بر اساس پنل تفکیک شده‌اند. |
| $panel | `string` | پنلی که باید اطلاعیه‌ها برای آن بازیابی شود. |
| $filter | `string` | اگر اطلاعیه‌های قابل بستن (dismissable notices) فیلتر شده باشند. |
| $dismissed_messages | `array` | لیستی از کلیدهای پیام‌های بسته‌شده. |

### از زمان {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) در خط ۱۲۱ تعریف شده است.

## بازگشت (Returns) {#returns}
