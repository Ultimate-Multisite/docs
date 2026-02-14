---
id: wu_page_this-id_after_render
title: 'الإجراء - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# الإجراء: wu_page_\{$this->id\}_after_render

يتم إطلاقه بعد عرض صفحة محددة.

الاستخدام: يجب استبدال الجزء الديناميكي بمعرف صفحة صالح، على سبيل المثال add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | معرف الصفحة. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | مثيل الصفحة الإدارية الأساسية. |

### منذ

- 1.8.2

### المصدر

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) في السطر 394
