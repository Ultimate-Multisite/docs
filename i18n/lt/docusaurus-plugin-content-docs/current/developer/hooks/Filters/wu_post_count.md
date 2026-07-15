---
id: wu_post_count
title: Filtras - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtras: wu_post_count

Leiskite plugin kūrėjams pakeisti bendrą skaičių

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $count | `int` | Bendras įrašų skaičius |
| $post_counts | `object` | WordPress objektas, grąžinamas wp_count_posts fn |
| $post_type | `string` | Įrašo tipo slug |

### Nuo {#since}

- 1.9.1
### Šaltinis {#source}

Apibrėžta [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) 136 eilutėje


## Grąžina {#returns}
Naują bendrą skaičių
