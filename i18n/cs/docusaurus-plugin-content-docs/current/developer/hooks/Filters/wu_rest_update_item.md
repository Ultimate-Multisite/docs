---
id: wu_rest_update_item
title: Filtrační funkce - wu_rest_update_item
sidebar_label: wu_rest_update_item
_i18n_hash: 46a659e3004edbe285434103f81bd733
---
# Filtr: wu_rest_update_item

Filtr určuje, zda je možné požadavek zpracovat, nebo ne.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $allowed | `bool` | Počáteční návratová hodnota. |
| $rest_base | `array` | Slug entity. |
| $this | `\Base_Manager` | Instancí objektu. |

### Od verze {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L414) na řádku 414
