---
id: wu_post_count
title: Filtrs - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtrs: wu_post_count {#filter-wupostcount}

Ļauj plugin izstrādātājiem mainīt kopējo skaitu

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Kopējais ierakstu skaits |
| $post_counts | `object` | WordPress objekts, ko atgriež wp_count_posts fn |
| $post_type | `string` | Ieraksta tipa slug |

### Kopš {#since}

- 1.9.1
### Avots {#source}

Definēts [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) 136. rindā


## Atgriež {#returns}
Jauna kopsumma
