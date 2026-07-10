---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

ገንቢዎች የመጨረሻውን ይዘት እንዲያስተካክሉ ያስችላል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | በመተካት ሂደት በኋላ ያለው ይዘት። |
| $content_before_processing | `string` | ከመተካት ሂደት በፊት ያለው ይዘት። |
| $to_replace | `array` | የቦታ መያዣዎችን (placeholders) የያዘ አሬይ። |
| $placeholder_count | `int` | የተገኙ የቦታ መያዣዎች ብዛት። |

### Since {#since}

- 1.4.0
### Source {#source}

በ[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) በ46ኛው መስመር ተገልጿል።

## Returns {#returns}
ከተቀየረ በኋላ ያለው ይዘት።
