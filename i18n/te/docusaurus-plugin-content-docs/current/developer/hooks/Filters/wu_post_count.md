---
id: wu_post_count
title: వడపోత - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

ప్లగిన్ డెవలపర్‌లు కౌంట్ మొత్తాన్ని మార్చడానికి ఇది అనుమతిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | మొత్తం పోస్ట్ కౌంట్ (The total post count) |
| $post_counts | `object` | `wp_count_posts` ఫంక్షన్ ద్వారా తిరిగి వచ్చే WordPress ఆబ్జెక్ట్ |
| $post_type | `string` | పోస్ట్ రకం స్లగ్ (The post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) లోని 136వ లైన్‌లో నిర్వచించబడింది.

## Returns {#returns}
కొత్త మొత్తం (New total)
