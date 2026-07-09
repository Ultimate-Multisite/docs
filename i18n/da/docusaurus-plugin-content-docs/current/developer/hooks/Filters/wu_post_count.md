---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Tillad plugin-udviklere at ændre det samlede antal

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $count | `int` | Det samlede antal indlæg |
| $post_counts | `object` | WordPress object returneret af wp_count_posts-funktionen |
| $post_type | `string` | Post type slug |

### Siden

- 1.9.1
### Kilde

Defineret i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) på linje 136


## Returnerer
Ny total
