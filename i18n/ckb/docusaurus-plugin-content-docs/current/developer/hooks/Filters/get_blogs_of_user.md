---
id: get_blogs_of_user
title: فلتەر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

لێرە وەک پێویست، WP Filterـی ئەسڵی دووبارە دەکاتەوە.

لیستی ئەو ماڵپەڕانە فلتەر دەکات کە بەکارهێنەرەکە سەری بەوانەوەیە.

## پارامێتەرەکان {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | ڕیزبەندییەک لە ئۆبجێکتی ماڵپەڕەکان کە سەر بە بەکارهێنەرن. |
| $user_id | `int` | IDـی بەکارهێنەر. |
| $all | `bool` | ئەوەی ئایا ڕیزبەندی ماڵپەڕە گەڕاوەکان پێویستە هەموو ماڵپەڕەکان لەخۆ بگرێت، بەوانەشەوە کە بە 'deleted'، 'archived'، یان 'spam' نیشانکراون. بنەڕەت false. |

### لە وەشانی {#since}

- 2.0.11
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) لە هێڵی 851
