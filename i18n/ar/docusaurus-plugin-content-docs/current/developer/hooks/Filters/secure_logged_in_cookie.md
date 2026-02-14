---
id: secure_logged_in_cookie
title: فلتر - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# عامل التصفية: secure_logged_in_cookie

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ما إذا كان يجب إرسال ملف تعريف الارتباط للمستخدم المسجل الدخول فقط عبر HTTPS. |
| $user_id | `int` | معرف المستخدم. |
| $secure | `bool` | ما إذا كان يجب إرسال ملف تعريف الارتباط للمصادقة فقط عبر HTTPS. |

### منذ

- 3.1.0

### المصدر

تم تعريفه في [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) في السطر 91
