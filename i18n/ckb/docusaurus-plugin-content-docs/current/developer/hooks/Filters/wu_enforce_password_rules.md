---
id: wu_enforce_password_rules
title: فلتەر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

فلتەر بکە کە ئایا یاسا زیادەکانی وشەی نهێنی جێبەجێ بکرێن یان نا.

کاتێک `true` بێت، کەمترین درێژی و پێداویستییەکانی پیتەکان جێبەجێ دەکات. بە شێوەیەکی ئۆتۆماتیکی چالاک دەکرێت بۆ ڕێکخستنی "زۆر بەهێز" یان کاتێک تایبەتمەندی Strong Passwordی Defender Pro چالاک بێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $enforce_rules | `bool` | ئایا یاسا زیادەکان جێبەجێ بکرێن یان نا. |
| $strength_setting | `string` | بەهای ڕێکخستنی بەڕێوەبەر. |
| $defender_active | `bool` | ئایا Strong Passwordی Defender Pro چالاکە یان نا. |

### لە وەشانەوە {#since}

- 2.4.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) لە هێڵی 531
