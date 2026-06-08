---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Membenarkan pembangun plugin untuk mengubah status pos mana yang perlu dikira. Secara lalai, pos yang berstatus *published* dan *private* akan dikira.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $post_status | `array` | Senarai status pos |
| $post_type | `string` | Slug jenis pos |

### Sejak

- 1.9.1
### Sumber

Didefinisikan dalam [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) pada baris 119


## Mengembalikan
Array status pos baharu
