---
id: wu_page_this-id_load
title: 'کردار - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

ڕێگە بە گەشەپێدەرانی پێوەکراو بدە بۆ زیادکردنی hookی زیاتر بۆ لاپەڕەیەکی دیاریکراو.

بەکارهێنان: بەشی گۆڕاو پێویستە بە page idیەکی دروست بگۆڕدرێت، بۆ نموونە add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | IDی ئەم لاپەڕەیە. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ئەو hookەی بۆ ئەم لاپەڕەیە دروست کراوە. |

### لە وەشانی

- 1.8.2
### سەرچاوە

پێناسە کراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) لە هێڵی 301
