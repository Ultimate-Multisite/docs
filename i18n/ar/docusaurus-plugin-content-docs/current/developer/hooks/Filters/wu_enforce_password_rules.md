---
id: wu_enforce_password_rules
title: فلتر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# المرشح: wu_enforce_password_rules

فلتر ما إذا كان يجب تطبيق قواعد إضافية لكلمة المرور.

عند القيمة true، يفرض الحد الأدنى للطول ومتطلبات الأحرف. يُفعَّل تلقائياً عند إعداد "Super Strong" أو عندما تكون ميزة كلمة المرور القوية في Defender Pro نشطة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $enforce_rules | `bool` | ما إذا كان يجب تطبيق قواعد إضافية. |
| $strength_setting | `string` | قيمة إعداد المسؤول. |
| $defender_active | `bool` | ما إذا كان ميزة كلمة المرور القوية في Defender Pro نشطة. |

### منذ

- 2.4.0

### المصدر

مُعرَّف في [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) في السطر 531
