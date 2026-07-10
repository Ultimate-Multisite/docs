---
id: wu_post_count
title: Filtro - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtro: wu_post_count {#filter-wupostcount}

Permite que os programadores de plugin alterem o total da contagem

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $count | `int` | A contagem total de publicações |
| $post_counts | `object` | Objeto WordPress devolvido pela fn wp_count_posts |
| $post_type | `string` | O slug do tipo de publicação |

### Desde {#since}

- 1.9.1
### Fonte {#source}

Definido em [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na linha 136


## Devolve {#returns}
Novo total
