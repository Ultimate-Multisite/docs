---
id: wu_country_get_administrative_division_name
title: فلتر - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# مرشح: wu_country_get_administrative_division_name

يعيد اسمًا جميلًا للفرع الإداري للبلد.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $name | `string` | اسم التقسيم. عادةً ما يكون شيئًا مثل الولاية، المقاطعة، المنطقة، إلخ. |
| $country_code | `string` | رمز ISO المكوّن من حرفين للبلد. |
| $state_code | `string` | رمز ISO المكوّن من حرفين للولاية. |
| $ucwords | `bool` | إذا كنا نكتب الكلمات بأحرف كبيرة. |
| $current_country | `\WP_Ultimo\Country\Country` | مثيل للفئة الحالية. |

### منذ

- 2.0.11

### المصدر

مُعرّف في [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) في السطر 250

## الإرجاع

اسم التقسيم المعدل.
