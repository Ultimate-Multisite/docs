---
id: wu_post_count
title: Penapis - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Membenarkan pembangun plugin untuk mengubah jumlah kiraan keseluruhan

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $count | `int` | Jumlah keseluruhan pos |
| $post_counts | `object` | Objek WordPress yang dikembalikan oleh fungsi `wp_count_posts` |
| $post_type | `string` | Slug jenis pos |

### Sejak {#since}

- 1.9.1
### Sumber {#source}

Didefinisikan dalam [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) pada baris 136


## Mengembalikan {#returns}
Jumlah baharu
