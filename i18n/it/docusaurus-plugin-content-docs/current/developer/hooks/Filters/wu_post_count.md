---
id: wu_post_count
title: Filtro - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtro: wu_post_count {#filter-wupostcount}

Consenti agli sviluppatori di plugin di modificare il conteggio totale

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $count | `int` | Il conteggio totale dei post |
| $post_counts | `object` | Oggetto WordPress restituito dalla funzione wp_count_posts |
| $post_type | `string` | Lo slug del tipo di post |

### Da {#since}

- 1.9.1

### Fonte {#source}

Definito in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) alla riga 136

## Restituisce {#returns}
Nuovo totale
