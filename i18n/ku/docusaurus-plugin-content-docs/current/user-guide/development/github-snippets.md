---
title: پێچەوانەکانی گیتھەر
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# چۆنی بەکارهێنانی قطعات (snippets) ی Ultimate Multisite لە گیتھب رپۆزیۆری ئێم {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

لە گیتھب رپۆزیۆریدا قطعاتی کۆد دەبینیت کە بەردەوام داواکراون لەلایەن بەکارهێنەرانی Ultimate Multisite کە دەیانەوێت کارایییە بچووکەکانی وەک زیادکردنی سکرێپتی Google Analytics لە صفحات تۆمار (sign-up pages) یان پۆشاندنی کاتی meta box لە داشبۆردی ئیدارەدا ئەوە بکەن.

ئەم بابەتە دەربڕین چۆن بەکاریان دەهێنیت یان بە وردی کوێ دەتوانیت ئەم کۆدە دابنێیت.

دەتوانید ئەم قطعاتە لە لۆکن خوارەوە بدۆزیتەوە.

https://github.com/next-press/wp-ultimo-snippets/

دوو ڕێگای هەیە بۆ ئەوەی کۆدەکە زیاد بکەیت:

  1. لە فایلەکەی functions.php ی تێمەکەتدا (theme's functions.php file).

  2. Must-Use Plugins (mu-plugins)

# چۆنی قطعتەکە لە فایلەکەی theme's functions.php دابنێیت. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. بچۆ بۆ داشبۆردی ئیدارەی WordPress Network و بگواشبە Themes > Theme Editor (وێنەی خوارەوە ببینە).

  2. لەو لاپەڕەیەدا کە دەڵێت "Edit Themes"، دڵنیابە کە تێمەکەت بەکارهاتوو (active theme) لەسەر پۆستەکە هەڵبژێردراوە لە فیلدی دراپ다운ی ناوچەی ڕاستی سەرەوەی شاشەکەتدا (#3 لە وێنەی خوارەوە).

  3. لە بەشی "Theme Files" دەربکەو، سەر بە فایلەکەی functions.php بکە بۆ بارکردنی فایلەکە. لە خاڵەکانی خوارەوە سکرول بکە و قطعت Ultimate Multisite کە لە گیتھب رپۆزیۆری得ی، یەکخستە (paste) ناو ئەو شوێنە.

<!-- وێنەیەکی نییە: WordPress Theme Editor دەربکەت بەدوای کارکردنی فایلەکەی functions.php -->

# چۆنی Must-Use Plugins (mu-plugins) دروست بکەیت {#how-to-create-must-use-plugins-mu-plugins}

WordPress تایبەتمەندێک هەیە کە ڕێگە دەدات کۆنترۆڵی تایبەتیی پێکهێنانی "Must-Use Plugins"، یان بە کورت MU-plugins، بارکردن بکەیت.

ئەم MU-plugins تایبەتە پێش هەموو پلاگینەکانی دیکە بار دەکرێنەوە و ناتوانن لەسەردا غیر فعال بکرێن. لە تۆڕێکی Multisite، کۆدەکە لەم MU-plugins یانە لە هەموو سایتەکانت داڵۆز دەکرێت.

1. بە FTP یان SSH دەتوانیت دەست بکەیتە سەر فایلی سیستەمی فایلەکانی WordPress یەکەت.

٢. لە ناو دایرێکتۆری `wp-content`ی دامەزرێنراوەکانی WordPress، دایرێکتۆرییەکی نوێ بە ناوی: `mu-plugins` دروست بکە.

<!-- وێنەیەکی تایبەت نییە: فایلی مێنافەری فایل دەبینێت کە دایرێکتۆری wp-content لەگەڵ فۆلเดری mu-plugins دەردەخات -->

٣. لەسەر کۆمپیوتەرەکەت، فایلی PHP ی نوێی بە ناوی `wu-snippet.php` دروست بکە بە بەکارهێنانی Notepad یان هەر ویرایشگرێکی کۆد (code editor).

٤. ئەو بەشی کۆدی Ultimate Multisite کە لە گیتھب (GitHub) وەربگرتوویت، دابنێی ناو فایلی و سیوەر بکە. دەتوانیت ئەم کۆدانە لە سەرەوەی ئەو بەشەی کۆدە دابنێیت بۆ ئەوەی ناوی پلاتینی (mu plugin) خۆت دیاری بکەیت.
