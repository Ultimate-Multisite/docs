---
id: wu_sso_url
title: عامل تصفية - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# مرشح: wu_sso_url

يرشّح عناوين SSO URL المُنشأة قبل إرجاعها لإجراءات العملاء عبر النطاقات.

استخدم هذا المرشح عندما يحتاج تكامل إلى إضافة سياق موثوق إلى رابط SSO لمستأجر سيادي أو استبدال URL الوسيط مع الحفاظ على التحقق من الرمز الخاص بـ Ultimate Multisite.

## المعلمات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $sso_url | `string` | عنوان SSO URL المُنشأ. |
| $user | `WP_User` | المستخدم الذي ستتم مصادقته عبر زيارة SSO. |
| $site_id | `int` | معرّف الموقع الهدف للزيارة. |
| $redirect_to | `string` | عنوان URL الوجهة بعد نجاح التحقق من SSO. |

### منذ {#since}

- 2.13.0

### المصدر {#source}

مُعرّف في `inc/sso/class-sso.php`.


## الإرجاع {#returns}

عنوان SSO URL بعد الترشيح.
