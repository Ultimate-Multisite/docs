---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Developerlərin son məzmunu dəyişməsinə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Yerəlaşdırmalardan sonraki məzmun. |
| $content_before_processing | `string` | Yerəlaşdırmadan əvvəlki məzmun. |
| $to_replace | `array` | Yer tutucu (placeholder) dəyərlərini ehtiva edən massiv. |
| $placeholder_count | `int` | Tapılan yer tutucu sayı. |

### Since {#since}

- 1.4.0
### Source {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) faylında 46-cı sətirində təyin edilmişdir.

## Returns {#returns}
Dəyişiklikdən sonraki məzmun.
