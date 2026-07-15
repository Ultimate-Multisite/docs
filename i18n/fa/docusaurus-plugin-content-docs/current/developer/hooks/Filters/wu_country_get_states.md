---
id: wu_country_get_states
title: فیلتر - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

لیست ایالت‌های این کشور را برمی‌گرداند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $states | `array` | لیستی از ایالت‌ها با فرمت XX => نام. |
| $country_code | `string` | کد ISO دو حرفی برای کشور. |
| $current_country | `\WP_Ultimo\Country\Country` | نمونه (Instance) از کلاس فعلی. |

### از نسخه {#since}

- 2.0.11
### منبع {#source}

در [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) در خط ۸۶ تعریف شده است.


## برمی‌گرداند {#returns}
لیست فیلتر شده ایالت‌ها.
