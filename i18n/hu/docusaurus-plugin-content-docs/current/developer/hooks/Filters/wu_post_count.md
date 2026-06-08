---
id: wu_post_count
title: Szűrő - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Szűrő: wu_post_count

Engedélyezi a plugin fejlesztőknek a számok összesítésének módosítását

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $count | `int` | Az összes bejegyzés száma |
| $post_counts | `object` | A `wp_count_posts` függvény által visszaadott WordPress objektuma |
| $post_type | `string` | A bejegyzéstípus (post type) slugja |

### Since

- 1.9.1
### Source

Definíciója a [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) fájlban, 136-sorban


## Várható visszaadás
Az új összesített szám
