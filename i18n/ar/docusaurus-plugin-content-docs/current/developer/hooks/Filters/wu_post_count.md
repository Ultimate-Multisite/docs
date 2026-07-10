---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# عامل التصفية: wu_post_count {#filter-wupostcount}

السماح لمطوري الإضافات بتغيير إجمالي العدد

## المعلمات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $count | `int` | إجمالي عدد المنشورات |
| $post_counts | `object` | كائن WordPress يُرجع بواسطة دالة wp_count_posts |
| $post_type | `string` | اسم slug لنوع المنشور |

### منذ {#since}

- 1.9.1

### المصدر {#source}

مُعرَّف في [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) في السطر 136

## الإرجاع {#returns}
إجمالي جديد
