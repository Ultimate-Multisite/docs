---
id: wu_page_added
title: الإجراء - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# الإجراء: wu_page_added

السماح لمطوري الإضافات بتشغيل أشياء إضافية عند تسجيل الصفحات.

على عكس wu_page_load، الذي يعمل فقط عندما يُعرض صفحة محددة، يعمل هذا الخطاف عند التسجيل لكل صفحة إدارية تُضاف باستخدام كود WP Ultimo.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | معرف هذه الصفحة. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | الخطاف المُنشئ لهذه الصفحة. |

### منذ

- 2.0.0

### المصدر

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) في السطر 203
