---
id: auth_cookie_expiration
title: فلتر - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# الفلتر: auth_cookie_expiration

يصفّر مدة انتهاء صلاحية ملف تعريف الارتباط للمصادقة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $length | `int` | مدة فترة الانتهاء بالثواني. |
| $user_id | `int` | معرف المستخدم. |
| $remember | `bool` | ما إذا كان يجب تذكر تسجيل دخول المستخدم. الافتراضي غير صحيح. |

### منذ

- 2.8.0
### المصدر

مُعرّف في [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) في السطر 52
