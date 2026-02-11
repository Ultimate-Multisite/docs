---
id: wu_post_count
title: Filtro - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtro: wu_post_count

Permitir que desenvolvedores de plugins alterem o total de contagem

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $count | `int` | O total de contagem |
| $post_counts | `object` | Objeto WordPress retornado pela função wp_count_posts |
| $post_type | `string` | O slug do tipo de post |

### Desde

- 1.9.1

### Fonte

Definido em [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na linha 136


## Retorna
Novo total
