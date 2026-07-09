---
id: signup_get_available_languages
title: عامل التصفية - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# فلتر: signup_get_available_languages

يفلتر قائمة اللغات المتاحة لتسجيلات المواقع في الواجهة الأمامية.

سيؤدي تمرير مصفوفة فارغة إلى هذا الخطاف إلى تعطيل إخراج الإعداد في نموذج التسجيل، وسيتم استخدام اللغة الافتراضية عند إنشاء الموقع. ستتم إزالة اللغات غير المثبتة مسبقًا.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $available_languages | `array` | اللغات المتاحة. |

### منذ

- 4.4.0
### المصدر

مُعرّف في [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) في السطر 117
