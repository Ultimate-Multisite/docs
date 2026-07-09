---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Memungkinkan pengembang plugin untuk mengubah total hitungan

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $count | `int` | Total hitungan postingan |
| $post_counts | `object` | Objek WordPress yang dikembalikan oleh fungsi `wp_count_posts` |
| $post_type | `string` | Slug tipe postingan |

### Sejak {#since}

- 1.9.1
### Sumber {#source}

Didefinisikan di [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) pada baris 136


## Mengembalikan {#returns}
Total baru
