---
id: secure_auth_cookie
title: فلتر - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# المرشح: secure_auth_cookie

تصفية ما إذا كان يجب إرسال ملف تعريف الارتباط المصادقة فقط عبر HTTPS.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $secure | `bool` | ما إذا كان يجب إرسال ملف تعريف الارتباط فقط عبر HTTPS. |
| $user_id | `int` | معرف المستخدم. |

### منذ

- 3.1.0

### المصدر

تم تعريفه في [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) في السطر 80
