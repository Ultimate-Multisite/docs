---
id: wu_get_site_domain_and_path
title: فیلتر - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# فیلتر: wu_get_site_domain_and_path

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا جفت‌های دامنه/مسیر (domain/path) را دستکاری کنند.

این قابلیت می‌تواند برای کارهای متعددی مفید باشد، مانند پیاده‌سازی نوعی راه‌حل استیجینگ (staging)، استفاده از سرورهای مختلف و غیره.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $d | `object` | شیء فعلی که شامل کلیدهای دامنه و مسیر است. |
| $path_or_subdomain | `string` | مسیر/زیردامنه اصلی که به تابع ارسال شده است. |

### از زمان

- 2.0.0
### منبع

در [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) در خط ۲۳۵ تعریف شده است.

## بازگشت (Returns)
شیئی که شامل کلیدهای دامنه و مسیر است.
