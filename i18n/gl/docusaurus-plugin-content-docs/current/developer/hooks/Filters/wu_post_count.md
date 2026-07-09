---
id: wu_post_count
title: Filtro - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtro: wu_post_count

Permite que os desenvolvedores de plugin cambien o total do reconto

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $count | `int` | O reconto total de publicacións |
| $post_counts | `object` | Obxecto WordPress devolto pola función wp_count_posts |
| $post_type | `string` | O slug do tipo de publicación |

### Desde

- 1.9.1
### Fonte

Definido en [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na liña 136


## Devolve
Novo total
