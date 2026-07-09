---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Erlaubt Entwicklern, die endgültigen Inhalte zu verändern

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|--------------|
| $content | `string` | Content after replacements. |
| $content_before_processing | `string` | Content pre replecements. |
| $to_replace | `array` | Array containing the placeholders hold. |
| $placeholder_count | `int` | Number of placeholders found. |

### Seit {#since}

- 1.4.0
### Quelle {#source}

Definiert in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) in Zeile 46


## Rückgabe {#returns}
Inhalt nach der Änderung.
