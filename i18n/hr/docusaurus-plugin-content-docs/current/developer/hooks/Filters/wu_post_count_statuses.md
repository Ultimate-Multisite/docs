---
id: wu_post_count_statuses
title: Filtar - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses {#filter-wupostcountstatuses}

Omogućuje developerima pluginova promjenu toga koji status objave treba biti prebrojan. Prema zadanim postavkama prebrojavaju se objavljene i privatne objave

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $post_status | `array` | Popis statusa objava |
| $post_type | `string` | Slug vrste objave |

### Od {#since}

- 1.9.1
### Izvor {#source}

Definirano u [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) u retku 119


## Vraća {#returns}
Novi niz statusa objava
