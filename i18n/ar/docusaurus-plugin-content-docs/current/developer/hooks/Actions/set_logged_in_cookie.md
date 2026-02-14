---
id: set_logged_in_cookie
title: الإجراء - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# الإجراء: set_logged_in_cookie

يتم إطلاقه مباشرة قبل تعيين ملف تعريف الارتباط للمصادقة عند تسجيل الدخول.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $logged_in_cookie | `string` | قيمة ملف تعريف الارتباط عند تسجيل الدخول. |
| $expire | `int` | الوقت الذي ينتهي فيه فترة السماح لتسجيل الدخول كطابع زمني يونيكس. القيمة الافتراضية هي 12 ساعة بعد انتهاء صلاحية ملف تعريف الارتباط. |
| $expiration | `int` | الوقت الذي ينتهي فيه ملف تعريف الارتباط للمصادقة عند تسجيل الدخول كطابع زمني يونيكس. القيمة الافتراضية هي 14 يومًا من الآن. |
| $user_id | `int` | معرف المستخدم. |
| $scheme | `string` | نظام المصادقة. الافتراضي هو 'logged_in'. |
| $token | `string` | رمز الجلسة للمستخدم لاستخدامه في هذا ملف تعريف الارتباط. |

### منذ

- 2.6.0
- 4.9.0: تم إضافة معلمة <code>$token</code>.

### المصدر

تم تعريفه في [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) في السطر 141
