---
id: wu_apc_process_page_content
title: ফিল্টাৰ - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

ডেভেলপাৰক চূড়ান্ত বিষয়বস্তু (content) সলনি কৰিবলৈ অনুমতি দিয়ে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | স্থানান্তৰণ (replacements) কৰাৰ পিছৰ বিষয়বস্তু। |
| $content_before_processing | `string` | স্থানান্তৰণ কৰাৰ আগৰ বিষয়বস্তু। |
| $to_replace | `array` | স্থানধৰক (placeholders) ধৰি থকা এটা array। |
| $placeholder_count | `int` | পোৱা স্থানধৰকৰ সংখ্যা। |

### Since {#since}

- 1.4.0
### Source {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) ফাইলৰ ৪৬ নং শাৰীত সংজ্ঞায়িত।

## Returns {#returns}
সংশোধিত বিষয়বস্তু।
