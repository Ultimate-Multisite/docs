---
id: wu_apc_process_page_content
title: Filtre - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Permet aux développeurs de modifier le contenu final

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $content | `string` | Content after replacements. |
| $content_before_processing | `string` | Content pre replecements. |
| $to_replace | `array` | Array containing the placeholders hold. |
| $placeholder_count | `int` | Number of placeholders found. |

### Depuis {#since}

- 1.4.0
### Source {#source}

Défini dans [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) à la ligne 46


## Retours {#returns}
Contenu après modification.
