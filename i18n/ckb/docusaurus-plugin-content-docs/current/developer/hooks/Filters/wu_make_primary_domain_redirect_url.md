---
id: wu_make_primary_domain_redirect_url
title: فلتەر - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

URLی ڕەوانەکردن فلتەر دەکات دوای ئەوەی دۆمەینێک بکرێتە سەرەکی.

ڕێگە بە پەرەپێدەران دەدات شوێنی ئەوەی بەکارهێنەران بۆی ڕەوانە دەکرێن، دوای دانانی سەرکەوتووانەی دۆمەینێک وەک سەرەکی، تایبەت بکەن. بە شێوەی پێشوەخت، ڕەوانە دەکات بۆ URLی ئێستا لە ماڵپەڕی سەرەکی، یان بۆ URLی بەڕێوەبەرایەتیی ئەو ماڵپەڕەی دەگۆڕدرێت.

## پارامیتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $redirect_url | `string` | URLی ڕەوانەکردنی پێشوەخت. یان URLی ئێستا (ئەگەر ماڵپەڕی سەرەکی بێت) یان URLی بەڕێوەبەرایەتیی ماڵپەڕی ئێستا. |
| $current_site | `int` | ناسنامەی ئەو ماڵپەڕەی دۆمەینەکەی دەکرێتە سەرەکی. |
| $domain | `\Domain` | ئۆبجێکتی ئەو دۆمەینەی کرایە سەرەکی. |
| $old_primary_domains | `array` | ڕیزبەندیی ناسنامەکانی ئەو دۆمەینانەی پێشتر سەرەکی بوون. |

### لەوەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) لە هێڵی 639


## گەڕاندنەوەکان {#returns}
URLی ڕەوانەکردنی فلتەرکراو.
