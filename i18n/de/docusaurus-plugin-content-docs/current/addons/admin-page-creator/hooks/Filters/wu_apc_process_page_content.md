---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Ermöglicht Entwicklern, den endgültigen Inhalt zu manipulieren

## Parameter

| Name | Typ | Beschreibung |
|------|-----|--------------|
| $content | `string` | Inhalt nach Ersetzungen. |
| $content_before_processing | `string` | Inhalt vor Ersetzungen. |
| $to_replace | `array` | Array, das die Platzhalter enthält. |
| $placeholder_count | `int` | Anzahl gefundener Platzhalter. |

### Seit

- 1.4.0

### Quelle

Defined in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) at line 46

## Rückgabe

Inhalt nach Modifikation.
