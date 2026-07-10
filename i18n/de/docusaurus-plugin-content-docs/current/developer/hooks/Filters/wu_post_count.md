---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Erlaube Plugin-Entwicklern, die Gesamtzahl zu ändern

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $count | `int` | Die Gesamtzahl der Beiträge |
| $post_counts | `object` | WordPress-Objekt, das von der Funktion wp_count_posts zurückgegeben wird |
| $post_type | `string` | Der Slug des Beitragstyps |

### Seit {#since}

- 1.9.1

### Quelle {#source}

Definiert in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) an Zeile 136

## Rückgabe {#returns}
Neue Gesamtzahl
