---
id: wu_country_get_cities
title: فیلتر - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# فیلتر: wu_country_get_cities

لیست شهرهای یک استان در یک کشور را برمی‌گرداند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $cities | `array` | لیست نام شهرهای استان. هیچ کلیدی در آن وجود ندارد. |
| $country_code | `string` | کد ISO دو حرفی برای کشور. |
| $state_code | `string` | کد ISO دو حرفی برای استان. |
| $current_country | `\WP_Ultimo\Country\Country` | نمونه‌ای از کلاس فعلی. |

### از نسخه {#since}

- 2.0.11
### منبع {#source}

در [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) در خط ۱۴۶ تعریف شده است.


## مقدار بازگشتی {#returns}
لیست فیلتر شده استان‌ها.
