---
id: wu_bypass_unset_current_user
title: فلتەر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# پاڵێوەر: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

ڕێگە بە پەرەپێدەران بدە بۆ تێپەڕاندنی کۆدی unset کردنی بەکارهێنەری ئێستا.

گەڕاندنەوەی هەر شتێک جگە لە null تێپەڕاندنی unset کردنی ئەو بەکارهێنەری ئێستایەی لەژوورەوەیە دەکات. ئەمە دەتوانێت لە هەندێک بارودۆخدا بەسوود بێت، بۆ نموونە، کاتێک مامەڵە لەگەڵ ماڵپەڕە لاوەکییەکان دەکرێت کە وەک پانێڵی بەڕێوەبەر بەکاردەهێنرێن.

## پارامەتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null بۆ بەردەوامبوون، هەر شتێکی تر بۆ تێپەڕاندنی. |
| $current_user | `false\|\WP_User` | ئۆبجێکتی بەکارهێنەری ئێستا. |

### لە وەشانی {#since}

- 2.0.11
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) لە دێڕی 221


## گەڕاندنەوەکان {#returns}
