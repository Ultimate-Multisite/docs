---
id: wu_post_count_statuses
title: Filtro - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtro: wu_post_count_statuses

Permite aos desenvolvedores de plugins cambiar que estado de publicación debe contarse. Por defecto, cóntanse as publicacións publicadas e privadas

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $post_status | `array` | A lista de estados de publicación |
| $post_type | `string` | O slug do tipo de publicación |

### Desde

- 1.9.1
### Fonte

Definido en [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) na liña 119


## Devolve
Novo array de estado de publicación
