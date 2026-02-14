---
id: wu_minimum_password_strength
title: مرشح - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

تصفية الحد الأدنى لقوة كلمة المرور المطلوبة (درجة zxcvbn).

مستويات القوة: - 0، 1: ضعيف جدًا - 2: ضعيف - 3: متوسط - 4: قوي (افتراضي).

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $min_strength | `int` | المستوى الأدنى للقوة المطلوب. |
| $strength_setting | `string` | قيمة إعداد المسؤول (متوسط، قوي، قوي جدًا). |

### منذ

- 2.4.0

### المصدر

معرّف في [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) في السطر 516
