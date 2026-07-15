---
id: wu_domain_seller_search_delay
title: فیلتر - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# فیلتر: wu_domain_seller_search_delay

تأخیر دباونس (debounce delay) جستجوی دامنه را بر حسب میلی‌ثانیه فیلتر می‌کند.

برای کاهش فراخوانی‌های API در اتصالات کند، این مقدار را افزایش دهید.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $delay | `int` | تأخیر دباونس بر حسب میلی‌ثانیه. پیش‌فرض ۵۰۰ است. |

### از نسخه {#since}

- ۲.۱.۰
### منبع {#source}

در [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) در خط ۸۵۴ تعریف شده است.
