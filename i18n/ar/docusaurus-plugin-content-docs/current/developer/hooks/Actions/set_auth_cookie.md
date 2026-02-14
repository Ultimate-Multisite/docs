---
id: set_auth_cookie
title: الإجراء - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

يتم إطلاقه مباشرة قبل تعيين ملف تعريف الارتباط للمصادقة.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | قيمة ملف تعريف الارتباط للمصادقة. |
| $expire | `int` | الوقت الذي ينتهي فيه فترة السماح لتسجيل الدخول كطابع زمني يونيكس. القيمة الافتراضية هي 12 ساعة بعد انتهاء صلاحية ملف تعريف الارتباط. |
| $expiration | `int` | الوقت الذي ينتهي فيه ملف تعريف الارتباط للمصادقة كطابع زمني يونيكس. القيمة الافتراضية هي 14 يومًا من الآن. |
| $user_id | `int` | معرّف المستخدم. |
| $scheme | `string` | مخطط المصادقة. القيم تشمل 'auth' أو 'secure_auth'. |
| $token | `string` | رمز جلسة المستخدم لاستخدامه لهذا الملف. |

### Since

- 2.5.0
- 4.9.0: تم إضافة معلمة <code>$token</code>.

### Source

تم تعريفه في [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) في السطر 124
