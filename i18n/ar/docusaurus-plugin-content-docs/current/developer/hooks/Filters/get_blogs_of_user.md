---
id: get_blogs_of_user
title: فلتر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# عامل التصفية: get_blogs_of_user

يكرر عامل التصفية الأصلي لـ WP هنا، للضمان.

يقوم بتصفية قائمة المواقع التي ينتمي إليها المستخدم.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $sites | `object[]` | مصفوفة من كائنات المواقع التي ينتمي إليها المستخدم. |
| $user_id | `int` | معرف المستخدم. |
| $all | `bool` | ما إذا كان يجب أن تحتوي مصفوفة المواقع المرجعة على جميع المواقع، بما في ذلك تلك التي تم وضع علامة عليها 'مُحذوفة'، 'مؤرشفة'، أو 'غير مرغوب فيها'. الافتراضي هو false. |

### منذ

- 2.0.11

### المصدر

معرّف في [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) في السطر 851
