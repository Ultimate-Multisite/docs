---
id: wu_post_count_statuses
title: Filtro - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtro: wu_post_count_statuses

Permitir a los desarrolladores de plugins cambiar qué estado de publicación debe contarse. Por defecto, se cuentan las publicaciones publicadas y privadas.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | La lista de estados de publicación |
| $post_type | `string` | El slug del tipo de publicación |

### Since

- 1.9.1

### Source

Definido en [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) en la línea 119

## Returns

Nuevo array de estados de publicación
