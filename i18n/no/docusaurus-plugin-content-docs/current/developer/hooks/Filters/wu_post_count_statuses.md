---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Lar plugin-utviklere endre hvilke innleggsstatusser som skal telles. Som standard telles publiserte og private innlegg.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $post_status | `array` | Listen over innleggsstatusser |
| $post_type | `string` | Innleggstypen (slug) |

### Siden {#since}

- 1.9.1
### Kilde {#source}

Definert i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) på linje 119


## Returnerer {#returns}
En ny array med innleggsstatusser
