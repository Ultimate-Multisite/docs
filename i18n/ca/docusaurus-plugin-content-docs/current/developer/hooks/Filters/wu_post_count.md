---
id: wu_post_count
title: Filtre - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtre: wu_post_count

Permet als desenvolupadors de plugins canviar el recompte total

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $count | `int` | El recompte total de publicacions |
| $post_counts | `object` | Objecte de WordPress retornat per la funció wp_count_posts |
| $post_type | `string` | El slug del tipus de publicació |

### Des de

- 1.9.1
### Font

Definit a [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) a la línia 136


## Retorna
Nou total
