---
id: wu_generated_username_from_email
title: تصفية - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# المرشح: wu_generated_username_from_email

توليد اسم مستخدم للعميل.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $username | `string` | اسم المستخدم المُنشأ. |
| $email | `string` | عنوان البريد الإلكتروني للعميل الجديد. |
| $new_user_args | `array` | مصفوفة معلمات المستخدم الجديد، قد تتضمن الاسم الأول والاسم الأخير. |
| $suffix | `string` | إلحاق سلسلة إلى اسم المستخدم لجعله فريدًا. |

### منذ

- 3.7.0

### المصدر

مُعرَّف في [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) في السطر 488
