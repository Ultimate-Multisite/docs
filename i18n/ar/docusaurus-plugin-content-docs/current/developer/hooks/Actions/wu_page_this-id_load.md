---
id: wu_page_this-id_load
title: 'الإجراء - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# الإجراء: wu_page_\{$this->id\}_load

السماح لمطوري الإضافات بإضافة نقاط ربط إضافية إلى صفحاتنا.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $id | `string` | معرف هذه الصفحة. |
| $page_hook | `string` | نقطة الربط الخاصة بهذه الصفحة. |
| $admin_page | `self` | مثيل الصفحة. |

### منذ

- 1.8.2
- 2.0.4: تمت إضافة المعامل الثالث: مثيل الصفحة.

### المصدر

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) في السطر 332
