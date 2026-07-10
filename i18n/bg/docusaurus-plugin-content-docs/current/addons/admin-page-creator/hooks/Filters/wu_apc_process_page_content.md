---
id: wu_apc_process_page_content
title: Филтър - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Позволява на разработчиците да модифицират крайния съдържание

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Съдържание след заместванията. |
| $content_before_processing | `string` | Съдържание преди заместванията. |
| $to_replace | `array` | Масив, съдържащ запълващите елементи (placeholders). |
| $placeholder_count | `int` | Брой намерени запълващи елементи. |

### Since {#since}

- 1.4.0
### Source {#source}

Дефиниран в [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) на линия 46


## Returns {#returns}
Съдържанието след модифициране.
