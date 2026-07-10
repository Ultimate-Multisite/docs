---
id: wu_domain_mapping_register_filters
title: کردار - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

هەندێک پێوەکراوەکان URL پاشەکەوت دەکەن پێش ئەوەی نەخشەکردن چالاک بووبێت، یان URL بە شێوازێکی جیاواز دروست دەکەن کە لە filter ـەکانی سەرەوەدا نەهاتووە.

لە حاڵەتەکانی وەک ئەوەدا، دەمەوێت filter ـی زیادە زیاد بکەین. پارامێتری دووەم کە دەنێردرێت mangle_url callback ـە. ئێمە پێشنیار ناکەین ئەم filter ـە ڕاستەوخۆ بەکاربهێنرێت. لەبری ئەوە، ڕێبازی Domain_Mapping::apply_mapping_to_url بەکاربهێنە.

## پارامێترەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $mangle_url | `callable` | callable ـی mangle. |
| $domain_mapper | `self` | ئەم شتە. |

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) لە هێڵی 530
