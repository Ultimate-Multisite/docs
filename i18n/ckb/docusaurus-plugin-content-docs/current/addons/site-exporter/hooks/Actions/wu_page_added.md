---
id: wu_page_added
title: کردار - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# کردار: wu_page_added {#action-wupageadded}

ڕێگە بدە بە پەرەپێدەرانی plugin شتی زیاتر جێبەجێ بکەن کاتێک پەڕەکان تۆمار دەکرێن.

بە پێچەوانەی wu_page_load، کە تەنها کاتێک جێبەجێ دەکرێت کە پەڕەیەکی دیاریکراو دەبینرێت، ئەم hookە لە کاتی تۆمارکردندا بۆ هەموو پەڕەکانی بەڕێوەبەر جێبەجێ دەکرێت کە بە بەکارهێنانی کۆدی WP Ultimo زیاد دەکرێن.

## پارامەتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ناسنامەی ئەم پەڕەیە. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ئەو hookەی بۆ ئەم پەڕەیە دروست کراوە. |

### لەوەتەی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) لە هێڵی 203
