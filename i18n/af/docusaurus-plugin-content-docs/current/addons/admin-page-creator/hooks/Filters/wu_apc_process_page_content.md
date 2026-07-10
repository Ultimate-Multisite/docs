---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Laat ontwikkelaars die finale inhoud manipuleer.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $content | `string` | Inhoud na vervanging. |
| $content_before_processing | `string` | Inhoud voor vervanging. |
| $to_replace | `array` | 'Array' wat die placeholders bevat wat vervang moet word. |
| $placeholder_count | `int` | Aantal gevind placeholders. |

### Sedert {#since}

- 1.4.0
### Bron {#source}

Gebewe in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) op lyn 46

## Gee Terug {#returns}
Inhoud na modifikasie.
