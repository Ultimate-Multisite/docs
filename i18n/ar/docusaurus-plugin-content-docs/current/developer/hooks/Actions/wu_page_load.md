---
id: wu_page_load
title: الإجراء - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

السماح لمطوري الإضافات بإضافة خطافات إضافية إلى صفحاتنا.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $id | `string` | معرف هذه الصفحة. |
| $page_hook | `string` | خطاف الصفحة لهذه الصفحة. |
| $admin_page | `self` | مثيل الصفحة. |

### منذ

- 1.8.2
- 2.0.4: أضيف المعامل الثالث: مثيل الصفحة.

### المصدر

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) في السطر 318
