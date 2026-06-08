---
id: wu_apc_process_page_content
title: Filtrační funkce - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Umožňuje vývojářům upravit finální obsah stránky.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $content | `string` | Obsah po nahrazení. |
| $content_before_processing | `string` | Obsah před nahrazením. |
| $to_replace | `array` | Pole obsahující nahrazovací texty. |
| $placeholder_count | `int` | Počet nalezených nahrazovacích textů. |

### Od

- 1.4.0
### Zdroj

Definováno v [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) na řádku 46


## Vrací
Obsah po úpravě.
