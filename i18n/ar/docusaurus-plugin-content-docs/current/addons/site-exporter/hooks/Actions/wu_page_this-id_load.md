---
id: wu_page_this-id_load
title: 'الإجراء - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

السماح لمطوري الإضافات بإضافة نقاط ربط إضافية إلى صفحة محددة.

الاستخدام: يجب استبدال الجزء الديناميكي بمعرف صفحة صالح، على سبيل المثال:
```php
add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);
```

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | معرّف هذه الصفحة. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | النقطة الربط التي تم إنشاؤها لهذه الصفحة. |

### Since

- 1.8.2

### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
