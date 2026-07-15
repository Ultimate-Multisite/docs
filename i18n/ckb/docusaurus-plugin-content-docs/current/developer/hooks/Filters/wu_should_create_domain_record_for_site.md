---
id: wu_should_create_domain_record_for_site
title: فلتەر - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# پاڵێوەر: wu_should_create_domain_record_for_site

پاڵێو دەکات کە ئایا Ultimate Multisite پێویستە تۆمارێکی دۆمەین بۆ ماڵپەڕێکی تازە دروستکراو دروست بکات یان نا.

ئەم پاڵێوەرە بەکاربهێنە بۆ سەرکوتکردن یان دواخستنی دروستکردنی خۆکاری تۆماری دۆمەین بۆ ماڵپەڕەکان کە دۆمەینی بنەڕەتی هاوبەشی فۆرمی checkout، خانەخوێی ناوخۆیی، یان دۆمەینێک بەکاردەهێنن کە یەکخستنێکی تر بە جیاوازی بەڕێوەی دەبات.

## پارامەتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $create | `bool` | ئایا پێویستە تۆماری دۆمەین دروست بکرێت. |
| $site | `WP_Site` | ئۆبجێکتی ماڵپەڕی تازە دروستکراو. |

### لەوەتەی {#since}

- 2.13.0

### سەرچاوە {#source}

لە `inc/functions/domain.php` پێناسە کراوە.


## گەڕاوەکان {#returns}

Boolean کە نیشان دەدات ئایا تۆماری دۆمەین دروست بکرێت.
