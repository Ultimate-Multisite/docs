---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Umožňuje vývojářům pluginů změnit, které stavové posty mají být počítány. Výchozí stav jsou publikované a soukromé posty.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $post_status | `array` | Seznam stavů postů |
| $post_type | `string` | Slug typu postu |

### Od

- 1.9.1
### Zdroj

Definováno v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) na řádku 119


## Vrací
Nový pole stavů postů
