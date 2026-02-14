---
id: wu_sso_enabled
title: تصفية - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# عامل التصفية: wu_sso_enabled

تمكين/تعطيل ميزة الدخول الأحادي عبر النطاقات.

استخدم هذا العامل لإيقاف تشغيل الدخول الأحادي بالكامل، أو لتمكينه بشكل شرطي بدلاً من ذلك.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $enabled | `bool` | هل يجب تمكين الدخول الأحادي؟ صحيح للتفعيل، غير صحيح للإيقاف. |

### Since

- 2.0.11

### Source

تم تعريفه في [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) في السطر 110

## يُرجع

إذا كان الدخول الأحادي مفعلًا أم لا.
