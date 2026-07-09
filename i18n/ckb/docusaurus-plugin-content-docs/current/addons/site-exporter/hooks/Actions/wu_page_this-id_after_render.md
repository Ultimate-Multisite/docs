---
id: wu_page_this-id_after_render
title: 'کردار - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

دوای پیشاندانی پەڕەیەکی دیاریکراو کاردەکات.

بەکارهێنان: بەشی داینامیک پێویستە بە ناسنامەی پەڕەیەکی دروست بگۆڕدرێت، بۆ نموونە add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ناسنامەی پەڕەکە. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | نموونەی Base Admin Page. |

### لە وەشانی

- 1.8.2
### سەرچاوە

پێناسەکراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) لە دێڕی 394
