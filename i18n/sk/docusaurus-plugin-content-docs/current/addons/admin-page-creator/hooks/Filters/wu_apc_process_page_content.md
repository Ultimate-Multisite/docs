---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Umožňuje vývojárom zasahovať do finálneho obsahu

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $content | `string` | Obsah po nahradeniach. |
| $content_before_processing | `string` | Obsah pred nahradeniami. |
| $to_replace | `array` | Pole obsahujúce zadržané zástupné symboly. |
| $placeholder_count | `int` | Počet nájdených zástupných symbolov. |

### Od verzie

- 1.4.0
### Zdroj

Definované v [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) na riadku 46


## Vráti
Obsah po úprave.
