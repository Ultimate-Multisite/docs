---
id: get_site_url_for_previewer
title: فیلتر - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# فیلتر: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا آدرس (URL) مورد استفاده در پیش‌نمایشگر را فیلتر کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $domain | `string` | دامنه پیش‌فرض که در حال حاضر استفاده می‌شود، برای عملیات مختلف مفید است. |
| $domain_options | `array` | لیستی از تمام گزینه‌های دامنه‌ای که در تنظیمات Ultimate Multisite -> تنظیمات شبکه -> گزینه‌های دامنه وارد شده‌اند. |

### از نسخه {#since}

- 1.7.2
### منبع {#source}

در [inc/checkout/class-legacy-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) در خط ۸۱۲ تعریف شده است.

## مقدار بازگشتی {#returns}
دامنه‌ی جدیدی که باید استفاده شود.
