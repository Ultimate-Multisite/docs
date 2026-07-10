---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Låter pluginutvecklare ändra det totala antalet inlägg

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $count | `int` | Det totala antalet inlägg |
| $post_counts | `object` | WordPress-objekt som returneras av funktionen `wp_count_posts` |
| $post_type | `string` | Slugen för inläggstypen |

### Sedan {#since}

- 1.9.1
### Källa {#source}

Definieras i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) på rad 136


## Returnerar {#returns}
Det nya totala antalet
