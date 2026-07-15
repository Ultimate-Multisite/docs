---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Gør det muligt for plugin-udviklere at ændre, hvilken poststatus der skal tælles. Som standard tælles publicerede og private indlæg

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $post_status | `array` | Listen over poststatusser |
| $post_type | `string` | Post type-slug |

### Siden {#since}

- 1.9.1
### Kilde {#source}

Defineret i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) på linje 119


## Returnerer {#returns}
Nyt array af poststatus
