---
id: wu_post_count_statuses
title: Filtro - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtro: wu_post_count_statuses {#filter-wupostcountstatuses}

Permite que os programadores de plugins alterem quais estados de publicação devem ser contados. Por padrão, são contadas as publicações publicadas e privadas

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $post_status | `array` | A lista de estados de publicação |
| $post_type | `string` | O slug do tipo de publicação |

### Desde {#since}

- 1.9.1
### Fonte {#source}

Definido em [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) na linha 119


## Retorna {#returns}
Novo array de estado de publicação
