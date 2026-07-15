---
id: wu_magic_link_enforce_ip
title: پاڵێوەر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter ئەوە دیاری دەکات کە پشتڕاستکردنەوەی ناونیشانی IP بەکاربهێنرێت یان نا.

بیکە بە false بۆ ڕێگەدان بە tokenەکان کە لە تۆڕە جیاوازەکانەوە کار بکەن. ئەمە ئاسایش کەم دەکاتەوە بەڵام بەکارهێنان ئاسانتر دەکات (بۆ نموونە، بۆ بەکارهێنەرانی مۆبایل کە تۆڕ دەگۆڕن).

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $enforce | `bool` | ئایا هاوتاکردنی ناونیشانی IP بەکاربهێنرێت. |

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) لە هێڵی 422
