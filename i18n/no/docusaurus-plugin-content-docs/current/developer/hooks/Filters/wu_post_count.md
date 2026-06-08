---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Lar plugin-utviklere endre det totale antallet

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $count | `int` | Det totale antall postinnlegg |
| $post_counts | `object` | WordPress-objektet returnert av funksjonen `wp_count_posts` |
| $post_type | `string` | Posttypen slug |

### Siden

- 1.9.1
### Kilde

Definert i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) på linje 136


## Returnerer
Det nye totale antallet
