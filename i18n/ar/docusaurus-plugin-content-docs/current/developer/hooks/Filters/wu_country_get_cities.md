---
id: wu_country_get_cities
title: مرشح - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# عامل التصفية: wu_country_get_cities

يُعيد قائمة المدن في ولاية داخل دولة.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | قائمة بأسماء مدن الولاية. لا توجد مفاتيح. |
| $country_code | `string` | رمز ISO المكوّن من حرفين للدولة. |
| $state_code | `string` | رمز ISO المكوّن من حرفين للولاية. |
| $current_country | `\WP_Ultimo\Country\Country` | مثيل من الفئة الحالية. |

### منذ

- 2.0.11

### المصدر

مُعرَّف في [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) في السطر 146

## Returns

قائمة الولايات المفلترة.
