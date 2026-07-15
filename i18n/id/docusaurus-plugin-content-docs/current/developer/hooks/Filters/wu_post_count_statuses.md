---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Memungkinkan pengembang plugin untuk mengubah status postingan mana saja yang harus dihitung. Secara default, postingan yang berstatus *published* dan *private* akan dihitung.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Daftar status postingan |
| $post_type | `string` | Slug tipe postingan |

### Sejak {#since}

- 1.9.1
### Sumber {#source}

Didefinisikan di [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) pada baris 119


## Mengembalikan {#returns}
Array status postingan yang baru
