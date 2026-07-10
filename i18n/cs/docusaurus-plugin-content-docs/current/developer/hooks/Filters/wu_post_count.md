---
id: wu_post_count
title: Filtrační parametr - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Umožňuje vývojářům pluginů změnit celkový počet položek

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $count | `int` | Celkový počet položek |
| $post_counts | `object` | Objekt WordPress vrácený funkcí `wp_count_posts` |
| $post_type | `string` | Slugg post typu |

### Od {#since}

- 1.9.1
### Zdroj {#source}

Definováno v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na řádku 136


## Vrací {#returns}
Nový celkový počet
