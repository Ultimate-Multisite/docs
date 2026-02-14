---
id: wu_country_get_states
title: فلتر - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# عامل التصفية: wu_country_get_states

يُرجع قائمة الولايات لهذا البلد.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $states | `array` | قائمة الولايات بتنسيق XX => الاسم. |
| $country_code | `string` | رمز ISO المكوّن من حرفين للبلد. |
| $current_country | `\WP_Ultimo\Country\Country` | مثيل للفئة الحالية. |

### منذ

- 2.0.11
### المصدر

معرّف في [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) في السطر 86


## يُرجع
قائمة الولايات المفلترة.
