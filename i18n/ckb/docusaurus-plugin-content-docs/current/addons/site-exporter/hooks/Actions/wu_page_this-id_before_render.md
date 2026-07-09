---
id: wu_page_this-id_before_render
title: 'کردار - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

پێش ڕێندەرکردنی پەڕەیەکی دیاریکراو کاردەکات.

بەکارهێنان: بەشی داینامیکی پێویستە بە ناسنامەی پەڕەیەکی دروست بگۆڕدرێت، وەک add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ناسنامەی پەڕەکە. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | نموونەی Base Admin Page. |

### لە وەشانی {#since}

- 1.8.2
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) لە هێڵی 368
