---
id: wu_username_from_email
title: فلتر - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# مرشح: wu_username_from_email

تصفية اسم المستخدم للعميل الجديد.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $username | `string` | اسم مستخدم العميل. |
| $email | `string` | عنوان البريد الإلكتروني للعميل الجديد. |
| $new_user_args | `array` | مصفوفة معلمات المستخدم الجديد، قد تتضمن الاسم الأول والاسم الأخير. |
| $suffix | `string` | إلحاق سلسلة إلى اسم المستخدم لجعله فريدًا. |

### Since

- 2.0.0

### Source

تم تعريفه في [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) في السطر 516
