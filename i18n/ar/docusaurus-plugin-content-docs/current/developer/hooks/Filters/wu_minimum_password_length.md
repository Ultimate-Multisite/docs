---
id: wu_minimum_password_length
title: فلتر - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# المرشح: wu_minimum_password_length

تصفية الحد الأدنى لطول كلمة المرور.

يتم تطبيقه فقط عندما يكون wu_enforce_password_rules صحيحًا.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------|
| $min_length | `int` | الحد الأدنى لطول كلمة المرور. القيمة الافتراضية 12 (مطابقة Defender Pro). |
| $defender_active | `bool` | ما إذا كان Defender Pro Strong Password نشطًا. |

### منذ

- 2.4.0

### المصدر

تم تعريفه في [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) في السطر 543
