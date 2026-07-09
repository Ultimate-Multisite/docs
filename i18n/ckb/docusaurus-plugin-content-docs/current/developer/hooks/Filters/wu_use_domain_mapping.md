---
id: wu_use_domain_mapping
title: فلتەر - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# فلتەر: wu_use_domain_mapping {#filter-wuusedomainmapping}

دیاری بکە ئایا نەخشەکردنێک دەبێت بەکاربهێنرێت

بە شێوەیەکی ئاسایی، دەتەوێت تەنها ڕێگە بە نەخشەکردنە چالاکەکان بدەیت بەکاربهێنرێن. بەڵام، ئەگەر دەتەوێت لۆژیکی پێشکەوتووتر بەکاربهێنیت، یان ڕێگە بدەیت دۆمەینە ناچالاکەکانیش نەخشە بکرێن، بە سادەیی لێرە فلتەر بکە.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $is_active | `bool` | ئایا نەخشەکردنەکە وەک چالاک مامەڵەی لەگەڵ بکرێت؟ |
| $mapping | `\Domain` | ئەو نەخشەکردنەی کە پشکنینی دەکەین |
| $domain | `string` |  |

### سەرچاوە {#source}

پێناسە کراوە لە [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) لە هێڵی 391
