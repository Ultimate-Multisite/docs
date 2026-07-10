---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Låter utvecklare manipulera det slutgiltiga innehållet

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $content | `string` | Innehållet efter ersättningar. |
| $content_before_processing | `string` | Innehållet före ersättningar. |
| $to_replace | `array` | Array som innehåller platshållarna. |
| $placeholder_count | `int` | Antal platshållare hittade. |

### Sedan {#since}

- 1.4.0
### Källa {#source}

Definieras i [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) på rad 46


## Returnerar {#returns}
Innehållet efter modifiering.
