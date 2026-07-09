---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Omogoči razvijalcem poseganje v končno vsebino

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Vsebina po zamenjavah. |
| $content_before_processing | `string` | Vsebina pred zamenjavami. |
| $to_replace | `array` | Polje, ki vsebuje hranjene nadomestne oznake. |
| $placeholder_count | `int` | Število najdenih nadomestnih oznak. |

### Od

- 1.4.0
### Vir

Določeno v [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) v vrstici 46


## Vrne
Vsebina po spremembi.
