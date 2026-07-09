---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses {#filter-wupostcountstatuses}

Omogoča razvijalcem pluginov, da spremenijo, katero stanje objave naj se šteje. Privzeto se štejejo objavljene in zasebne objave

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $post_status | `array` | Seznam stanj objav |
| $post_type | `string` | Slug vrste objave |

### Od različice {#since}

- 1.9.1
### Vir {#source}

Definirano v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) v vrstici 119


## Vrne {#returns}
Novo polje stanj objav
