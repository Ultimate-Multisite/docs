---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Umožňuje vývojárom pluginov zmeniť, ktorý stav príspevku sa má započítavať. Predvolene sa započítavajú publikované a súkromné príspevky

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $post_status | `array` | Zoznam stavov príspevkov |
| $post_type | `string` | Slug typu príspevku |

### Od verzie

- 1.9.1
### Zdroj

Definované v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) na riadku 119


## Návratová hodnota
Nové pole stavov príspevkov
