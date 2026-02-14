---
id: signup_get_available_languages
title: مرشح - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# مرشح: signup_get_available_languages

يُرشِّح قائمة اللغات المتاحة لتسجيلات الموقع على الواجهة الأمامية.

عند تمرير مصفوفة فارغة إلى هذا الخطاف، سيتم تعطيل عرض الإعداد في نموذج التسجيل، وسيتم استخدام اللغة الافتراضية عند إنشاء الموقع. سيتم إزالة اللغات غير المثبتة بالفعل.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $available_languages | `array` | اللغات المتاحة. |

### منذ

- 4.4.0

### المصدر

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) at line 125
