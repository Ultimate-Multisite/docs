---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

ప్లగిన్ డెవలపర్‌లు ఏ పోస్ట్ స్టేటస్‌లను లెక్కించాలి (count) అనేది మార్చడానికి ఇది అనుమతిస్తుంది. డిఫాల్ట్‌గా, పబ్లిష్డ్ (published) మరియు ప్రైవేట్ (private) పోస్ట్‌లను లెక్కలోకి తీసుకుంటారు.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | పోస్ట్ స్టేటస్‌ల జాబితా (list of post statuses) |
| $post_type | `string` | పోస్ట్ రకం స్లగ్ (post type slug) |

### Since

- 1.9.1
### Source

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) లోని 119వ లైన్‌లో నిర్వచించబడింది.

## Returns
పోస్ట్ స్టేటస్‌ల యొక్క కొత్త array.
