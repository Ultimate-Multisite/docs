---
id: wu_country_get_administrative_division_name
title: فیلتر - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

نام زیبا برای زیرتقسیمات اداری کشور را برمی‌گرداند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | نام تقسیمات. معمولاً چیزی شبیه ایالت، استان، منطقه و غیره است. |
| $country_code | `string` | کد ISO دو حرفی کشور. |
| $state_code | `string` | کد ISO دو حرفی ایالت. |
| $ucwords | `bool` | اگر می‌خواهیم کلمات را بزرگ‌حرف (uppercase) کنیم. |
| $current_country | `\WP_Ultimo\Country\Country` | نمونه از کلاس فعلی. |

### از نسخه {#since}

- 2.0.11
### منبع {#source}

در [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) در خط ۲۵۰ تعریف شده است.


## مقدار بازگشتی {#returns}
نام تقسیمات اصلاح شده.
