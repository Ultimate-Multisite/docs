---
id: wu_rest_delete_item
title: Filter - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
# Filter: wu_rest_delete_item

Filtruje, či je povolené pokračovať s požiadavkou alebo nie.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $allowed | `bool` | Počiatočná návratová hodnota. |
| $rest_base | `array` | Slug entity. |
| $this | `\Base_Manager` | Inštancia objektu. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L440) na riadku 440
