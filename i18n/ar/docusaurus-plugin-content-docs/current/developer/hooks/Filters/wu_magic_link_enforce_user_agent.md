---
id: wu_magic_link_enforce_user_agent
title: الفلتر - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# عامل التصفية: wu_magic_link_enforce_user_agent

تصفية ما إذا كان يجب فرض التحقق من وكيل المستخدم.

اضبطه على false للسماح للرموز بالعمل عبر متصفحات/أجهزة مختلفة. هذا يقلل الأمان لكنه يزيد من سهولة الاستخدام.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $enforce | `bool` | ما إذا كان يجب فرض مطابقة وكيل المستخدم. |

### منذ

- 2.0.0

### المصدر

مُعرَّف في [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) في السطر 410
