---
id: wu_page_this-id_before_render
title: 'الإجراء - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

يتم إطلاقه قبل عرض صفحة محددة.

الاستخدام: يجب استبدال الجزء الديناميكي بمعرف صفحة صالح، على سبيل المثال: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | معرف الصفحة. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | كائن الصفحة الإدارية الأساسية. |

### Since

- 1.8.2

### Source

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) في السطر 368
