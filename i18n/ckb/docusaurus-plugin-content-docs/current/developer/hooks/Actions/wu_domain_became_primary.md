---
id: wu_domain_became_primary
title: کردار - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# کردار: wu_domain_became_primary

کاتێک دۆمەینێک دەبێتە دۆمەینی سەرەکی بۆ ماڵپەڕێک، کارا دەبێت.

ئەم کردارە کارا دەکرێت کاتێک نیشانەی primary_domain ی دۆمەینێک دادەنرێت بۆ true، یان کاتێک دۆمەینێکی سەرەکیی نوێ دروست دەکرێت یان کاتێک دۆمەینێکی هەبوو نوێ دەکرێتەوە بۆ ئەوەی ببێتە سەرەکی.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ئەو دۆمەینەی بوو بە سەرەکی. |
| $blog_id | `int` | ID ی بلۆگی ئەو ماڵپەڕە کاریگەربووە. |
| $was_new | `bool` | ئایا ئەمە دۆمەینێکی نوێ دروستکراوە. |

### لەو کاتەوە

- 2.0.0
### سەرچاوە

پێناسەکراوە لە [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) لە دێڕی 560
