---
id: wu_post_count
title: Suodatin - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Suodatin: wu_post_count

Salli plugin-kehittäjien muuttaa kokonaismäärää

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $count | `int` | Julkaisujen kokonaismäärä |
| $post_counts | `object` | WordPress-objekti, jonka wp_count_posts fn palauttaa |
| $post_type | `string` | Julkaisutyypin slug |

### Alkaen

- 1.9.1
### Lähde

Määritetty tiedostossa [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) rivillä 136


## Palauttaa
Uusi kokonaismäärä
