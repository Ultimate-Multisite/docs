---
id: wu_rest_create_item
title: Filtrační funkce - wu_rest_create_item
sidebar_label: wu_rest_create_item
_i18n_hash: b35924a8414367a9d0c2f3c21f1a1b91
---
# Filter: wu_rest_create_item

Filtr, který určuje, zda je možné požadavek zpracovat, nebo ne.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $allowed | `bool` | Počáteční návratová hodnota. |
| $rest_base | `array` | Slug entity. |
| $this | `\Base_Manager` | Instancí objektu. |

### Od verze {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L362) na řádku 362
