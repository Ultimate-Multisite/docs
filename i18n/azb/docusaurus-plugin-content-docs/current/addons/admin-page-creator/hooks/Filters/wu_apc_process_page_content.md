---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Developerlərə son məzmunu dəyişdirməyə imkan verir.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $content | `string` | Yer dəyişdirilmələrindən sonra məzmun. |
| $content_before_processing | `string` | Yer dəyişdirilməzdən əvvəl məzmun. |
| $to_replace | `array` | Yer tutucu (placeholder) dəyərlərini ehtiva edən massiv. |
| $placeholder_count | `int` | Tapılan yer tutucu sayı. |

### Nə vaxtdan

- 1.4.0
### Mənbə

[inc/wu-apc-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) faylında 46-cı sətirdə təyin edilmişdir.

## Qaytarır
Dəyişiklikdən sonra məzmun.
