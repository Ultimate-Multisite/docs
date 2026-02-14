---
id: wu_page_added
title: الإجراء - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

يسمح لمطوري الإضافات بتشغيل أشياء إضافية عند تسجيل الصفحات.

على عكس `wu_page_load`، الذي يعمل فقط عندما يتم عرض صفحة محددة، يعمل هذا الخطاف عند التسجيل لكل صفحة إدارية تُضاف باستخدام كود Ultimate Multisite.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $page_id | `string` | معرّف هذه الصفحة. |
| $page_hook | `string` | اسم الخطاف لهذه الصفحة. |

### Since

- 2.0.0

### Source

مُعرّف في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) في السطر 228
