---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Omogućava programerima pluginova da promijene koji status objave treba biti uračunat. Podrazumijevano su uračunati objavljene i privatne objave.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $post_status | `array` | Lista statusa objave |
| $post_type | `string` | Slug tipa objave |

### Od

- 1.9.1
### Izvor

Definisano je u [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) na liniji 119


## Vraća
Nova niz statusa objave
