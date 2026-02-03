---
id: wu_post_count
title: Filtro - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtro: wu_post_count

Permitir a los desarrolladores de plugins cambiar el total de publicaciones

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $count | `int` | El total de publicaciones |
| $post_counts | `object` | Objeto WordPress devuelto por la función wp_count_posts |
| $post_type | `string` | El slug del tipo de publicación |

### Desde

- 1.9.1

### Fuente

Definido en [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) en la línea 136

## Devuelve

Nuevo total
