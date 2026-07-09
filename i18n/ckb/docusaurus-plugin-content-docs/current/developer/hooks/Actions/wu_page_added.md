---
id: wu_page_added
title: کردار - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# کردار: wu_page_added

ڕێگە بدە بە پەرەپێدەری plugin شتی زیاتر جێبەجێ بکەن کاتێک پەڕەکان تۆمار دەکرێن.

بەپێچەوانەی wu_page_load، کە تەنها کاتێک جێبەجێ دەبێت کە پەڕەیەکی دیاریکراو بینراوە، ئەم hookـە لە کاتی تۆمارکردندا بۆ هەموو پەڕەی بەڕێوەبەرییەک جێبەجێ دەبێت کە بە بەکارهێنانی کۆدی Ultimate Multisite زیاد دەکرێت.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $page_id | `string` | ناسنامەی ئەم پەڕەیە. |
| $page_hook | `string` | ناوی hookـی ئەم پەڕەیە. |

### لە وەشانی

- 2.0.0
### سەرچاوە

پێناسەکراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) لە هێڵی 228
