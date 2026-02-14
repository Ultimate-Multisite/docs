---
id: wu_page_this-id_register_widgets
title: 'الإجراء - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# إجراء: wu_page_{$this->id}_register_widgets

يتم إطلاقه بعد تسجيل الودجات لهذه الصفحة.

الجزء الديناميكي من اسم الخطاف، `$this->id`، يشير إلى معرّف الصفحة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $id | `string` | معرّف الصفحة. |
| $page_hook | `string` | خطاف الصفحة. |
| $page | `object` | كائن الصفحة. |

### منذ

- 2.4.10

### المصدر

تم تعريفه في [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) في السطر 755
